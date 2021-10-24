// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  target: document.querySelector("h2"),
  onMouse() {
    this.target.style.color = colors[0];
    this.target.innerText = "Challenge";
  },
  leaveMouse() {
    this.target.style.color = colors[1];
    this.target.innerText = "is";
  },
  rightClick() {
    this.target.style.color = colors[2];
    this.target.innerText = "so";
  },
  sizeMove() {
    this.target.style.color = colors[3];
    this.target.innerText = "fun";
  },
};
const target = superEventHandler.target;

function onMouse() {
  superEventHandler.onMouse();
}
function leaveMouse() {
  superEventHandler.leaveMouse();
}
function rightClick() {
  superEventHandler.rightClick();
}
function sizeMove() {
  superEventHandler.sizeMove();
}
target.addEventListener("mouseenter", onMouse);
target.addEventListener("mouseleave", leaveMouse);
window.addEventListener("contextmenu", rightClick);
window.addEventListener("resize", sizeMove);
