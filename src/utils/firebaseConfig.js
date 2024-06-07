// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtRgtMQuyWq3PZ9N3THUZbzb2nbwqP0eY",
  authDomain: "netflix-d0698.firebaseapp.com",
  projectId: "netflix-d0698",
  storageBucket: "netflix-d0698.appspot.com",
  messagingSenderId: "1051309042052",
  appId: "1:1051309042052:web:35aa22ae5afb98694315d1",
  measurementId: "G-CF965YE5KP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
