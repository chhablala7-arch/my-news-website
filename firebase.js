// Firebase v9 modular
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCyQqYc5YtGm-cc6cTB8wxG3oVun3tAfic",
  authDomain: "chhabalal-31cea.firebaseapp.com",
  projectId: "chhabalal-31cea",
  storageBucket: "chhabalal-31cea.firebasestorage.app",
  messagingSenderId: "473513653439",
  appId: "1:473513653439:web:cdd2acdbe40fae65fdc20a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
