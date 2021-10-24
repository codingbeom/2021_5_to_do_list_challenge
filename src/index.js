function sizeMove() {
  if (window.innerWidth >= 550 && window.innerWidth <= 649) {
    document.body.style.backgroundColor = "blue";
  } else if (window.innerWidth >= 650 && window.innerWidth <= 749) {
    document.body.style.backgroundColor = "red";
  } else if (window.innerWidth >= 750 && window.innerWidth <= 849) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "yellow";
  }
}
window.addEventListener("resize", sizeMove);
