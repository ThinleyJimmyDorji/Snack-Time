import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDAWtTZFj7iRmj3A0EqObEWUmPtEFQm3A",
  authDomain: "snack-time-b4eb5.firebaseapp.com",
  projectId: "snack-time-b4eb5",
  storageBucket: "snack-time-b4eb5.appspot.com",
  messagingSenderId: "859700944313",
  appId: "1:859700944313:web:baa8edd316148638d5ea68",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
