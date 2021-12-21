document.getElementById('classSubmit').addEventListener('click', changeClassaAnimated)

function changeClassaAnimated() {
    document.querySelector("body").className = "animated keyLock";
    let image = document.querySelector(".keyLock .lockImg");
    image.src = "img/unlock.png"
    const mySoundSuccess = document.getElementById("soundSuccessElement");
    mySoundSuccess.play();
    document.querySelectorAll('.inputField')[0].value = ""
    document.querySelectorAll('.inputField')[1].value = ""
}


var selectElement = document.querySelectorAll('.inputField');

for (let i = 0; i < selectElement.length; i++) {
    const element = selectElement[i];

    element.addEventListener('keyup', (event) => {

        const mySoundType = document.getElementById("soundTypeElement");
        mySoundType.play();

        if (selectElement[0].value && selectElement[1].value) {
            var classSubmit = document.getElementById('classSubmit').className = "transion";
        } else {
            document.getElementById('classSubmit').classList.remove("transion");
        }
    });
}



//UserName Input
const user = document.getElementById("user");
const mySoundUser= document.getElementById("soundUserElement");

user.addEventListener("click", function () {
    mySoundUser.play();
});


//Password Input
const password = document.getElementById("password");
const mySoundPassword = document.getElementById("soundPasswordElement");

password.addEventListener("click", function () {
    mySoundPassword.play();
});