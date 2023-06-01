import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Image } from 'react-native';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleLogin = () => {
    
  };

  return (
    <View style={styles.container}>
        <Image
                source={require('../assets/s.png')}
                style={styles.image}
            />
      <Text style={styles.title}>Admin Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '40%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    width: '40%',
    height: 50,
    backgroundColor: '#00509D',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    // marginBottom: ,
},
});

export default AdminLogin;