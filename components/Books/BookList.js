import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';

const BookList = () => {
  const [books, setBooks] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const Mytoken = await AsyncStorage.getItem('token');
    try {
      const headers = {
        Authorization: `Bearer ${Mytoken}`,
      };
      const response = await fetch('http://kinderapi.ebullientsoft.com/api/allbooks', {
        headers,
      });
      const data = await response.json();
      setBooks(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const renderBookItem = ({ item }) => (
    <View style={styles.bookItemContainer}>
      <Image source={{ uri: item.book_image }} style={styles.bookImage} />
      <View style={styles.bookDetails}>
        <Text style={styles.bookTitle}>{item.book_name}</Text>
        <Text style={styles.bookAuthor}>{item.book_author}</Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  bookImage: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bookAuthor: {
    marginTop: 5,
  },
});

export default BookList;
