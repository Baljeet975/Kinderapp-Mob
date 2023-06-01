import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { Input, Button, Card, Text } from 'react-native-elements';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Messages = ({ style }) => {
  const [message, setMessage] = useState('');
  console.log(message);
  const [data, setData] = useState('');
  const [userclass, setUserClass] = useState("");
  const [user_id, setUserID] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userdata');
        const parsedUserData = JSON.parse(userData);
        setUserClass(parsedUserData.class);
        setUserID(parsedUserData.id);
      } catch (error) {
        console.error('Error occurred while parsing the JSON data:', error);
      }
    };

    getUserData();
  }, []);

  const handleSendMessage = async () => {
    const Mytoken = await AsyncStorage.getItem('token');
    if (user_id && userclass) {
      try {
        const headers = {
          Authorization: `Bearer ${Mytoken}`,
        };
        const payload = {
          class: userclass,
          messageDate: new Date().toLocaleDateString(),
          message: message,
          user_id: String(user_id),
        };

        axios
          .post('http://kinderapi.ebullientsoft.com/api/postmessage', payload, {
            headers: headers,
          })
          .then((res) => {
            console.log(res);
            const showData = res?.data;
            Alert.alert('Message sent successfully');

          });
      } catch (error) {
        console.log('Error occurred while retrieving token:', error);
      }
    } else {
      Alert.alert('Validation Error', 'User ID and User class are required');
    }

  };



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const MytokenMessage = await AsyncStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${MytokenMessage}`,
      };
      const response = await axios.get(`http://kinderapi.ebullientsoft.com/api/allmessages`, {
        headers
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ScrollView>

      <View style={[styles.container, style]}>
        <Input
          style={styles.input}
          placeholder="Enter your message"
          value={message}
          onChangeText={setMessage}
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputContainer}
        />
        <Button title="Send Message" onPress={handleSendMessage} buttonStyle={styles.button} />
        <View>
          <View>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => (
                <Card key={index} containerStyle={styles.cardContainer}>
                  <Text>{item.messageDate}</Text>
                  <Text>{item.message}</Text>
                </Card>
              ))
            ) : (
              <Text>No data available</Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {

  cardContainer: {
    marginVertical: 10,
  },
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  inputContainer: {
    borderBottomWidth: 0,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
  },
  input: {


  },
};

export default Messages;