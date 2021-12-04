// Define UI element

const form = document.getElementById('task_form');
const taskInput = document.getElementById('new_task');
const tasksUl = document.getElementById('tasks');
const clearBtn = document.getElementById('clear_task_btn');
const taskFilter = document.getElementById('task_filter');

//Define Event listener
form.addEventListener('submit', addTask)
tasksUl.addEventListener('click', removeTask)
clearBtn.addEventListener('click', clearTask)
taskFilter.addEventListener('input', filterTask)
document.addEventListener('DOMContentLoaded', getTask)

//Define Function
function addTask(e) {
    e.preventDefault();
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.setAttribute('href', 'javascript:void(0)');
    link.appendChild(document.createTextNode('X'))
    li.appendChild(link);
    tasksUl.appendChild(li);
    savaDataLocalStorage(taskInput.value)
    taskInput.value = '';
}

function removeTask(e) {
    if (e.target.hasAttribute('href')) {
        if (confirm('Are you sure you want to remove')) {
            e.target.parentElement.remove();
            removeFormLS(e.target.parentElement);
        }
    }
}

function clearTask(e) {
    //tasksUl.innerHTML = '';
    while (tasksUl.firstElementChild) {
        //console.log(tasksUl.firstElementChild);
        tasksUl.removeChild(tasksUl.firstElementChild);
    };
    localStorage.clear();
}

function filterTask(e) {
    const input = e.target.value.toLowerCase();
    [...tasksUl.children].forEach(liElement => {
        if (liElement.textContent.toLowerCase().includes(input)) {
            liElement.style.display = 'block';
        } else {
            liElement.style.display = 'none';
        }
    });
}

function savaDataLocalStorage(newTask) {
    let tasks;
    if (localStorage.getItem('task') == null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('task'));
    }
    tasks.push({
        task: newTask
    });
    localStorage.setItem('task', JSON.stringify(tasks))
};

function getTask() {
    let tasks = [];
    if (localStorage.getItem('task') == null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('task'));
    }

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task.task));
        const link = document.createElement('a');
        link.setAttribute('href', 'javascript:void(0)');
        link.appendChild(document.createTextNode('X'))
        li.appendChild(link);
        tasksUl.appendChild(li);
    })
}

function removeFormLS(taskItem) {
    let tasks;
    if (localStorage.getItem('task') == null) {
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('task'));
    }
    const li = taskItem;
    li.removeChild(li.lastChild);
    tasks.map((task, index) => {
        if (li.textContent.trim() === task.task) {
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('task', JSON.stringify(tasks));
}