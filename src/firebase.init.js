// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCADR3BsnecDbtyLTDuYuQn0VcaAtkg2bo",
  authDomain: "ema-john-simple-da065.firebaseapp.com",
  projectId: "ema-john-simple-da065",
  storageBucket: "ema-john-simple-da065.appspot.com",
  messagingSenderId: "258760340766",
  appId: "1:258760340766:web:1ff53af95e3d756569450f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;