import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Alert,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './Header';
import Product from './Product';
import AddProduct from './AddProduct';

const ListScreen = () => {
  const [products, setProducts] = useState([
    { text: 'coffee', key: '1' },
    { text: 'beans', key: '2' },
    { text: 'peppers', key: '3' },
  ]);

  const pressHandler = (key) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.key !== key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setProducts((prevProducts) => {
        return [{ text: text, key: Math.random().toString() }, ...prevProducts];
      });
    } else {
      Alert.alert('Error!', 'Products must be over three characters long!', [
        { text: 'Understood', onPress: () => console.log('alert closed') },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddProduct submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            keyExtractor={(item) => item.key}
            data={products}
            renderItem={({ item }) => (
              <Product item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    padding: 20,
  },
});

export default ListScreen;
