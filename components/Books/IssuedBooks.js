import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const IssuedBooks = () => {
  const issuedBooks = [
    {
      id: '1',
      title: 'The Punjab Story',
      author: 'Author 1',
      imageUrl: require('../../assets/p.jpg'),

      
    },
    {
      id: '2',
      title: 'Vishwasghat',
      author: 'Author 2',
      imageUrl: require('../../assets/pp.jpeg'),
    },
    {
      id: '3',
      title: ' The Punjab Singh',
      author: 'Author 1',
      imageUrl: require('../../assets/b.jpg'),

      
    },
    {
      id: '4',
      title: 'Two States',
      author: 'Author 2',
      imageUrl: require('../../assets/c.jpeg'),
    },
    {
      id: '5',
      title: 'Ranjit Singh',
      author: 'Author 1',
      imageUrl: require('../../assets/d.jpeg'),

      
    },
    {
      id: '6',
      title: 'Bole Soh Nihal',
      author: 'Author 2',
      imageUrl: require('../../assets/e.jpeg'),
    },
  ];

  const renderBookItem = ({ item }) => (
    <View style={styles.bookItem}>
      {item.imageUrl && (
        <Image style={styles.bookImage} source={ item.imageUrl } />
      )}
      <View style={styles.bookDetails}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>by {item.author}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={issuedBooks}
        keyExtractor={(item) => item.id}
        renderItem={renderBookItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 8,
  },
  bookImage: {
    width: 80,
    height: 120,
    marginRight: 16,
    borderRadius: 4,
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 16,
    color: 'gray',
  },
});

export default IssuedBooks;
