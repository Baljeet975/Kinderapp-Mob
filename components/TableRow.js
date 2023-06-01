import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableRow = ({ date, notification, by }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{date}</Text>
      <Text style={styles.cell}>{notification}</Text>
      <Text style={styles.cell}>{by}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    paddingHorizontal: 12,
  },
});

export default TableRow;