let counterEl = document.getElementById('countEl');
let saveEl = document.getElementById('previus');
let count = 0;

function increment() {
    count += 1;
    counterEl.textContent = count;
}

function save() {
    saveEl.textContent += count + " - ";
    count = 0;
    counterEl.textContent = 0;
}