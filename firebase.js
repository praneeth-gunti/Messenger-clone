import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDsfBPeqlLQKAcIBNDkad8-Tk-TGbp1xxQ",
  authDomain: "facebook-messenger-clone-c01e0.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-c01e0.firebaseio.com",
  projectId: "facebook-messenger-clone-c01e0",
  storageBucket: "facebook-messenger-clone-c01e0.appspot.com",
  messagingSenderId: "1004476265483",
  appId: "1:1004476265483:web:3765974a2844f57c77c30e",
  measurementId: "G-YTX8KQEDDN"
});

const db = firebaseApp.firestore();

export default db;
