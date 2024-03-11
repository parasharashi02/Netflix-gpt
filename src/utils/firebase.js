// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Config } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXE4lkkIGCzYdzwH4c2AAUb3GhGWM6jE4",
  authDomain: "netflixgpt-de8ba.firebaseapp.com",
  projectId: "netflixgpt-de8ba",
  storageBucket: "netflixgpt-de8ba.appspot.com",
  messagingSenderId: "532718615083",
  appId: "1:532718615083:web:ca9989c8687e81f163c86e",
  measurementId: "G-EK12PL99TR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
