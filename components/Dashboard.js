import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Tabs from '../components/Tabs/TabsItems';

const Dashboard = () => {
  
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
  },
});
export default Dashboard