
// Import the functions you need from the SDKs you need

import { initializeApp, getApp } from "firebase/app";

import { initializeAuth, getAuth, getReactNativePersistence, signInWithEmailAndPassword } from 'firebase/auth';

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: _REMOVED,
  authDomain: _REMOVED,
  projectId: _REMOVED,
  storageBucket: _REMOVED,
  messagingSenderId: _REMOVED,
  appId: _REMOVED,
  measurementId: _REMOVED
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
  
export { getApp, getAuth, signInWithEmailAndPassword };

console.log("Firebase config rodou");