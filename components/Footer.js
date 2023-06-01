import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Alert } from 'react-native';



const Footer = () => {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2021 Your Company Name</Text>
      </View>
    );
  };

  export default Footer
  
  const styles = StyleSheet.create({
    footer: {
      backgroundColor: '#f5f5f5',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
    },
    footerText: {
      color: '#999',
      fontSize: 12,
      textAlign: 'center',
    },
  });