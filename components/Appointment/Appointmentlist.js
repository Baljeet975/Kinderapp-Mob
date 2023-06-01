import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Appointmentlist = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const options = {
        headers: headers,
      };

      const response = await fetch(
        'http://kinderapi.ebullientsoft.com/api/allappointment',
        options
      );

      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      } else {
        console.error('Error fetching appointments:', response.status);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <View style={styles.container}>
      {appointments.length > 0 ? (
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.appointmentItem}>
              <View style={styles.row}>
                <Text style={styles.label}>Student Name:</Text>
                <Text style={styles.value}>{item.student_name}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Student Class:</Text>
                <Text style={styles.value}>{item.student_class}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Teacher Name:</Text>
                <Text style={styles.value}>{item.teacher_name}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Appointment Date:</Text>
                <Text style={styles.value}>{item.appointmentDate}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.loadingText}>Loading appointments...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  appointmentItem: {
    marginBottom: 12,
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  value: {
    flex: 1,
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Appointmentlist;
