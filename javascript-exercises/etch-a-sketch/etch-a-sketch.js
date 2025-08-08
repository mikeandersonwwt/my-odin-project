
const container = document.getElementById("container");
for (let row = 0; row < 16; row++){
    for (let col = 0; col < 16; col++){
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);  
    }
}
