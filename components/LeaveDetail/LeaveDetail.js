import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LeaveDetails = () => {

  const [leaveData, setLeaveData] = useState("");
  // console.log("Entering",leaveData)
  const[userid,setUserId]=useState("")
  // console.log("userid",userid)
  // const UserData = AsyncStorage.getItem("userdata");
  // const objectData = Promise.resolve(UserData);
  // objectData
  //   .then((data) => {
  //     const UserData = JSON.parse(data);
  //     setUserId(UserData.id)
  //   })
  //   .catch((error) => {
  //     console.error('Error occurred while parsing the JSON data:', error);
  //   });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const MyLeaveToken = await AsyncStorage.getItem("token");
      const UserData = AsyncStorage.getItem("userdata");
      const objectData = Promise.resolve(UserData);
      objectData
    .then((data) => {
      const UserData = JSON.parse(data);

      console.log("userdata",UserData)
      // setUserId(UserData.id)
    })
    .catch((error) => {
      console.error('Error occurred while parsing the JSON data:', error);
    });
      const headers = {
        Authorization: `Bearer ${MyLeaveToken}`,
      };
      const user_id= "1424021173"
      const response = await fetch(`http://kinderapi.ebullientsoft.com/api/singleUserAllLeaves/${user_id}`, {
        headers,
      });
      const json = await response.json();
      setLeaveData(json.result);
    } catch (error) {
      console.log('Error fetching leave data: ', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.Start}>{item.Start}</Text>
      <Text style={styles.End}>{item.End}</Text>
      <Text style={styles.LeaveType}>{item.LeaveType}</Text>
    </View>
  );

  return (


    <View style={styles.container}>
      <FlatList
        data={leaveData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

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
  Start: {
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 5,
    display: "flex",
    justifyContent: "center"
  },
  description: {
    fontSize: 8,
  },
});


export default LeaveDetails;