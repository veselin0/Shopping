import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Product = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 6,
    margin: 6,
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});

export default Product;
