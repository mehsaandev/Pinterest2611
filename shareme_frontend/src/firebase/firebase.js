// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import { client } from "../client";

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

export const provider = new GoogleAuthProvider();

// export const SignInWithGoogle = ({nav}) => {
    
//   const navigate = useNavigate();

//   signInWithPopup(auth, provider)
//     .then((result) => {

//       //localStorage.setItem('user',JSON.stringify(result.user))
//       const {displayName,uid, photoURL } = result.user.providerData[0]
//       console.log(displayName + ": "+ uid+ ": "+ photoURL);

//       const doc = {
//         _id : uid,
//         _type : 'user',
//         _userName: displayName,
//         image: photoURL
//       }
//       client.createIfNotExists(doc)
//       .then(()=>{
//         navigate('/',{replace : true})
//       })
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
