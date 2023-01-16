const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
// showing how powerful querySelector is
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 0, 25, 23, 59, 0);
// console.log(futureDate);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 59, 00);

const year = futureDate.getFullYear();
let hours = futureDate.getHours();
let amPm = "am";
if (hours >= 12) {
  hours = hours - 12;
  amPm = "pm";
}
const min = futureDate.getMinutes();
const date = futureDate.getDate();
const mon = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${day}, ${date} ${mon} ${year}, ${hours}:${min}${amPm}`;

// future time in ms
const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;

  // values in ms
  const oneSec = 1000;
  const oneMinute = 60 * oneSec;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;

  // calculate all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t / oneHour) % 24);
  let mins = Math.floor((t / oneMinute) % 60);
  let sec = Math.floor((t / oneSec) % 60);

  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  // set values array
  const values = [days, hours, mins, sec];
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired<h4>`;
  }
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
