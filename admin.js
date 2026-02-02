// LOGIN FUNCTION
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(function () {
      alert("✅ Login Successful");
    })
    .catch(function (error) {
      alert(error.message);
    });
}

// AUTH STATE CHECK
auth.onAuthStateChanged(function (user) {
  if (user) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("newsBox").style.display = "block";
  }
});

// ADD NEWS
function addNews() {
  var title = document.getElementById("title").value;
  var desc = document.getElementById("desc").value;
  var image = document.getElementById("image").value;

  db.collection("news").add({
    title: title,
    description: desc,
    image: image,
    date: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(function () {
    alert("📰 News Added Successfully");
  })
  .catch(function (error) {
    alert("❌ Error: " + error.message);
  });
}
