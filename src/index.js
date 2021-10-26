const title = document.querySelector("h1");
const timer = document.querySelector(".js-clock");

function getTime() {
  const nowDate = new Date();
  const xMasDate = new Date("2021-12-24:00:00:00");
  const dDay = xMasDate - nowDate;
  const day = String(Math.floor(dDay / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hour = String(
    Math.floor((dDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const min = String(
    Math.floor((dDay % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const sec = String(Math.floor((dDay % (1000 * 60)) / 1000)).padStart(2, "0");

  if (dDay <= 0) {
    title.innerText = `Merry Chrismas~!!!`;
  } else {
    timer.innerText = `${day}D ${hour}H ${min}M ${sec}S`;
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
