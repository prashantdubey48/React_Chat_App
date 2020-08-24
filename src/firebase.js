import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyC1EjCR3lIG5FBqodbnETvKNeN6X1OUTbE",
  authDomain: "whatsapp-3b02a.firebaseapp.com",
  databaseURL: "https://whatsapp-3b02a.firebaseio.com",
  projectId: "whatsapp-3b02a",
  storageBucket: "whatsapp-3b02a.appspot.com",
  messagingSenderId: "575442658772",
  appId: "1:575442658772:web:171ef518f42cdb48fea241",
  measurementId: "G-CRNKB8E193",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
