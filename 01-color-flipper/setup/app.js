const colors = [
  "green",
  "red",
  "blue",
  "purple",
  "pink",
  "white",
  "grey",
  "cyan",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0 and 3 since size of array is 4
  const randomNum = getRandomNum();

  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
