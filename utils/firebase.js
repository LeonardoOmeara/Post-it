// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAllmfYBfC3Qb8q5ahwIc7R2dQlHvnTn7s",
  authDomain: "chatting-fullstack.firebaseapp.com",
  projectId: "chatting-fullstack",
  storageBucket: "chatting-fullstack.appspot.com",
  messagingSenderId: "889803278679",
  appId: "1:889803278679:web:c4ae015f3049e5a1859612",
  measurementId: "G-25G8L0TPQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFireStore(app);