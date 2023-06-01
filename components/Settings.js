import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { Avatar,  Card, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';



const Settings = ({navigation}) => {
  const handleResetPassword = () => {
    navigation.navigate('ResetPassword');
  };

  const handleHelp = () => {
    navigation.navigate('HelpSupport')
  };
  const handleAbout = () => {
    navigation.navigate('About')
  };
  const handleAccount = () => {
    navigation.navigate('Profile')
  };
 

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleAccount}>
          <Card style={styles.card1}>
            <Card.Title title="Account" left={(props) => <Icon name="account-circle" size={30} color="#000" />} />
          </Card>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={handlePrivacy}>
          <Card style={styles.card2}>
            <Card.Title title="Privacy & Security" left={(props) => <Icon name="security" size={30} color="#000" />} />
          </Card>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={handleResetPassword} >
          <Card style={styles.card3}>
            <Card.Title title="Reset Password" left={(props) => <Icon name="lock" size={30} color="#000" />} />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHelp} >
          <Card style={styles.card3}>
            <Card.Title title="Help & Support" left={(props) => <Icon name="headset" size={30} color="#000" />} />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAbout} >
          <Card style={styles.card3}>
            <Card.Title title="About" left={(props) => <Icon name="info" size={30} color="#000" />} />
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop:-20,
    // marginBottom:20,
    // marginTop: 20,
    width: '105%',
  },
  card1: {
    marginTop: 10,
  },
  card2: {
    marginTop: 10,
  },
  card3: {
    marginTop: 10,
    // marginBottom:20
  },
});

export default Settings;
