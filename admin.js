import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import {
  collection, addDoc, getDocs,
  deleteDoc, doc, updateDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

let editId = null;

// 🔐 Protect admin
onAuthStateChanged(auth, (user) => {
  if (!user) location.href = "login.html";
  else loadNews();
});

// 🚪 Logout
window.logout = function () {
  signOut(auth).then(() => location.href = "login.html");
};

// 💾 Save / Update News
window.saveNews = async function () {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) return alert("सब भरें");

  if (editId) {
    await updateDoc(doc(db, "news", editId), { title, content });
    editId = null;
  } else {
    await addDoc(collection(db, "news"), { title, content });
  }

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  loadNews();
};

// 📄 Load News
async function loadNews() {
  const list = document.getElementById("newsList");
  list.innerHTML = "";

  const snap = await getDocs(collection(db, "news"));
  snap.forEach(docu => {
    const d = docu.data();
    list.innerHTML += `
      <div>
        <h4>${d.title}</h4>
        <p>${d.content}</p>
        <button onclick="editNews('${docu.id}','${d.title}','${d.content}')">Edit</button>
        <button onclick="deleteNews('${docu.id}')">Delete</button>
      </div><hr>`;
  });
}

// ✏️ Edit
window.editNews = function (id, t, c) {
  editId = id;
  document.getElementById("title").value = t;
  document.getElementById("content").value = c;
};

// 🗑 Delete
window.deleteNews = async function (id) {
  await deleteDoc(doc(db, "news", id));
  loadNews();
};
