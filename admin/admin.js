const form = document.getElementById("news-form");
const newsList = document.getElementById("news-list");

// Load news from Firestore
function renderNews() {
  newsList.innerHTML = "";
  db.collection("news")
    .orderBy("date", "desc")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        const div = document.createElement("div");
        div.innerHTML = `
          <h3>${data.title}</h3>

          ${data.image ? `
            <img src="../${data.image}" 
                 style="max-width:120px;display:block;margin:6px 0;">
          ` : ""}

          <p>${data.description}</p>

          <button onclick="deleteNews('${doc.id}')">Delete</button>
          <hr>
        `;
        newsList.appendChild(div);
      });
    });
}

// Delete news
function deleteNews(id) {
  db.collection("news").doc(id).delete().then(() => {
    renderNews();
  });
}

// Add news
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("news-title").value;
  const desc  = document.getElementById("news-desc").value;
  const image = document.getElementById("news-image").value; // 👈 image path

  db.collection("news").add({
    title: title,
    description: desc,
    image: image,                 // 👈 save image
    date: new Date().toISOString()
  }).then(() => {
    form.reset();
    renderNews();
  });
});

// Initial load
renderNews();
