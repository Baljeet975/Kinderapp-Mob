import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HelpSupportForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userdata');
        const parsedUserData = JSON.parse(userData);
        setName(parsedUserData.name);
        setEmail(parsedUserData.email);
      } catch (error) {
        console.error('Error occurred while parsing the JSON data:', error);
      }
    };

    getUserData();
  }, []);


  const handleSubmit = () => {
    Alert.alert('Form Submitted', `Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.messageInput}
        placeholder="Your Message"
        onChangeText={setMessage}
        value={message}
        multiline
        numberOfLines={5}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,
    // justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  messageInput: {
    width: '100%',
    height: 120,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default HelpSupportForm;
