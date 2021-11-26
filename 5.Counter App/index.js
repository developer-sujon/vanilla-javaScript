//Define UI Elements
const bitGroup = document.getElementsByClassName('btn-group')[0];
const display = document.getElementById('display');

//Define Event listener
bitGroup.addEventListener('click', couterCount);

//Define Functions
function couterCount(e) {
    if (e.target.classList.contains('addition')) {
        display.innerHTML++;
        setColor(display, e);
    } else if (e.target.classList.contains('subtract')) {
        display.innerHTML--;
        setColor(display, e);
    } else if (e.target.classList.contains('reset')) {
        display.innerHTML = 0;
        setColor(display, e);
    }
}

function setColor(element, btn) {
    if (display.innerHTML > 0) {
        element.style.color = '#0d6efd'
    }else if (display.innerHTML < 0){
        element.style.color = '#dc3545'
    }else if (btn.target.classList.contains('reset')){
        element.style.color = '#ffc107'
    }
}