// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy0C1oMDPBgs3FMdnoooEWjKtKATp6W14",
  authDomain: "dragon-news-b6b02.firebaseapp.com",
  projectId: "dragon-news-b6b02",
  storageBucket: "dragon-news-b6b02.appspot.com",
  messagingSenderId: "644972721118",
  appId: "1:644972721118:web:1b01ba02520e7ae9be234f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
