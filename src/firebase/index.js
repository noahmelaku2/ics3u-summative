import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
    apiKey: "AIzaSyAQd9jrw_y87j0eb6b7UtP4H3WOlb4jNno",
    authDomain: "summative-96499.firebaseapp.com",
    projectId: "summative-96499",
    storageBucket: "summative-96499.firebasestorage.app",
    messagingSenderId: "1033056699068",
    appId: "1:1033056699068:web:4a8e0c80628fb1d5a106b9"
  };

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };