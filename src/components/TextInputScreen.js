import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextInputScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 16,
    borderColor: 'red',
    borderWidth: 3,
  },
});

export default TextInputScreen;
