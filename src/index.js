const onOff = document.getElementById("choose");
const myNum = document.getElementById("setting");
const chNum = onOff.querySelector("input");
const submit = onOff.querySelector("button");
const npc = document.querySelector("h5");
const result = document.querySelector("h2");

function randomGame(event) {
  event.preventDefault();
  const random = Math.ceil(Math.random() * parseInt(myNum.value));
  npc.innerText = `Your Number is ${myNum.value} Random Number is ${random}`;
  if (parseInt(chNum.value) === random) {
    result.innerText = `You Win!`;
  } else {
    result.innerText = `You lose~`;
  }
}

submit.addEventListener("click", randomGame);
