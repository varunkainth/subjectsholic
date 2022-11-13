// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import * as dotenv from 'dotenv'
// dotenv.config()

// import Firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaJZApS1AavgGR6xkQvIHmHPHNzR1NQSU",
  authDomain: "login-1777e.firebaseapp.com",
  projectId: "login-1777e",
  storageBucket: "login-1777e.appspot.com",
  messagingSenderId: "173720303049",
  appId: "1:173720303049:web:280206045f84a7feb4e418",
}

// Initialize Firebase
const Fire = initializeApp(firebaseConfig);
export default Fire;
