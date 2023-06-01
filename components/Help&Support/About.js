import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const About = () => {
  const company = {
    name: 'Your Company',
    description: 'We are a leading company in the industry, providing innovative solutions to our customers. Our mission is to deliver high-quality products and services that exceed customer expectations.',
    website: 'https://kinderapp.ebullientsoft.com/',
    email: 'info@kinderapp.com',
    phone: '+1 123-456-7890',
  };

  const handleWebsitePress = () => {
    Linking.openURL(company.website);
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${company.email}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${company.phone}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{company.name}</Text>
      <Text style={styles.description}>{company.description}</Text>
      <TouchableOpacity style={styles.link} onPress={handleWebsitePress}>
        <Text style={styles.linkText}>{company.website}</Text>
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.link} onPress={handleEmailPress}>
        <Text style={styles.linkText}>{company.email}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={handlePhonePress}>
        <Text style={styles.linkText}>{company.phone}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    marginTop: 5,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default About;
