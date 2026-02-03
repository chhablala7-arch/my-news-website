import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const newsForm = document.getElementById("newsForm");
const newsList = document.getElementById("newsList");
const logoutBtn = document.getElementById("logoutBtn");

// Logout
logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => window.location.href = "login.html");
});

// Auth check
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    loadNews();
  }
});

// Load news
async function loadNews() {
  newsList.innerHTML = '';

  const q = query(
    collection(db, "news"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  snapshot.forEach(docSnap => {
    const data = docSnap.data();

    const div = document.createElement("div");
    div.classList.add("news-item");

    div.innerHTML = `
      <h4>${data.title}</h4>
      <p>${data.content}</p>
      ${data.image ? `<img src="${data.image}" style="width:100%;margin:8px 0;">` : ""}
      <small>Views: ${data.views ?? 0}</small><br>
      <button onclick="deleteNews('${docSnap.id}')">Delete</button>
    `;

    newsList.appendChild(div);
  });
}

// Add news
newsForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("newsTitle").value;
  const content = document.getElementById("newsContent").value;
  const image = document.getElementById("imageUrl")?.value || "";

  await addDoc(collection(db, "news"), {
    title: title,
    content: content,
    image: image,
    views: 0,
    createdAt: serverTimestamp()
  });

  newsForm.reset();
  loadNews();
});

// Delete news
window.deleteNews = async (id) => {
  await deleteDoc(doc(db, "news", id));
  loadNews();
};
