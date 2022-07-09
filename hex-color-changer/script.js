const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const btn = document.querySelector(".btn");
const colorBox = document.querySelector(".color");

btn.addEventListener("click", function () {
  function generateColor() {
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      const number = Math.floor(Math.random() * colors.length);
      hex += colors[number];
    }
    colorBox.style.backgroundColor = hex;
  }
  generateColor();
});
