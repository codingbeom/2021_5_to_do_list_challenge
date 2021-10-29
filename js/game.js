const computer = document.querySelector(".game-box span");
const comBtn = document.querySelector(".game-box button");
const submit = document.querySelector(".number button");
const myNumber = document.querySelector(".number input");
const h2 = document.querySelector("h2");
let random = 0;

function computerNumber() {
  random = Math.round(Math.random() * 20) + 1;
  computer.innerText = `Computer Random Number 0~20`;
}

function randomGame(event) {
  event.preventDefault();
  if (parseInt(myNumber.value) === random) {
    h2.innerText = `You Win!! (${myNumber.value})`;
  } else {
    h2.innerText = `lose~ One more Time!`;
  }
}

comBtn.addEventListener("click", computerNumber);
submit.addEventListener("click", randomGame);
