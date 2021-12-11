//Define UI Elements
const historyValue = document.getElementById("history-value");
const outputValue = document.getElementById("output-value");
const keyboard = document.getElementById("keyboard");

//Define Functions

//Define Event listener
keyboard.addEventListener('click', function (event) {
    const btn = event.target
    if (btn.id === 'clear') {
        outputValue.innerText = '';
        historyValue.innerText = '';
    } else if (btn.id === 'backspace') {
        outputValue.innerText = outputValue.innerText.substring(0, outputValue.innerText.length - 1);
    } else if (btn.id === '=') {
        historyValue.innerText += outputValue.innerText;
        outputValue.innerText = eval(outputValue.innerText)
    } else if (btn.classList.contains('number') || btn.classList.contains('operator')) {
        outputValue.innerText = outputValue.innerText + btn.id;
    }
})