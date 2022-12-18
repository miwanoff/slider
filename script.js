let arrSrc = [
  "images/landscape-photography-tips-yosemite-valley-feature.webp",
  "images/lanscape.jfif",
  "images/UK_advice-gardening-growing-poppies_header.jpg",
]; // масив шляхів до картинок
let i = 0;
let slider = document.getElementById("slider");
let nextButton = document.getElementById("next");

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

nextButton.addEventListener("click", next);
