makeSquares(16);
function makeSquares(numSquares) {
    document.querySelector('#container').innerHTML = '';
    for (i = 0; i < numSquares; i++) {
        let row = document.createElement('div');
        row.className = "row"
        for (j = 0; j < numSquares; j++) {
            let column = document.createElement('div');
            column.className = "column"
            row.appendChild(column);
            column.style.width = (960/numSquares) + "px";
            column.style.height = (960/numSquares) + "px";
        }
        document.getElementById("container").appendChild(row);
    } colorSquares();
}


button = document.querySelector('button')
button.addEventListener('click', reload)

let squares = Array.from(document.querySelectorAll(".column"));

function reload() {
    let numOfSquares = parseInt(prompt("How many squares per grid? (max 100)"));
    //squares.forEach(square => square.style.backgroundColor = 'black');
    makeSquares(numOfSquares);
    //colorSquares();
   
}


function colorSquares() {
    
    document.querySelectorAll(".column").forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.add("newColor");
        });
    })
}
