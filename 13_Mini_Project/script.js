let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let myHexaValues = "0123456789abcdef";
let colorCode = document.getElementById("copyCode");

const generateColor = () => {
    let color = "#";
    for(let i = 1 ; i <= 6 ; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        color += myHexaValues[randomIndex];
    }
    return color;
}

const handleButton1 = () => {
    btn1.textContent = generateColor();
    document.body.style.backgroundImage = `linear-gradient(to right, ${btn2.textContent}, ${btn1.textContent})`;
    btn2.style.backgroundColor = `${btn1.textContent}`;
    colorCode.textContent = `background-image: linear-gradient(to right, ${btn2.textContent}, ${btn1.textContent})`;
}

const handleButton2 = () => {
    btn2.textContent = generateColor();
    document.body.style.backgroundImage = `linear-gradient(to right, ${btn2.textContent}, ${btn1.textContent})`;
    btn1.style.backgroundColor = `${btn2.textContent}`;
    colorCode.textContent = `background-image: linear-gradient(to right, ${btn1.textContent}, ${btn2.textContent})`;
}

btn1.addEventListener('click', handleButton1);
btn2.addEventListener('click', handleButton2);