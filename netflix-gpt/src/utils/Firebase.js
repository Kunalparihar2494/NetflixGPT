// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFFOIaCUSjkZlonL1Vw6hR7T_lv_zqnrk",
  authDomain: "netfilxgpt-41c53.firebaseapp.com",
  projectId: "netfilxgpt-41c53",
  storageBucket: "netfilxgpt-41c53.firebasestorage.app",
  messagingSenderId: "402047936754",
  appId: "1:402047936754:web:8af63c7149d354cb47086b",
  measurementId: "G-DKGLWR6Q0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();