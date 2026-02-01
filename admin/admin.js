const form = document.getElementById("news-form");
const newsList = document.getElementById("news-list");

let newsData = JSON.parse(localStorage.getItem("newsData")) || [];

function renderNews() {
  newsList.innerHTML = "";
  newsData.forEach((news, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${news.title}</h3>
      <p>${news.description}</p>
      <button onclick="deleteNews(${index})">Delete</button>
      <hr>
    `;
    newsList.appendChild(div);
  });
}

function deleteNews(index) {
  newsData.splice(index, 1);
  localStorage.setItem("newsData", JSON.stringify(newsData));
  renderNews();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("news-title").value;
  const desc = document.getElementById("news-desc").value;

  newsData.push({ title, description: desc });
  localStorage.setItem("newsData", JSON.stringify(newsData));

  document.getElementById("news-title").value = "";
  document.getElementById("news-desc").value = "";

  renderNews(); // refresh news list after adding
});

// initial render on page load
renderNews();
