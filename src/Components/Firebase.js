import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBDHXUM25YhnDjK33h2ggSp44_kNnnABTo",
  authDomain: "hotel-website-702a2.firebaseapp.com",
  projectId: "hotel-website-702a2",
  storageBucket: "hotel-website-702a2.appspot.com",
  messagingSenderId: "1072595518618",
  appId: "1:1072595518618:web:e7e9e59fbaeff7b4f48b23",
  measurementId: "G-S891H4V8RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };