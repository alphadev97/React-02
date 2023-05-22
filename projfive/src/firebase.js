// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_8QEa7PhKqHTGx_W47UtG6-78IOmsY4I",
  authDomain: "haris-portfolio-react.firebaseapp.com",
  projectId: "haris-portfolio-react",
  storageBucket: "haris-portfolio-react.appspot.com",
  messagingSenderId: "262747339552",
  appId: "1:262747339552:web:906078be5f59027d2d7545",
  measurementId: "G-JXNJW4D3PT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
