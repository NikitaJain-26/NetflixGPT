// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA2upzlavI2dWAvKGi_GZeP_aHv39gGtQ",
  authDomain: "netflixgpt-70247.firebaseapp.com",
  projectId: "netflixgpt-70247",
  storageBucket: "netflixgpt-70247.appspot.com",
  messagingSenderId: "814576226010",
  appId: "1:814576226010:web:a1446f8470fe514da35fe3",
  measurementId: "G-NVZRHSCEEH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
