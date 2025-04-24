// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm_ZN3E0QTMx1gIzLRnZbXuyfmf8ahepA",
  authDomain: "socialnetwork-52439.firebaseapp.com",
  projectId: "socialnetwork-52439",
  storageBucket: "socialnetwork-52439.firebasestorage.app",
  messagingSenderId: "372698836369",
  appId: "1:372698836369:web:b5e67f6c73b8e5bbedfe30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };