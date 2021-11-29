//Define UI Elements
const tablinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

//Define Functions

for (let i = 0; i < tablinks.length; i++) {
    //Define Event listener
    tablinks[i].addEventListener('click', function (e) {
        const current = document.querySelectorAll('.active');
        current[0].className = current[0].className.replace(' active', '');
        e.target.className += ' active';

        //switch tabContent
        tabContents.forEach(tabContent => {
            const filter = e.target.dataset.filter;
            if (tabContent.classList.contains(filter)) {
                tabContent.style.display = 'block';
            }else{
                tabContent.style.display = 'none';
            }
        });
    })
}