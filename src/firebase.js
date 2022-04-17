import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDn5Ub6SwoQ9LY9ACHHz9fuxx4IYXkqqns",
    authDomain: "e-clone-8a598.firebaseapp.com",
    projectId: "e-clone-8a598",
    storageBucket: "e-clone-8a598.appspot.com",
    messagingSenderId: "453659338452",
    appId: "1:453659338452:web:1858ef2758576974a7bd41",
    measurementId: "G-3HS6LFGWRL"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };