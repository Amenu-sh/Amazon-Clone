// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBE9-8Lw7vSYSfOtmppb_BWQ2bRmhWu1Lw",
  authDomain: "clone2-dba28.firebaseapp.com",
  projectId: "clone2-dba28",
  storageBucket: "clone2-dba28.appspot.com",
  messagingSenderId: "633945250617",
  appId: "1:633945250617:web:f2394dde8138f85f54a6e8",
  measurementId: "G-W523HER1Z7",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };

