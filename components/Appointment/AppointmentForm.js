import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button  } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';




const AppointmentForm = () => {
  const [student_name, setStudentName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [teacher_name, setTeacherName] = useState('');
  const [student_class, setStudentClass] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedValue, setSelectedValue] = useState('');
  const [teacher_id, setTeacherId] = useState('');
  const [options, setOptions] = useState([]);



  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue);
  };
  // useEffect(() => {
  //   fetch('https://example.com/api/options')
  //     .then(response => response.json())
  //     .then(data => {
  //       setOptions(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching options:', error);
  //     });
  // }, []);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userdata');
        const parsedUserData = JSON.parse(userData);
        setStudentName(parsedUserData.name);
        setStudentClass(parsedUserData.class);
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
    setAppointmentDate(formattedDateTime);
    setShowPicker(false);
  };

  const handleFormSubmit = async () => {
    try {
      const payload = {
        student_name,
        appointmentDate,
        teacher_name,
        student_class,
        teacher_id,

      };

      const response = await axios.post('http://kinderapi.ebullientsoft.com/api/requestappointment', payload);
      console.log('Appointment created:', response.data);
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };


  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}>Parent Name</Text>
      <TextInput
        style={styles.input}
        value={parentName}
        onChangeText={setParentName}
      /> */}

      <Text style={styles.label}>Student Name</Text>
      <TextInput
        style={styles.input}
        value={student_name}
        onChangeText={setStudentName}
      />
      <Button title="Date" onPress={showDatePicker} />


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

      <TextInput placeholder="Select Date" value={appointmentDate} disabled style={styles.input}
      />
       <Picker
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
      >
        {options.map(option => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>

      {/* <Text style={styles.label}>Teacher Name</Text>
      <TextInput
        style={styles.input}
        value={teacher_name}
        onChangeText={setTeacherName}
      /> */}

      <Text style={styles.label}>Student Class</Text>
      <TextInput
        style={styles.input}
        value={student_class}
        onChangeText={setStudentClass}
      />

      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppointmentForm;
