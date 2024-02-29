let button = document.getElementById('button');
let inputer = document.getElementById('inputer');
let parent = document.getElementById('parent');
let listArr = [];


button.addEventListener('click', adder);
parent.addEventListener('click', remover)

function adder() {
    if (inputer.value.trim() !== "") {
        listArr.push(inputer.value);
        inputer.value = ''

        listAdder()
    }
    
}

function listAdder() {
    let tasks = listArr.map(task => `<p>${task}</p>`);
    
    parent.innerHTML = tasks.join('')
    
}



