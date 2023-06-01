import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AttendanceCalendar = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchAttendanceData();
  // }, []);

  // const fetchAttendanceData = async () => {
  //   try {
  //     const Mytoken = await AsyncStorage.getItem('token');
  //     const headers = {
  //       Authorization: `Bearer ${Mytoken}`,
  //     };

  //     const response = await axios.get('', {
  //       headers: headers,
  //     });

  //     setData(response.data.result);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const markAttendanceOnCalendar = () => {
    let presentCount = 0;
    let absentCount = 0;
    let markedDates = {};

    data.forEach((attendance) => {
      const date = attendance.date;
      const attendanceStatus = attendance.attendanceStatus;

      if (attendanceStatus === 'Present') {
        presentCount++;
      } else {
        absentCount++;
      }

      markedDates[date] = {
        selected: true,
        marked: true,
        dotColor: attendanceStatus === 'Present' ? 'green' : 'red',
      };
    });

    setMarkedDates(markedDates);
    setPresentCount(presentCount);
    setAbsentCount(absentCount);
  };

  return (
    <View>
      <Calendar markedDates={markedDates} />
      <View>
        <Text>Present Count: {presentCount}</Text>
        <Text>Absent Count: {absentCount}</Text>
        <TouchableOpacity onPress={markAttendanceOnCalendar}>
          <Text>Recalculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AttendanceCalendar;
