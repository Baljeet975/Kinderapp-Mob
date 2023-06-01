import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MyDownloadFiles = () => {
  const downloads = [
    {
      id: 1,
      title: 'File 1',
      size: '10 MB',
      date: '2023-05-20',
    },
    {
      id: 2,
      title: 'File 2',
      size: '5 MB',
      date: '2023-05-21',
    },
    {
      id: 3,
      title: 'File 3',
      size: '7 MB',
      date: '2023-05-22',
    },
    {
      id: 4,
      title: 'File 4',
      size: '3 MB',
      date: '2023-05-23',
    },
  ];

  const renderDownloadItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.size}>Size: {item.size}</Text>
      <Text style={styles.date}>Date: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Downloads</Text>
      <FlatList
        data={downloads}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDownloadItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#F0F0F0',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  size: {
    fontSize: 16,
    marginTop: 8,
  },
  date: {
    fontSize: 16,
    marginTop: 4,
  },
});

export default MyDownloadFiles;
