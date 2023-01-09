//set initial count to 0
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) count++;
    if (styles.contains("decrease")) count--;
    if (styles.contains("reset")) count = 0;

    value.textContent = count;
    if (count === 0) value.style.color = "black";
    if (count > 0) value.style.color = "green";
    if (count < 0) value.style.color = "red";
  });
});
