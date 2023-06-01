import React, { useEffect, useState } from 'react'
import TableRow from './TableRow';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';



const Notifications = () => {
  const [notificationslist, setNotificationsList] = useState('')

  useEffect(() => {
    NotificationsData();
  }, []);
  const NotificationsData =async () => {
    try {
      const tokendata = await AsyncStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${tokendata}`,
      };
      axios.get(`http://kinderapi.ebullientsoft.com/api/allnotifications`, {
        headers,
      }).then((res) => {
        const showData = res?.data?.result;
        setNotificationsList(showData);
      });

    } catch (error) {
      console.log("Error occurred", error);
    }

  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <View style={styles.DateD}>
      <Icon name="calendar" size={15} color="#000"  style={styles.icon}/>
      <Text style={styles.notificationDate}>{item.notificationDate}</Text>
      </View>
      <View style={styles.DescD}>
      <Icon name="bell" size={15} color="#000" />
      <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (


    <View style={styles.container}>
      <FlatList
        data={notificationslist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    display: "flex",
    justifyContent: "center"
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
    display: "flex",
    marginLeft:30,
  },
  description: {
    fontSize: 12,
    marginLeft:20,
    padding:10,
    marginTop:-12
  },
  DateD:{
    flexDirection:"row",
    // justifyContent:"center"
  },
  DescD :{
    flexDirection:"row",
    marginTop:10
  }
});

export default Notifications