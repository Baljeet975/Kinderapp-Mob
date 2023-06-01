import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OnlineClasses = () => {
  const classes = [
    {
      id: 1,
      title: "Math Chapter No-3",
      description: "Classes for Math Chapter No-3 will start at 3pm on Sunday"
    },
    {
      id: 2,
      title: "Hindi Chapter No-2",
      description: "Classes for Hindi Chapter No-2 will start at 10am on Sunday"
    },
    {
      id: 3,
      title: "English Chapter No-3",
      description: "Classes for English Chapter No-3 will start at 12pm on Sunday"
    },
    {
      id: 4,
      title: "Science Chapter No-4",
      description: "Classes for Science Chapter No-4 will start at 2pm on Sunday"
    },
  ];

  const renderClassCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Online Classes</Text>
      <View style={styles.flatListContainer}>
        <FlatList
          data={classes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderClassCard}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  flatListContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    // maxHeight: '70%',
  },
  card: {
    backgroundColor: '#F0F0F0',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    color: 'black',
  },
});

export default OnlineClasses;
