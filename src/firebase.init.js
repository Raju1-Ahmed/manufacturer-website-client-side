// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzIJJyhS7zuqke4vtj5oaMnWdmewK6QWA",
  authDomain: "auto-parts-4d34e.firebaseapp.com",
  projectId: "auto-parts-4d34e",
  storageBucket: "auto-parts-4d34e.appspot.com",
  messagingSenderId: "34743812347",
  appId: "1:34743812347:web:15b0edcedf85709494b05e",
  measurementId: "G-X66W04G7WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;