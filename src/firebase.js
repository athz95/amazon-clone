import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBPK0W7u_AzP1uJrpmO7YNKSlS987vthpw",
    authDomain: "clone-11249.firebaseapp.com",
    databaseURL: "https://clone-11249.firebaseio.com",
    projectId: "clone-11249",
    storageBucket: "clone-11249.appspot.com",
    messagingSenderId: "372203084306",
    appId: "1:372203084306:web:729f4cab064f3930be96cb",
    measurementId: "G-RZ82C3F4N4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};