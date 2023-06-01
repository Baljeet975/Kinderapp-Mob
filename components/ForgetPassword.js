import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const ForgetPassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    if (oldPassword === '') {
      Alert.alert('Error', 'Please enter your old password.');
    } else if (newPassword === '') {
      Alert.alert('Error', 'Please enter a new password.');
    } else if (confirmPassword === '') {
      Alert.alert('Error', 'Please confirm your new password.');
    } else if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New password and confirm password do not match.');
    } else {
      Alert.alert('Success', 'Password reset successfully.');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Old Password"
        secureTextEntry
        onChangeText={setOldPassword}
        value={oldPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        onChangeText={setNewPassword}
        value={newPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Button
        title="Reset Password"
        onPress={handleResetPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
});

export default ForgetPassword;
