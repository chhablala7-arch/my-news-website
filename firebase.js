// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD8syqOEEwNxsEUb8tIPL5BFWnBhgsGJg8",
  authDomain: "chhablal-login.firebaseapp.com",
  projectId: "chhablal-login",
  storageBucket: "chhablal-login.firebasestorage.app",
  messagingSenderId: "234736579008",
  appId: "1:234736579008:web:04caf7443e035ad0e21825"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
