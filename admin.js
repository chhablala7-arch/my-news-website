// Initialize Firebase Auth
const auth = firebase.auth();

// Login button click
document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        document.getElementById("login-error").innerText = "ईमेल और पासवर्ड डालें।";
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            // Login success
            document.getElementById("login-error").innerText = "";
            // Redirect to admin dashboard page
            window.location.href = "admin-dashboard.html"; 
        })
        .catch(error => {
            // Show error message
            document.getElementById("login-error").innerText = error.message;
        });
});

// Optional: check if already logged in
auth.onAuthStateChanged(user => {
    if (user) {
        // Already logged in → redirect to dashboard
        window.location.href = "admin-dashboard.html";
    }
});
