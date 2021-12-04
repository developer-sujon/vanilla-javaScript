//Define UI Elements
const accordionContents = document.querySelectorAll(".accordion-content");

//Define Functions

[...accordionContents].forEach((accordionContent) => {
    const button = accordionContent.querySelector(".button");
    button.addEventListener("click", function (e) {
        [...accordionContents].forEach((item) => {
            if (item !== accordionContent) {
                item.classList.remove('show-text');
            }
        })
        accordionContent.classList.toggle('show-text');
    })
})

// const buttons = document.querySelectorAll(".button");
// buttons.forEach((button) => {
//     button.addEventListener("click", function (e) {
//         const accordionContent = e.currentTarget.parentElement.nextElementSibling;
//         accordionContent.classList.toggle('show-text');
//     })
// })


//Define Event listener