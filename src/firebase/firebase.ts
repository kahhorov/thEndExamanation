import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDd1eBW8A9RS4Ew-ZTVV88-7-UwUVl_tq0",
  authDomain: "gameclub-e0ed7.firebaseapp.com",
  projectId: "gameclub-e0ed7",
  storageBucket: "gameclub-e0ed7.firebasestorage.app",
  messagingSenderId: "245883087390",
  appId: "1:245883087390:web:2a87a8d667b212ba4b5c0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
