import firebase from 'firebase';
import { AppRegistry } from 'react-native';
import Appp from './src/Appp';
import { name as appName } from './app.json';

firebase.initializeApp({
  apiKey: 'AIzaSyB2xIG4sUgvCkkGUFzUTewMCWIOuh9V8lI',
  authDomain: 'shopping-84925.firebaseapp.com',
  projectId: 'shopping-84925',
  storageBucket: 'shopping-84925.appspot.com',
  messagingSenderId: '233637547480',
  appId: '1:233637547480:web:958d2f051078ba8fa2b6ad',
  measurementId: 'G-1EC6P53MTC',
});

AppRegistry.registerComponent(appName, () => Appp);
