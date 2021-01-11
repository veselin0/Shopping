import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

const Appp = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return unsubscribe;
  }, []);

  const renderContent = () => {
    switch (loggedIn) {
      case true:
        return (
          <View style={{ height: 60 }}>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  };

  return (
    <View>
      <Header headerText="Authentication" />
      {renderContent()}
    </View>
  );
};

export default Appp;
