const slider = document.getElementById("slider");
let r = 0;
let g = 255;
let b = 0;
let w = 90; // vw
const stepPercent = 10;
/* Note: color has to diminish faster than size to see completely red bar before it 
disappears! For example, the if the bar disappears in 10 clicks, the bar needs to be
completely red at click 9. */
// rounding numbers causes small throw in color, but close enough
const colorStep = (parseInt(g / (stepPercent - 1))); 
const widthStep = (parseInt((w / stepPercent)));
slider.addEventListener("click", function() {
  r += colorStep;
  g -= colorStep;
  w -= widthStep;
  this.style.width = `${w}vw`;
  this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})