const container = document.getElementById("container");
const newGridBtn = document.getElementById("new-grid-btn");

function createGrid(size) {
    container.innerHTML = ''; // clear existing grid
    const containerSize = 960; // fixed container size
    const squareSize = containerSize / size; // dynamic square size

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = square.style.height = squareSize + "px";
        container.appendChild(square);
    }
    addHoverColor();
}

function promptGridSize() {
    let size = prompt("Enter the number of squares per side (1 to 100):", "16");
    if (size === null) return;

    size = Number(size);

    if ( Number.isNaN(size) || size < 1 || size > 100 || !Number.isInteger(size)) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }
    createGrid(size);
}

// Initial grid load
createGrid(16);
// Event listener for button
newGridBtn.addEventListener("click", promptGridSize);

function addHoverColor() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "blue";
        });
    });
}
