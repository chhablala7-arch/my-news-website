const form = document.getElementById("news-form");
const newsList = document.getElementById("news-list");

// Load news
function renderNews() {
  newsList.innerHTML = "";

  db.collection("news1")
    .orderBy("date", "desc")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        const div = document.createElement("div");

        div.innerHTML = `
          <h3>${data.title}</h3>

          ${data.image ? `
            <img src="/${data.image}" style="max-width:150px;margin:6px 0;">
          ` : ""}

          <p>${data.description}</p>
          <button onclick="deleteNews('${doc.id}')">Delete</button>
          <hr>
        `;

        newsList.appendChild(div);
      });
    });
}

// Delete
function deleteNews(id) {
  db.collection("news1").doc(id).delete().then(renderNews);
}

// Add
form.addEventListener("submit", e => {
  e.preventDefault();

  const title = news-title.value.trim();
  const desc  = news-desc.value.trim();
  const image = news-image.value.trim();

  if (!title || !desc) {
    alert("Title और Description जरूरी है");
    return;
  }

  db.collection("news1").add({
    title,
    description: desc,
    image,
    date: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    form.reset();
    renderNews();
    alert("✅ News Added");
  });
});

renderNews();
