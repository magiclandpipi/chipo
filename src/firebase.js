// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoQtp2sq7ETq05PuUIxG-lMZDY1pHq18Y",
  authDomain: "chipo-3e991.firebaseapp.com",
  projectId: "chipo-3e991",
  storageBucket: "chipo-3e991.appspot.com",
  messagingSenderId: "316630496105",
  appId: "1:316630496105:web:506a71be5cf5142f2983f8",
  measurementId: "G-LZ0MWL7V9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export { app, analytics, db, auth, storage};
