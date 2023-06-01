import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
  const[user,setUser]=useState("");
  // console.log("user",user);

  const avatar= require('../assets/kindericon.png')

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userdata');
        const parsedUserData = JSON.parse(userData);
        setUser(parsedUserData);
      } catch (error) {
        console.error('Error occurred while parsing the JSON data:', error);
      }
    };

    getUserData();
  }, []);


  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      {/* <Text style={styles.bio}>{user.bio}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Profile;