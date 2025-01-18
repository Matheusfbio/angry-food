// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAv9rJxI1ZjFB2NQZTl5YtFQSKHO7nmnI",
  authDomain: "angry-food.firebaseapp.com",
  projectId: "angry-food",
  storageBucket: "angry-food.firebasestorage.app",
  messagingSenderId: "851937779820",
  appId: "1:851937779820:web:c4e819d3a907c4adf77849",
  measurementId: "G-V1DY8R9PQ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
connectFirestoreEmulator(db, "127.0.0.1", 8080);
