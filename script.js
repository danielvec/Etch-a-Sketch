
function makeSquares() {
    for (i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.className = "row"
        for (j = 0; j < 16; j++) {
            let column = document.createElement('div');
            column.className = "column"
            row.appendChild(column);
        }
        document.getElementById("container").appendChild(row);
    }
}

makeSquares();

/*function colorChanger() {
    document.getElementsByClassName(".column").className = "newColor";
}*/


const squares = Array.from(document.querySelectorAll(".column"));
squares.forEach(square => square.addEventListener('mouseover', () => {square.style.backgroundColor = 'black';}));