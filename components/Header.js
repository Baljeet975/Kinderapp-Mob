
import { StyleSheet, View, Image, Text, Alert } from 'react-native';
import React, { useState } from 'react';

const Header = () => {
    return (
      <View style={styles.header}>
       <Image
             source={require('../assets/s.jpg')}
             style={styles.headerimg}
            />
      </View>
    );
  };

  export default Header
  
  const styles = StyleSheet.create({
    header: {
    borderBottomWidth: 1,
    borderTopWidth:1,
    },
    headerText: {
      color: '#fff',
      fontSize: 20,
    },
    headerimg:{
        width:60,
        height:60,
      

    }
  });