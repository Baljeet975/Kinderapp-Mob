
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList ,Image,TouchableOpacity} from 'react-native';
import axios from 'react-native-axios';
import { Card, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';




const Home = ({navigation}) => {
  const [notificationslist, setNotificationsList] = useState('')
  const [classnumber, setClassNumber] = useState('')
  const[name, setName]=useState('')

 
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userdata');
        const parsedUserData = JSON.parse(userData);
        setName(parsedUserData.name);
      } catch (error) {
        console.error('Error occurred while parsing the JSON data:', error);
      }
    };

    getUserData();
  }, []);



  useEffect(() => {
    NotificationsData();
  }, []);

  const NotificationsData = async () => {
    const userData = await AsyncStorage.getItem('userdata');
    const Mytoken = await AsyncStorage.getItem("token");

    const objectData = Promise.resolve(userData);
    objectData
      .then((data) => {
        const userData = JSON.parse(data);
        // console.log(userData, "userData class");
        if (userData) {
          try {

            const headers = {
              Authorization: `Bearer ${Mytoken}`,
            };
            axios.post(`http://kinderapi.ebullientsoft.com/api/notificationsbyclass`, {
              class: userData.class

            },
              {
                headers,
              }).then((res) => {
                // console.log(res)
                const showData = res?.data?.result;
                setNotificationsList(showData);
              });

          } catch (error) {
            console.log("Error occurred while retrieving token:", error);
          }
        } else {
          console.log("no user data");

        }
      })
      .catch((error) => {
        console.error('Error occurred while parsing the JSON data:', error);
      });


  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <View style={styles.DateS}>
        <Icon name="calendar" size={15} color="#000" style={styles.icon} />
        <Text style={styles.notificationDate}>{item.notificationDate}</Text>
      </View>
      <View style={styles.desC}>
        <Icon name="bell" size={15} color="#000" />
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
  const AVATAR_URL =
  "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";


  const handleSettings = () => {
    navigation.navigate('Settings')
  }

  return (

    <View style={styles.container}>
      <View
          style={{
            // paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            // marginLeft:-25
          }}
        >
          <Image
            source={{
              uri: AVATAR_URL,
            }}
            style={{ width: 52, aspectRatio: 1, borderRadius: 52 }}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 8,
              }}
              numberOfLines={1}
            >
              Hi, {name} 👋
            </Text>
            <Text
              style={{ opacity: 0.75 }}
              numberOfLines={1}
            >
              Welcome to Kinder App
            </Text>
          </View>
          <TouchableOpacity
          onPress={handleSettings}
            style={{
              width: 40,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              // gap:2
            }}
          >
           <Icon name="cog" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        {/* <View style={{ flexDirection: "row",   marginTop:30 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 40,
              borderRadius: 52,
              borderWidth: 1,
              alignItems: "center",
              paddingHorizontal: 24,
              flexDirection: "row",
              gap: 12,
            }}
          >
          <TextInput
            placeholder='Search'
              style={{
                flex: 1,
                fontSize: 16,
                // width:10,
                // color:"white",
                // color: colors.text,
                opacity: 0.5,
              }}
              />
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={openFilterModal}
            style={{
              width: 40,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              // backgroundColor: colors.primary,
            }}
          >
            <Icon name="filter" size={24}  />
          </TouchableOpacity>
        </View> */}
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop:30
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "700", color: "black" }}
            >
              All Notifications
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "blue"}}>See All</Text>
            </TouchableOpacity>
          </View>
         
        <View style={{
          marginTop:30
        }}>
      <FlatList
        data={notificationslist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  notificationDate: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    // display: "flex",
    marginLeft: 30,
    // marginTop: -12
    // justifyContent: "center"
  },
  description: {
    fontSize: 12,
    marginLeft:30
  },
  desC: {
    flexDirection: "row",
    marginTop:10
  },
  DateS:{
    flexDirection:"row"
  },
  
});



export default Home