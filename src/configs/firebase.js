// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbH0biAHg15MD7ISagnWZ63gMQhLIAFr0",
  authDomain: "smoney-7b081.firebaseapp.com",
  projectId: "smoney-7b081",
  storageBucket: "smoney-7b081.appspot.com",
  messagingSenderId: "595931325381",
  appId: "1:595931325381:web:138a8841d05bd80bf161ac",
  measurementId: "G-2BHFZPGTHY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseStore = getFirestore(app);
const firebaseAuth = getAuth(app);
const timestamp = serverTimestamp();
export { firebaseStore, firebaseAuth, timestamp };
