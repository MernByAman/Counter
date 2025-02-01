let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let counter = document.getElementById("counter").textContent;

increment.onclick = function() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

decrement.onclick = function() {
    counter--;
    document.getElementById("counter").textContent = counter;
}