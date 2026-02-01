const newsContainer = document.getElementById("news-container");
const newsData = JSON.parse(localStorage.getItem("newsData")) || [];

newsData.forEach(news => {
  const div = document.createElement("div");
  div.className = "news";
  div.innerHTML = `<h3>${news.title}</h3><p>${news.description}</p>`;
  newsContainer.appendChild(div);
});
