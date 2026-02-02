<script>
const form = document.getElementById("news-form");
const newsList = document.getElementById("news-list");

function renderNews() {
  newsList.innerHTML = "";
  db.collection("news").orderBy("date", "desc").get().then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <button onclick="deleteNews('${doc.id}')">Delete</button>
        <hr>
      `;
      newsList.appendChild(div);
    });
  });
}

function deleteNews(id) {
  db.collection("news").doc(id).delete().then(() => {
    renderNews();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("news-title").value;
  const desc = document.getElementById("news-desc").value;

  db.collection("news").add({
    title: title,
    description: desc,
    date: new Date().toISOString()
  }).then(() => {
    form.reset();
    renderNews();
  });
});

// Load news on page load
renderNews();
</script>
