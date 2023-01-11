//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach((que) => {
  const btn = que.querySelector(".question-btn");
  //   console.log(btn);
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== que) {
        item.classList.remove("show-text");
      }
    });

    que.classList.toggle("show-text");
  });
});

//traversing the dom
/*
const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.currentTarget.parentElement.parentElement.classList.toggle("show-text")
    });
});
*/
