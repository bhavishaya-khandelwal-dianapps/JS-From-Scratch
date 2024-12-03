let Btn = document.querySelector("#myBtn");
Btn.onclick = function() {
    alert("THis is new Btn");
};

let Btn2 = document.getElementById("myBtn2");
Btn2.addEventListener('mouseover', () => {
    alert("New Btn");
});




//todo --- Doubt - Problems of using "this" keyword with fat arrow function or with normal function 
//? .classList.add("className")



let myInput = document.getElementById("myInput");

const handleKeyPress = (event) => {
    console.log(event);
    document.querySelector(".keyPressed").textContent = `Key Pressed : ${event.key}`;
    document.querySelector(".keyCode").textContent = `Key Code : ${event.keyCode}`;
    document.querySelector(".charCode").textContent = `Char Code At : ${event.code}`;
    document.querySelector(".eventType").textContent = `Event Type : ${event.type}`;
}

myInput.addEventListener('keyup', handleKeyPress);