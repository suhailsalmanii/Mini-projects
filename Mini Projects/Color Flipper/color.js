const simpleColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "cyan",
  "magenta",
  "lime",
  "indigo",
  "violet",
  "brown",
  "grey",
  "black",
  "navy",
  "teal",
  "maroon",
];

const hexChars = "0123456789ABCDEF";

// use selecotor dom elements
const body = document.body;
const colorName = document.getElementById("colorName");
const flipBtn = document.getElementById("flipBtn");
const simpleModeBtn = document.getElementById("simpleMode");
const hexModeBtn = document.getElementById("hexMode");

let currentMode = "simple";

//function for get random simple colors
function getRandomSimpleColor() {
  const randomIndex = Math.floor(Math.random() * simpleColors.length);
  return simpleColors[randomIndex];
}

//function for hec colors
function getRandomHexColors() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexChars[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}

//function for background change
function backgroundColorChange() {
  let newColor;
  if (currentMode === "simple") {
    newColor = getRandomSimpleColor();
  } else {
    newColor = getRandomHexColors();
  }
  body.style.backgroundColor = newColor;
  colorName.textContent = newColor;
}

//function switching mode
function switchMode(mode) {
  currentMode = mode;
  if (mode === "simple") {
    simpleModeBtn.classList.add("active");
    hexModeBtn.classList.remove("active");
  } else {
    hexModeBtn.classList.add("active");
    simpleModeBtn.classList.remove("active");
  }
}

//add a event listners
flipBtn.addEventListener("click", backgroundColorChange);
simpleModeBtn.addEventListener("click", () => switchMode("simple"));
hexModeBtn.addEventListener("click", () => switchMode("hex"));
document.addEventListener("keydown", function (event) {
  if (event.code === "space") {
    event.preventDefault();
    backgroundColorChange();
  }
});
