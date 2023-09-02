import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBFdM8BBDMxjC1bECQIek2F-tp1_LOPecE",
    authDomain: "mychatapp-7bb4d.firebaseapp.com",
    projectId: "mychatapp-7bb4d",
    storageBucket: "mychatapp-7bb4d.appspot.com",
    messagingSenderId: "842207173795",
    appId: "1:842207173795:web:99943dcb6391f5d2cd3316"
}).auth();