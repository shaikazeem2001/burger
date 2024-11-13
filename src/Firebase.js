// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnRKxKLO0WA9C4nSZjOMRH0g3gEqfTMk4",
    authDomain: "burger-b32d0.firebaseapp.com",
    projectId: "burger-b32d0",
    storageBucket: "burger-b32d0.firebasestorage.app",
    messagingSenderId: "302846200425",
    appId: "1:302846200425:web:b6aced652948b324ffb0f8",
    measurementId: "G-VE1VGSZL9M"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
