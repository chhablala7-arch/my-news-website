// Firebase SDK (compat is already loaded in HTML)

const firebaseConfig = {
  apiKey: "AIzaSyCyQqYtGm-cc6cTB8wxG3oVun3tAfic",
  authDomain: "chhabalal-31cea.firebaseapp.com",
  projectId: "chhabalal-31cea",
  storageBucket: "chhabalal-31cea.firebasestorage.app",
  messagingSenderId: "473513653439",
  appId: "1:473513653439:web:cdd2acdbe40fae65fdc20a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();  // 👈 important for admin.js
