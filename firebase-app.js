<!-- Firebase v8 SDKs -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>

<script>
  var firebaseConfig = {
    apiKey: "AIzaSyD8syqOEEwNxsEUb8tIPL5BFWnBhgsGJg8",
    authDomain: "chhablal-login.firebaseapp.com",
    projectId: "chhablal-login",
    storageBucket: "chhablal-login.firebasestorage.app",
    messagingSenderId: "234736579008",
    appId: "1:234736579008:web:04caf7443e035ad0e21825"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var auth = firebase.auth();
  var db = firebase.firestore();
</script>
