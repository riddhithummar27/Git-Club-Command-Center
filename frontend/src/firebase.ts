import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9op80YHv9oWEKfhRnFPJrmIvTV1lXZRA",
  authDomain: "git-club-command-center.firebaseapp.com",
  projectId: "git-club-command-center",
  storageBucket: "git-club-command-center.firebasestorage.app",
  messagingSenderId: "596691644168",
  appId: "1:596691644168:web:a82b51b127d83f6ff7c6bd",
  measurementId: "G-DHJ9JNDNBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
