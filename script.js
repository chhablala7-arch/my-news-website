import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const newsContainer = document.getElementById("news-container");

async function loadNews() {
  newsContainer.innerHTML = "";

  const q = query(
    collection(db, "news"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  snapshot.forEach((docSnap, index) => {
    const news = docSnap.data();

    const div = document.createElement("div");
    div.className = "news";

    div.innerHTML = `
      <h3>${news.title}</h3>
      <p>${news.content.substring(0, 120)}...</p>
      <a href="news.html?id=${docSnap.id}">Read More</a>
    `;

    newsContainer.appendChild(div);

    // 🔹 First news → Meta tags
    if (index === 0) {
      setMeta(
        news.title,
        news.content.substring(0, 150)
      );
    }
  });
}

loadNews();


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
