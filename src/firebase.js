// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEgXRfwNmthX49Y8pf7br4u26KkS9CV8I",
  authDomain: "blog-website-32b54.firebaseapp.com",
  projectId: "blog-website-32b54",
  storageBucket: "blog-website-32b54.appspot.com",
  messagingSenderId: "242003831532",
  appId: "1:242003831532:web:53069cd378caa37c9d93c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
