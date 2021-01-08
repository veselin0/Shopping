import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Alert,
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
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
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
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'red',
  },
  content: {
    borderWidth: 3,
    borderColor: 'green',
    padding: 40,
  },
  list: {
    borderWidth: 3,
    borderColor: 'blue',
    marginTop: 20,
  },
});

export default ListScreen;
