import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDc0BkCNYHuZ8BPmGA3SuJh74rXoFYR6to",
  authDomain: "forge-ecommerce.firebaseapp.com",
  projectId: "forge-ecommerce",
  storageBucket: "forge-ecommerce.appspot.com",
  messagingSenderId: "438435544232",
  appId: "1:438435544232:web:d8ef3a78154cd11f4b169d",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

export { auth, database };
