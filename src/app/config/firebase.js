import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPkqTwJ0hd9HLhKcN_c7qEZuBdnyAK2yg",
  authDomain: "revents-course-69d83.firebaseapp.com",
  projectId: "revents-course-69d83",
  storageBucket: "revents-course-69d83.appspot.com",
  messagingSenderId: "357269973363",
  appId: "1:357269973363:web:98a0c3fdf322168126bd06",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
