import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDObfDUPeSvc8dTF_UqYMpwcNk0Y-5qMDI",
    authDomain: "pjes16bpm.firebaseapp.com",
    databaseURL: "https://pjes16bpm.firebaseio.com",
    projectId: "pjes16bpm",
    storageBucket: "pjes16bpm.appspot.com",
    messagingSenderId: "366953034783",
    appId: "1:366953034783:web:e5d2f0c43ec50893df512a",
    measurementId: "G-9HHFLH1WGZ"
  };

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();