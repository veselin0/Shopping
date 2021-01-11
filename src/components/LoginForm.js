import React, { useState } from 'react';
import firebase from 'firebase';
import { Text, StyleSheet } from 'react-native';
import { Button, CardSection, Card, Input, Spinner } from './common';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onButtonPress = () => {
    setError('');
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(onLoginSuccess)
          .catch(onLoginFail);
      });
  };

  const onLoginFail = (e) => {
    return setError(`Authentication failed: ${e.message}`), setLoading(false);
  };

  const onLoginSuccess = () => {
    return setEmail(''), setPassword(''), setLoading(false), setError('');
  };

  const renderButton = () => {
    if (loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={onButtonPress}>Log in</Button>;
  };

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="user@email.com"
        />
      </CardSection>
      <CardSection>
        <Input
          secureTextEntry
          placeholder="password"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </CardSection>

      <Text style={styles.errorTextStyle}>{error}</Text>

      <CardSection>{renderButton()}</CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

export default LoginForm;
