makeSquares(16);
//create a given number of squares to be drawn on
function makeSquares(numSquares) {
    document.querySelector('#container').innerHTML = '';
    for (i = 0; i < numSquares; i++) {
        let row = document.createElement('div');
        row.className = "row"
        for (j = 0; j < numSquares; j++) {
            let column = document.createElement('div');
            column.className = "column"
            row.appendChild(column);
            column.style.minWidth = (960/numSquares) + "px";
            column.style.height = (960/numSquares) + "px";
        }
        document.getElementById("container").appendChild(row);
    } colorSquares();
}

button = document.querySelector('button')
button.addEventListener('click', reload)

let squares = Array.from(document.querySelectorAll(".column"));
//clear all squares, allow user to choose number of squares
function reload() {
    document.querySelectorAll(".column").forEach(square => {
        square.classList.remove("newColor"); });
    let numOfSquares = parseInt(prompt("How many squares per grid? (max 100)"));
    if (numOfSquares < 101) {
     makeSquares(numOfSquares);
    }
    else {
        numOfSquares = parseInt(prompt("Not a valid number. How many squares per grid? (max 100)"));
        makeSquares(numOfSquares);
    }
}
//change square color to black once hovered over 
function colorSquares() {
    document.querySelectorAll(".column").forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.add("newColor");
        });
    })
}
