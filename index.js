const container = document.createElement("div");
container.classList.add("container");

for (let i = 0; i < 16; i++){
    const div = document.createElement("div");
    div.classList.add("div" + [i]);
    div.classList.add("hover");
    console.log("added");
    div.textContent = "0";
    container.appendChild(div);
}

document.body.appendChild(container);