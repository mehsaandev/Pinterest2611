// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1lP22FCEfGyrKgLBWZdUJoUyLr30KTjw",
  authDomain: "pinterest-app-352709.firebaseapp.com",
  projectId: "pinterest-app-352709",
  storageBucket: "pinterest-app-352709.appspot.com",
  messagingSenderId: "465147821055",
  appId: "1:465147821055:web:3a70634192303e84dfc5ca",
  measurementId: "G-905XQHYGDY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
