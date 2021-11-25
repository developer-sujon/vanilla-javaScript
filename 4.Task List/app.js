// Define UI element

const form = document.getElementById('task_form');
const taskInput = document.getElementById('new_task');
const tasksUl = document.getElementById('tasks');
const clearBtn = document.getElementById('clear_task_btn');
const taskFilter = document.getElementById('task_filter');

//Define Event listener

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.setAttribute('href', 'javascript:void(0)');
    link.appendChild(document.createTextNode('x'));
    li.appendChild(link);
    taskInput.value = '';
    tasksUl.appendChild(li);
});

tasksUl.addEventListener('click', function (e) {
    if (e.target.hasAttribute('href')) {
        const element = e.target.parentElement;
        if (confirm('Are you sure you want to delete this task')) {
            element.remove();
        }
    }
});

clearBtn.addEventListener('click', function (e) {
    if (tasksUl.childElementCount) {
        if (confirm('Are you sure you want to delete this task')) {
            tasksUl.innerHTML = '';
            // while (tasksUl.firstElementChild) {
            //     tasksUl.removeChild(tasksUl.firstElementChild)
            // }
        }
    }
})

taskFilter.addEventListener('keyup', function (e) {
    const text = e.target.value.toLocaleLowerCase();
    const items = tasksUl.children;
    [...items].forEach(li => {
        if (li.textContent.toLocaleLowerCase().indexOf(text) != -1) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    })
})