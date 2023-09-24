function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector("span.color");
button.addEventListener("click", () => { 
  let randomColor = getRandomHexColor()
   button.style.backgroundColor = randomColor
   span.textContent = randomColor

});
