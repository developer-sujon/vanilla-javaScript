//Define UI Elements
const password = document.getElementsByName('password')[0];
const eye = document.getElementById('eye');

//Define Functions

const passwordVisibility = (e) => {
    if (eye.src.includes('eye-pass')) {
        password.setAttribute('type', 'text');
        eye.src = './eye-text.png'
    }else{
        password.setAttribute('type', 'password');
        eye.src = './eye-pass.png'
    }
};


//Define Event listener
eye.addEventListener('click', passwordVisibility);