import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
// import CheckBox from "react-native-check-box";

const MarkAttendance = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const Marktoken = await AsyncStorage.getItem("token");
    console.log("Marktoken", Marktoken)
    try {
      const headers = {
        Authorization: `Bearer ${Marktoken}`,
      };
      axios.get(`http://kinderapi.ebullientsoft.com/api/allusers`, { headers })
        .then((res) => {
          setStudents(res.data);
          console.log(res)
        });

    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAttendanceChange = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].attended = !updatedStudents[index].attended;
    setStudents(updatedStudents);
  };

  const markAttendance = async () => {
    const Marktoken = await AsyncStorage.getItem("token");
    console.log("Marktoken", Marktoken)
    try {
      const response = await fetch('http://kinderapi.ebullientsoft.com/api/postattendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Marktoken}`,
        },
        body: JSON.stringify(students),
      });
      console.log('Attendance marked successfully!');
    } catch (error) {
      console.error('Error marking attendance:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Attendance</Text>
      {/* {students.map((student, index) => (
        <View style={styles.studentContainer} key={student.id}>
          <CheckBox
            value={student.attended}
            onValueChange={() => handleAttendanceChange(index)}
          />
          <Text style={styles.studentName}>{student.name}</Text>
        </View>
      ))}
      <Button title="Mark Attendance" onPress={markAttendance} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  studentName: {
    marginLeft: 10,
  },
});

export default MarkAttendance;
