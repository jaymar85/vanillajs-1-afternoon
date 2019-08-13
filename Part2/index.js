console.log('Hello');
const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

console.log(setId);
console.log(setColor);

function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

