let inputElement = document.getElementById("inputField");
let addBtn = document.getElementById("myBtn");
let listContainer = document.querySelector(".todoListElem");


const addToDo = () => {
    let h4Tag = document.createElement("h4");
    h4Tag.textContent = inputElement.value;
    listContainer.appendChild(h4Tag);
    inputElement.value = "";
}

addBtn.addEventListener('click', () => {
    addToDo();
});


listContainer.addEventListener('click', (event) => {
    console.log(event.target);
    let currElement = event.target;
    currElement.remove();
});