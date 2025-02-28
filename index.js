const pixelContainer = document.querySelector(".pixel-container");
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
        pixelContainer.appendChild(pixel);
    }

    document.body.appendChild(pixelContainer);
}


const createButton = document.querySelector(".create");
const resetButton = document.querySelector(".reset");
const modal = document.querySelector(".modal-container");
const exitModalButton = document.querySelector(".exit");
const infoButton = document.querySelector(".modalAppear");
const modalTitle = document.querySelector(".modal-title");
const modalP = document.querySelector(".modal-message");


// event listener for create button
createButton.addEventListener("click", () => { 
    let newNum = prompt("Enter the number of squares per side (max 100):");
    if (newNum > 100 || isNaN(newNum) || newNum < 1) {
        alert("Please enter a number between 1 and 100, inclusive.");
        return;
    } else {
        squareNum = newNum;
    } 
    // clear grid before creating a new one
    pixelContainer.innerHTML = "";
    createGrid(squareNum);
});

// clear grid of previous drawing
resetButton.addEventListener("click", () => { 
    pixelContainer.innerHTML = "";
    createGrid(squareNum);
});

// hide modal when uses presses 'x'
exitModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// make modal visible without animation
infoButton.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.style.animation = "none";
    modalP.style.animation = "none";

})


createGrid(squareNum);
