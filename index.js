const container = document.querySelector(".container");
const createButton = document.querySelector(".create");
const resetButton = document.querySelector(".reset");
const modal = document.querySelector(".modal-container");
const exitModalButton = document.querySelector(".exit");
const infoButton = document.querySelector(".modalAppear");
let squareNum = 16;

// get random color by generating a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(squareNum){
    // Find the size of the pixel by taking the size
    // of the container and dividing it by the number of pixels 
    const pixelSize = 450 / squareNum;
    console.log(squareNum)
    // create the squareNum * squareNum sketchpad 
    for (let i = 0; i < squareNum * squareNum; i++) { 
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        // Add event listener to each pixel
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = getRandomColor();
            pixel.style.opacity
        });
        container.appendChild(pixel);
    }

    document.body.appendChild(container);
}

// event listener for create button
createButton.addEventListener("click", () => { 
    let newNum = prompt("Enter the number of squares per side (max 100):");
    if (newNum > 100) {
        alert("Please enter a number less than or equal to 100");
        return;
    } else {
        squareNum = newNum;
    }
    container.innerHTML = "";
    createGrid(squareNum);
});

// event listener for reset button
resetButton.addEventListener("click", () => { 
    container.innerHTML = "";
    createGrid(16);
});

exitModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

infoButton.addEventListener("click", () => {
    modal.style.display = "flex";
})


createGrid(squareNum);
