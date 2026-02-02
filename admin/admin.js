// 🔹 Admin.js for GitHub Pages + Firebase Firestore

const form = document.getElementById("news-form");
const newsList = document.getElementById("news-list");

// 🔹 Base URL for GitHub Pages
const BASE_URL = "https://chhablala7-arch.github.io/my-news-website/";

// 🔹 Load news from Firestore
function renderNews() {
  newsList.innerHTML = "";

  db.collection("news")
    .orderBy("date", "desc")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();

        const div = document.createElement("div");

        // ✅ full URL for image
        const imageUrl = data.image ? `${BASE_URL}${data.image}` : "";

        div.innerHTML = `
          <h3>${data.title}</h3>

          ${imageUrl ? `<img src="${imageUrl}" style="max-width:150px;display:block;margin:8px 0;">` : ""}

          <p>${data.description}</p>

          <button onclick="deleteNews('${doc.id}')">Delete</button>
          <hr>
        `;

        newsList.appendChild(div);
      });
    })
    .catch(err => {
      console.error("Load error:", err);
    });
}

// 🔹 Delete news
function deleteNews(id) {
  db.collection("news").doc(id).delete().then(() => {
    renderNews();
  });
}

// 🔹 Add news
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("news-title").value.trim();
  const desc  = document.getElementById("news-desc").value.trim();
  const image = document.getElementById("news-image").value.trim(); // relative path: image/filename.jpg

  if (!title || !desc) {
    alert("Title और Description जरूरी है");
    return;
  }

  db.collection("news").add({
    title: title,
    description: desc,
    image: image,  // relative path
    date: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    form.reset();
    renderNews();
    alert("✅ News added successfully");
  }).catch(err => {
    console.error("Add error:", err);
  });
});

// 🔹 Initial load
renderNews();
