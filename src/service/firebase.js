/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/database";
import history from 'history/browser';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "firstproject-bca29.firebaseapp.com",
  projectId: "firstproject-bca29",
  storageBucket: "firstproject-bca29.appspot.com",
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);

// export const db = getFirestore(app);

export const realdb = firebase.database().ref();
// Import Admin SDK
// const { getDatabase } = require('firebase-admin/database');

// Get a database reference to our blog
// const db = getDatabase();
// const ref = db.ref();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).then(
    function (result) {
      var user = result.user;

      var credential = result.credential;
      // window.open(window.location.href.replace("logout",""));
      history.push("/");
      window.location.reload();
      
    },
    function (error) {
      var email = error.email;
      // The provider's credential:
      var credential = error.credential;
      // In case of auth/account-exists-with-different-credential error,
      // you can fetch the providers using this:
      if (error.code === "auth/account-exists-with-different-credential") {
        auth.fetchSignInMethodsForEmail(email).then(function (providers) {
          // The returned 'providers' is a list of the available providers
          // linked to the email address. Please refer to the guide for a more
          // complete explanation on how to recover from this error.
        history.push("/");
        });
      }
    }
  );

// const db = firebase.database().ref();
// console.log(db);

export default firebase;
