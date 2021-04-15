const addButton = document.getElementById("addButton");
const doneButton = document.getElementById("doneButton");

const inputTodo = document.getElementById("inputToDo");

const todoList = document.getElementsByClassName("todo");
const doneList = document.getElementsByClassName("done");

const todoArticle = document.getElementById("todo");
const doneArticle = document.getElementById("done");

const sectionElement = document.querySelector("section");


function addCard() {
    if (todoList[0].children.length === 0) {
        todoArticle.removeAttribute("hidden", "")
    }
    
    const inputValue = inputTodo.value;
    inputTodo.value = "";
    if (inputValue.length > 0) {
        const liElement = document.createElement("li");
        liElement.innerText = inputValue;
        todoList[0].append(liElement);

        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", "checkbox");
        liElement.append(inputElement);
    }
}

function doneCard() {
    if (doneList[0].children.length === 0) {
        doneArticle.removeAttribute("hidden", "")
    }

    const todoList = document.querySelector(".todo");
    const listOfTodo = Array.from(todoList.children);
    listOfTodo.forEach(element => {
        const checkedOrNot = element.querySelector("input");
        if (checkedOrNot.checked) {
            addDone(element.innerText);
            element.remove();
        }

    })
}

function addDone(task) {

    const liElement = document.createElement("li");
    liElement.innerText = task;

    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "checkbox");
    liElement.append(inputElement);
    doneList[0].append(liElement);
}

addButton.addEventListener("click", addCard);
doneButton.addEventListener("click", doneCard);


const trash = document.querySelector("i");
trash.addEventListener("click", deleteCard);


function deleteCard(){
    const todoList = document.querySelector(".todo");
    const doneList = document.querySelector(".done");
    const listOfTodo = Array.from(todoList.children);
    const listOfDone = Array.from(doneList.children);
    listOfTodo.forEach(element => {
        const checkedOrNot = element.querySelector("input");
        if (checkedOrNot.checked) {
            element.remove();
        }

    })
    listOfDone.forEach(element => {
        const checkedOrNot = element.querySelector("input");
        if (checkedOrNot.checked) {
            element.remove();
        }

    })
}