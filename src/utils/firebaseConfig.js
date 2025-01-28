import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARZRVCW0-LRDCjC8Fs0TV4wrymWukPpQE",
  authDomain: "keepers-c6cd4.firebaseapp.com",
  projectId: "keepers-c6cd4",
  storageBucket: "keepers-c6cd4.firebasestorage.app",
  messagingSenderId: "779243286043",
  appId: "1:779243286043:web:1b00e825b2ad4f3a3012be",
  measurementId: "G-P526QKQWGH",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();  // Check if app is already initialized
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider("apple.com");
