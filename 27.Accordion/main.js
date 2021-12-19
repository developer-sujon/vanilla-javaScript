const questions = document.querySelectorAll(".question");

function openAccordion(element) {
    const accordionBody = element.querySelector('.accordion-body');
    const showItem = document.querySelector('.show');
    const accordionButton = element.querySelector('.accordion-button');
    const btnActive = document.querySelector('.btn-active')

    if (!accordionBody.classList.contains('show') && showItem) {
        showItem.classList.remove('show');
        accordionButton.classList.remove('btn-primary');
    }

    accordionBody.classList.toggle('show');
    accordionButton.classList.toggle('btn-primary');

    if (!accordionButton.classList.contains('btn-active') && btnActive) {
        accordionButton.classList.remove('btn-active');
        btnActive.classList.remove('btn-active');
    }

    accordionButton.classList.toggle('btn-active');

}

questions.forEach(questions => {
    questions.addEventListener('click', function (event) {
        if (event.target.classList.contains('question-btn')) {
            const currentQuestion = event.target.parentElement.nextElementSibling;
            const dblock = document.querySelector('.d-block')

            if (!currentQuestion.classList.contains('d-block') && dblock) {
                dblock.classList.remove('d-block');
                currentQuestion.classList.remove('d-block');
            }

            currentQuestion.classList.toggle('d-block');
        }
    })
})