let arrSrc = [
  "images/landscape-photography-tips-yosemite-valley-feature.webp",
  "images/lanscape.jfif",
  "images/UK_advice-gardening-growing-poppies_header.jpg",
]; // масив шляхів до картинок
let i = 0;
let effect = "none";
let timer;
let slider = document.getElementById("slider");
let nextButton = document.getElementById("next");
let startButton = document.getElementById("start");
let miniatures = document.getElementsByClassName("mini");
let effectButton = document.getElementById("get_effect");

function next() {
  if (i >= arrSrc.length - 1) {
    i = 0;
  } else {
    i++;
  }
  slider.src = arrSrc[i];
}
// function next() {
//     i++;
//     if (i >= arrSrc.length) {
//       i = 0;
//     }
//     slider.src = arrSrc[i];
//   }

function start() {
  timer = setInterval(function () {
    next();
  }, 3000);
}

function showSlide(event) {
  let imageMini = event.target;
  slider.src = imageMini.src;
}

function getEffect() {
  let ef = document.forms.effects;
  for (let i = 0; i < ef.length; i++) {
    if (ef[i].checked) {
      effect = ef[i].value;
    }
  }
}

function changeEffect() {
  removeEffect();
  //....
}

function addEffect() {
  slider.classList.add("effect");
}

function removeEffect() {
  slider.classList.remove("effect");
}

nextButton.addEventListener("click", next);
startButton.addEventListener("click", start);
effectButton.addEventListener("click", getEffect);

for (let j = 0; j < miniatures.length; j++) {
  miniatures[j].addEventListener("click", showSlide);
}
