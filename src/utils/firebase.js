// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoW-I-qqoW0Vyn9573KH6wFB-xQqmX0A0",
  authDomain: "netflix-gpt-4df7d.firebaseapp.com",
  projectId: "netflix-gpt-4df7d",
  storageBucket: "netflix-gpt-4df7d.appspot.com",
  messagingSenderId: "148273133496",
  appId: "1:148273133496:web:e9aa15a24d7732cd15014d",
  measurementId: "G-Y3G68JTES3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export  const auth = getAuth();