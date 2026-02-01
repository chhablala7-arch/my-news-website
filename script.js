const newsContainer = document.getElementById("news-container");

const newsData = [
  {
    title: "पहली न्यूज़",
    description: "यह हमारी पहली खबर है"
  },
  {
    title: "दूसरी न्यूज़",
    description: "यह दूसरी ताज़ा खबर है"
  }
];

newsData.forEach(news => {
  const div = document.createElement("div");
  div.className = "news";
  div.innerHTML = `<h3>${news.title}</h3><p>${news.description}</p>`;
  newsContainer.appendChild(div);
});
