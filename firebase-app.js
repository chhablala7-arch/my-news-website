<!-- Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyD8syqOEEwNxsEUb8tIPL5BFWnBhgsGJg8",
  authDomain: "chhablal-login.firebaseapp.com",
  projectId: "chhablal-login",
  storageBucket: "chhablal-login.appspot.com",
  messagingSenderId: "234736579008",
  appId: "1:234736579008:web:04caf7443e035ad0e21825"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
</script>
