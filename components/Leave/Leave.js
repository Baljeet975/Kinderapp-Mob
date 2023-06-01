import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const Leave = () => {
  const [user, setUser] = useState('');
  const [user_name, setName] = useState('');
  const [Reason, setReason] = useState('');
  const [LeaveType, setLeaveType] = useState('');
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [selectedDateTimeEnd, setSelectedDateTimeEnd] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [showPickerEnd, setShowPickerEnd] = useState(false);
  const [selectedDate, setSelected] = useState('');
  const [Start, setStart] = useState('');
  const [End, setEnd] = useState('');
  const [user_id, setUserId] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userdata');
        const parsedUserData = JSON.parse(userData);
        setName(parsedUserData.name);
        setUserId(parsedUserData.id);
      } catch (error) {
        console.error('Error occurred while parsing the JSON data:', error);
      }
    };

    getUserData();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    const formattedDateTime = currentDate.toISOString().split('T')[0];
    setSelectedDateTime(formattedDateTime);
    setStart(formattedDateTime);
    setShowPicker(false);
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentEndDate = selectedDate || date;
    setEndDate(currentEndDate);
    const formattedDateTimeEnd = currentEndDate.toISOString().split('T')[0];
    setSelectedDateTimeEnd(formattedDateTimeEnd);
    setEnd(formattedDateTimeEnd);
    setShowPickerEnd(false);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const showDatePickerEnd = () => {
    setShowPickerEnd(true);
  };

  const submit = async () => {
    if (user_name === '' || Reason === '' || Start === '' || End === '' || LeaveType === '') {
      Alert.alert('Invalid input');
    } else {
      try {
        const Mytoken = await AsyncStorage.getItem('token');
        const response = await fetch('http://kinderapi.ebullientsoft.com/api/applyleave', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Mytoken}`
          },
          body: JSON.stringify({
            user_name,
            Reason,
            Start,
            End,
            LeaveType,
            user_id
          }),
        });
        const data = await response.json();
        Alert.alert("Leave Applied Successfully")
        // console.log(data);
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Input value={user_name} disabled />
      <Button title="From" onPress={showDatePicker} />

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
          androidMode="spinner"
        />
      )}

      <Input placeholder="Select Date" value={selectedDateTime} disabled />

      <Button title="To" onPress={showDatePickerEnd} />

      {showPickerEnd && (
        <DateTimePicker
          value={endDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeEnd}
          androidMode="spinner"
        />
      )}

      <Input placeholder="Select Date" value={selectedDateTimeEnd} disabled />

      <Picker
        selectedValue={LeaveType}
        onValueChange={(itemValue, itemIndex) => setLeaveType(itemValue)}
      >
        <Picker.Item label="Select Type" value="" />
        <Picker.Item label="Sick leave" value="Sick leave" />
        <Picker.Item label="Personal leave" value="Personal leave" />
        <Picker.Item
          label="Family emergency leave"
          value="Family emergency leave"
        />
        <Picker.Item
          label="Sporting or cultural leave"
          value="Sporting or cultural leave"
        />
      </Picker>

      <Input
        placeholder="Enter your Reason"
        value={Reason}
        onChangeText={setReason}
        style={styles.text}
      />

      <Button
        title="Submit"
        onPress={submit}
        disabled={user_name === '' || Reason === '' || Start === '' || End === '' || LeaveType === ''}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  text: {
    fontSize: 15,
  },
});

export default Leave;
