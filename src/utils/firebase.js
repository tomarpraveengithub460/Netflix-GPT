// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS3xNI_FsYomIOa4SGjXl_i34u1mXCMO0",
  authDomain: "netflix-gpt-5bd98.firebaseapp.com",
  projectId: "netflix-gpt-5bd98",
  storageBucket: "netflix-gpt-5bd98.appspot.com",
  messagingSenderId: "53351402235",
  appId: "1:53351402235:web:730c459d7e4f2af5857e5e",
  measurementId: "G-4Q7K0FXSLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
