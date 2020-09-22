let rangeRed = document.querySelector("#rangeRed");
let textRed = document.querySelector('#textRed');
let rangeGreen = document.querySelector('#rangeGreen');
let textGreen = document.querySelector('#textGreen');
let rangeBlue = document.querySelector('#rangeBlue');
let textBlue = document.querySelector('#textBlue');
let result = document.querySelector('#result');
let inputSelector = document.querySelector('#inputSelector');

function changeColor() {
    result.style.backgroundColor = `rgb(${rangeRed.value} ,  ${rangeGreen.value} , ${rangeBlue.value})`;
    inputSelector.style.color = `rgb(${rangeRed.value} ,  ${rangeGreen.value} , ${rangeBlue.value})`;
}

rangeRed.addEventListener('input', () => {
    textRed.value = rangeRed.value
    changeColor();
});

rangeGreen.addEventListener('input', () => {
    textGreen.value = rangeGreen.value
    changeColor();
});

rangeBlue.addEventListener('input', () => {
    textBlue.value = rangeBlue.value
    changeColor();
});