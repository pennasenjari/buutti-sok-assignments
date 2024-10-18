const slider = document.getElementById("slider");
let r = 0;
let g = 255;
let b = 0;
let w = 90; // vw
const steps = 15;
/* Note: color has to diminish faster than width to see completely red bar before it 
disappears! For example, if the bar disappears in 10 clicks, the bar needs to be
completely red at click 9. */
// rounding the numbers causes small throw in color
const colorStep = (Math.round(g / (steps - 1))); 
const widthStep = (Math.round((w / steps)));
slider.addEventListener("click", function() {
  r += colorStep;
  g -= colorStep;
  w -= widthStep;
  /* Correct the rounding problem at last step to set
     the last color to plain red */
  if (w <= widthStep) {
    r = 255;
    g = 0;
  }
  //console.log(r, g, b);
  this.style.width = `${w}vw`;
  this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})