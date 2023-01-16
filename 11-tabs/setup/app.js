const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  // e.target will return whatever we click on p,h1,img,btn etc
  const id = e.target.dataset.id;
  if (id) {
    // remove active from all btns
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    // hide all articles and then display the one
    articles.forEach((art) => {
      art.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
