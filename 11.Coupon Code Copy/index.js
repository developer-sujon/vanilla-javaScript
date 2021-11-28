//Define UI Elements
const input = document.getElementById('input');
const button = document.getElementById('copy');

//Define Event listener
button.addEventListener('click', CouponCodeCopy);

//Define Functions
function CouponCodeCopy(e) {

    input.focus();
    input.select();
    //input.setSelectionRange(0, input.value.length);
    document.execCommand('copy')

    e.target.innerHTML = 'Copy..!'
    setTimeout(() => {
        e.target.innerHTML = 'Copy'
    }, 1000);
}