// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3488c.firebaseapp.com",
  projectId: "mern-blog-3488c",
  storageBucket: "mern-blog-3488c.appspot.com",
  messagingSenderId: "574891971655",
  appId: "1:574891971655:web:2b11c447fc267869638d62",
};
export const app = initializeApp(firebaseConfig);
