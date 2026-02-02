const newsContainer = document.getElementById("news-container");

// Firebase already initialized
db.collection("news")
  .orderBy("date", "desc")
  .get()
  .then(snapshot => {
    snapshot.forEach((doc, index) => {
      const news = doc.data();

      // Show news
      const div = document.createElement("div");
      div.className = "news";
      div.innerHTML = `
        <h3>${news.title}</h3>
        <p>${news.description}</p>
      `;
      newsContainer.appendChild(div);

      // First news = set meta (home page)
      if (index === 0 && news.metaTitle && news.metaDescription) {
        setMeta(news.metaTitle, news.metaDescription);
      }
    });
  });


// 🔹 Meta function
function setMeta(title, description) {
  document.title = title;

  let metaDesc = document.querySelector("meta[name='description']");
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;
}
