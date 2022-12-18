let arrSrc = [
  "images/landscape-photography-tips-yosemite-valley-feature.webp",
  "images/lanscape.jfif",
  "images/UK_advice-gardening-growing-poppies_header.jpg",
]; // масив шляхів до картинок
let i = 0;
let timer;
let slider = document.getElementById("slider");
let nextButton = document.getElementById("next");
let startButton = document.getElementById("start");
let miniatures = document.getElementsByClassName("mini");

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

nextButton.addEventListener("click", next);
startButton.addEventListener("click", start);

for (let j = 0; j < miniatures.length; j++) {
  miniatures[j].addEventListener("click", showSlide);
}
