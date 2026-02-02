// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8syqOEEwNxsEUb8tIPL5BFWnBhgsGJg8",
  authDomain: "chhablal-login.firebaseapp.com",
  projectId: "chhablal-login",
  storageBucket: "chhablal-login.firebasestorage.app",
  messagingSenderId: "234736579008",
  appId: "1:234736579008:web:04caf7443e035ad0e21825"
};

// Initialize Firebase (Compat version)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Firebase auth instance
const auth = firebase.auth();

// Optional: console log for debugging
console.log("Firebase initialized:", firebase.app().name);
