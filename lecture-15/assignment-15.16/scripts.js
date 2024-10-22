// Global variables
const pixelArt = document.getElementById('pixelArt');
const colorInput = document.getElementById('colorInput');

// https://jscolor.com/
const myPicker = new JSColor(colorInput, {format:'rgba'});
myPicker.option({
  'width': 101,
  'position': 'bottom',
  'backgroundColor': '#333',
  'palette': [
    '#000000', '#7d7d7d', '#870014', '#ec1c23', '#ff7e26',
    '#fef100', '#22b14b', '#00a1e7', '#3f47cc', '#a349a4',
    '#ffffff', '#c3c3c3', '#b87957', '#feaec9', '#ffc80d',
    '#eee3af', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7', 
  ]
});

function main() {
 
  for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.style.backgroundColor = '#ffffff';
    pixelArt.appendChild(div);

    div.addEventListener('click',(event) => {
      const thisDiv = event.target;
      /* Note: the color is set as hex,
         but it appears as rgb when reading it. */
      if (thisDiv.style.backgroundColor !== 'rgb(255, 255, 255)') {
        thisDiv.style.backgroundColor = '#ffffff';
      } else {
        thisDiv.style.backgroundColor = colorInput.value;
      }
    });
  } 
 
}
main();