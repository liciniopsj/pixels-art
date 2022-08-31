const colorBox = document.getElementsByClassName('color');
const randomColorButton = document.getElementById('button-random-color');

function randomColor(){
    colorBox[1].style.backgroundColor = randomHexColor();
    colorBox[2].style.backgroundColor = randomHexColor();
    colorBox[3].style.backgroundColor = randomHexColor();
    
}

function randomHexColor(){
    let hexCode = Math.floor(Math.random()*16777215).toString(16);
    let hexResult = "#" + hexCode;
    return hexResult;
}

randomColorButton.addEventListener('click', randomColor);