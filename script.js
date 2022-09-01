const colorBox = document.getElementsByClassName('color');
const randomColorButton = document.getElementById('button-random-color');

function initializeColors() {
    let colorsObj = {
    C1: 'red',
    C2: 'green',
    C3: 'blue',
    };
    localStorage.setItem('colorPalette', JSON.stringify(colorsObj));
}

function randomHexColor() {
    let hexCode = Math.floor(Math.random()*16777215).toString(16);
    const hexResult = '#' + hexCode;
    return hexResult;
}

function storageColors() {
    let colorsObj = {
      C1: colorBox[1].style.backgroundColor,
      C2: colorBox[2].style.backgroundColor,
      C3: colorBox[3].style.backgroundColor,
    };

    localStorage.setItem('colorPalette', JSON.stringify(colorsObj));
}

function randomColor() {
    colorBox[1].style.backgroundColor = randomHexColor();
    colorBox[2].style.backgroundColor = randomHexColor();
    colorBox[3].style.backgroundColor = randomHexColor();
    storageColors();
}

function rememberColors(){
    const recoveredObj = JSON.parse(localStorage.getItem('colorPalette'));
    colorBox[1].style.backgroundColor = recoveredObj.C1;
    colorBox[2].style.backgroundColor = recoveredObj.C2;
    colorBox[3].style.backgroundColor = recoveredObj.C3;
}

function initializeSelection() {
  let blackColor = colorBox[0].classList;
  blackColor.add('selected');
}

function deselectColor (){
    let previousColor = document.querySelector('.selected').classList;
    previousColor.remove('selected');
    
}

function selectColor(event){
    let selectedColor = event.target.classList;
    deselectColor();
    selectedColor.add('selected');
}













initializeSelection();
if (localStorage.getItem('colorPalette') === null) {
    initializeColors()
};
randomColorButton.addEventListener('click', randomColor);
colorBox[0].addEventListener('click', selectColor);
colorBox[1].addEventListener('click', selectColor);
colorBox[2].addEventListener('click', selectColor);
colorBox[3].addEventListener('click', selectColor);
window.onload = rememberColors;
