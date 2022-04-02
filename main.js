"use strict";

(function() {
    // Global UI
    const   taskName    = document.querySelector('#task-name'),
            addTaskBtn  = document.querySelector('.add-btn'),
            taskFilter  = document.querySelector('#filter-task'),
            lists       = document.querySelector('ul.list-group'),
            clearTasks  = document.querySelector('.clear-tasks');
    
    // Global Obj
    const obj = {

        init() {

            // On typing task name
            taskName.addEventListener('input', this.taskNameInput);

            // Adding new task
            addTaskBtn.addEventListener('click', this.addTask);

            // Filter tasks
            taskFilter.addEventListener('input', this.filterTasks);

            // Close button
            lists.addEventListener('click', this.closeBtn);

            // Clear btn
            clearTasks.addEventListener('click', this.tasksClear);

            // Check localStorage
            this.checkLocalStorage(null);

            // Check clear btn
            this.tasksClear(null);
        },

        taskNameInput(e) {
            if (e.target.value.trim() !== '' && addTaskBtn.hasAttribute('disabled')) {
                addTaskBtn.removeAttribute('disabled');
            } else if (e.target.value.trim() === '') {
                addTaskBtn.setAttribute('disabled', '');
            }
            if (taskName.parentElement.classList.contains('checkvalid')) {
                taskName.parentElement.classList.remove('checkvalid');
                taskName.parentElement.querySelector('.invalid-feedback').remove();
                taskName.classList.remove('is-invalid');
            }
        },

        addTask() {
            // Check if task exist
            if (obj.checkingTasksList(taskName.value).length === 0) {
                obj.createItems([taskName.value]);
                addTaskBtn.setAttribute('disabled', '');
                obj.checkLocalStorage(taskName.value);
                taskName.value = '';
                obj.tasksClear(null);
            } else if (!taskName.classList.contains('is-invalid')) {
                taskName.classList.add('is-invalid');
                let div = document.createElement('div');
                div.className = 'invalid-feedback';
                div.appendChild(document.createTextNode('This task is exist already!'));
                taskName.parentElement.appendChild(div);
                taskName.parentElement.classList.add('checkvalid');
            }
        },

        checkingTasksList(text) {
            let result = Array.from(lists.children).filter(ele => {
                if (ele.querySelector('h5').textContent.indexOf(text) !== -1) {
                    return ele;
                }
            });
            return result;
        },

        createItems(arr) {
            arr.forEach((val) => {
                let li = document.createElement('li');
                li.className = 'list-group-item d-flex align-items-center p-3 justify-content-between';
                li.innerHTML = `<h5 class="list-text mb-0 text-primary text-display">${val}</h5>
                                <button class="btn-close btn-sm" type="button"></button>`;
                lists.appendChild(li);
            });
        },

        filterTasks(e) {
            let val = e.target.value;
            let items = obj.checkingTasksList(val);
            if (e.target.value.trim() === '') {
                Array.from(lists.children).forEach(item => {
                    item.classList.replace('d-none', 'd-flex');
                    item.classList.remove('border-top');
                });
            } else {
                Array.from(lists.children).forEach(item => {
                    if (items.includes(item) && item.querySelector('h5').textContent.indexOf(val, 0) === 0) {
                        item.classList.replace('d-none', 'd-flex');
                        if (items.length === 1) {item.classList.add('border-top')}
                    } else {
                        item.classList.replace('d-flex', 'd-none');
                    }
                })
            }
        },

        closeBtn(e) {
            if (e.target.closest('.btn-close')) {
                e.target.closest('.list-group-item').remove();
                let res = JSON.parse(localStorage.getItem('tasks')).filter(item => {
                    return item !== e.target.closest('.list-group-item').querySelector('h5').textContent;
                });
                console.log(res)
                localStorage.setItem('tasks', JSON.stringify(res));
                obj.tasksClear(e);
            }
        },

        tasksClear(e) {
            if (!e && lists.children.length > 0) {
                clearTasks.removeAttribute('disabled');
            } else if (e && e.target.classList.contains('clear-tasks')) {
                lists.innerHTML = ''
                clearTasks.setAttribute('disabled', '');
                localStorage.removeItem('tasks');
            } else if ((e && e.target.classList.contains('btn-close')) && lists.children.length === 0) {
                clearTasks.setAttribute('disabled', '');
            }
        },

        checkLocalStorage(val) {
            let arr = [];
            if (localStorage.getItem('tasks') !== null) {
                arr = JSON.parse(localStorage.getItem('tasks'));
                if (!val) {
                    obj.createItems(arr);
                } else {
                    arr.push(val);
                    localStorage.setItem('tasks', JSON.stringify(arr));
                }
            } else if (val) {
                arr.push(val);
                localStorage.setItem('tasks', JSON.stringify(arr));
            }
        }

    }


    // Call Init
    obj.init();



}());