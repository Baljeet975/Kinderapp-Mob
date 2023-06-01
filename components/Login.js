import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View, Image, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Input, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from "axios"
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sessionyear, setSessionYear] = useState(null)
  const [correctData, setCorrectData] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [appInitialized, setAppInitialized] = useState(false);


  const checkTokenExistence = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      return token !== null;
    } catch (error) {
      console.log('Error checking token existence:', error);
      return false;
    }
  };

  useEffect(() => {
    const initializeApp = async () => {
      const tokenExists = await checkTokenExistence();
      setAppInitialized(true);

      if (tokenExists) {
        navigation.navigate('Dashboard');
      } else {
        navigation.navigate('Login');
      }
    };

    initializeApp();
  }, []);
  

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    try {
      const response = await axios.post('http://kinderapi.ebullientsoft.com/api/login', {
        email,
        password,
        sessionyear,
        status:"1"
      });
      console.log('Login successful:', response.data);
      AsyncStorage.setItem('token', response.data.token)
      AsyncStorage.setItem('userdata', JSON.stringify(response.data.user))
      Alert.alert('Welcome', 'You are Successfully Login');
       navigation.navigate('Dashboard')
    } catch (error) {
      Alert.alert('Error', 'Failed to login. Please check your credentials.');
    }
  };


  return (
    <View style={styles.container}>
      {showSuccessMessage && <Text>Login successful!</Text>}

      <Image
        source={require('../assets/s.jpg')}
        style={styles.image}
      />

      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        leftIcon={{ type: 'material', name: 'email' }}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.text}

      />
      <Input
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        leftIcon={{ type: 'material', name: 'lock' }}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.text}
      />
      <Picker
        style={[styles.picker]}
        // placeholder="Select Session Year"
        // selectedValue={sessionyear}
        onValueChange={(itemValue, itemIndex) =>
          setSessionYear(itemValue)
        }>
        <Picker.Item label="Select Session Year" value="0" />
        
        <Picker.Item label="2021-2022" value="2021" />
        <Picker.Item label="2022-2023" value="2022" />
      </Picker>
      <Button
        title={'Login'}
        onPress={handleLogin}
        // onPress={handle}
        buttonStyle={styles.button}
      />
    
      <AwesomeAlert
        show={showAlert}
        title="Login Successfull"
        message="Welcome to dashboard"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        // onConfirmPressed={handleAlertDismiss}
        icon={<Icon name="success" type="font-awesome" size={50} color="#DD6B55" />}
      />

      <AwesomeAlert
        show={showError}
        title="Invalid Username & Password"
        message="Please check your username and password before login"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        // onConfirmPressed={handleAlertDismiss}
        icon={<Icon name="warning" type="font-awesome" size={50} color="#DD6B55" />}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // width: 370,
  },
  image: {
    width: 200,
    height: 200,
    // marginBottom: ,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007aff',
    width: 200,
  },
  picker: {
    width: 200,
    backgroundColor: 'whitesmoke',
    borderColor: 'black',
    borderWidth: 3,
  },
  text: {
    fontSize: 15,

  },
  logtext: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },

  button1: {
    marginTop: 10,
  }

});

export default Login;