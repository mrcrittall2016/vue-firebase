import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const firebaseApp = firebase.initializeApp(firebaseConfig);

// Get live events from database
export const eventsRef = firebaseApp
  .database()
  .ref()
  .child("events");

// See here for the database docs: https://firebase.google.com/docs/database

// Specifically for web apps: https://firebase.google.com/docs/database/web/start
