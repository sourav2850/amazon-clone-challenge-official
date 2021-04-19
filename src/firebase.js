import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCACN5QALddonC_PQtI74Qt-6NCCC-gSXU",
    authDomain: "clone-mar21-a0284.firebaseapp.com",
    projectId: "clone-mar21-a0284",
    storageBucket: "clone-mar21-a0284.appspot.com",
    messagingSenderId: "133459295571",
    appId: "1:133459295571:web:af36e9d9106f663d67f5a6",
    measurementId: "G-D77PTHTBY2"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider}