//Define UI Elements
const filterInput = document.getElementById('filterInput');

//Define Functions
function filterContactList(event) {
    // Get names ul
    const ul = document.getElementById('names');
    // Get lis from ul
    let li = ul.querySelectorAll('li.collection-item');

    [...ul.children].forEach(function(li) {
        if(li.className == 'collection-item'){
            const a = li.getElementsByTagName('a')[0];
            if (a.textContent.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
                li.style.display = 'block';
            }else{
                li.style.display = 'none';
            }
        }
    })

}

//Define Event listener
filterInput.addEventListener('input', filterContactList)