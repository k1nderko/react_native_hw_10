import { initializeApp, getApps } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDmUAKKJqAQIQfALF_O81Xrpqf5Jo88-k4',
  authDomain: 'react-native-hw-101.firebaseapp.com',
  databaseURL: '<https://react-native-hw-101.firebaseio.com>',
  projectId: 'react-native-hw-101',
  storageBucket: 'react-native-hw-101.appspot.com',
  messagingSenderId: '531504654498',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);