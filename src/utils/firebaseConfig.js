// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9OxJshJa65R0XqCRLIg2lVEAaNVLFNAw",
  authDomain: "new-doorap.firebaseapp.com",
  projectId: "new-doorap",
  storageBucket: "new-doorap.appspot.com",
  messagingSenderId: "586361425469",
  appId: "1:586361425469:web:7978eac3a52d52f2706454",
  measurementId: "G-8PWWTVNHW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const appleProvider = new OAuthProvider("apple.com");
