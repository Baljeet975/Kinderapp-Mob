import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, description }) => {
  const [cardHeight, setCardHeight] = useState(0);

  const handleLayout = () => {
    if (cardHeight === 0) {
      this.cardRef.measure((x, y, width, height) => {
        setCardHeight(height);
      });
    }
  };

  return (
    <View
      ref={(ref) => {
        this.cardRef = ref;
      }}
      style={[styles.card, { height: cardHeight }]}
      onLayout={handleLayout}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default Card;