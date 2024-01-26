function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
button.addEventListener('click', changedColor);

function changedColor() {
  const body = document.body;
  const colorSpan = document.querySelector('.color');

  let generateColor = getRandomHexColor();
  body.style.backgroundColor = generateColor;

  colorSpan.textContent = generateColor;
}
