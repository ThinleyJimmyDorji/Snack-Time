import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6Q69nDrku0rco_JxB8Yn6s9CYSbK45LM",
  authDomain: "snack-time-a089c.firebaseapp.com",
  projectId: "snack-time-a089c",
  storageBucket: "snack-time-a089c.appspot.com",
  messagingSenderId: "555083281791",
  appId: "1:555083281791:web:0a52258a6f8967a7ce564a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
