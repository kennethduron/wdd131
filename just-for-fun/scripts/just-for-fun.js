let myName = "Kenneth Duron";
let H1 = document.querySelector("p");


let H2 = document.createElement("h2");
H2.textContent = "Created with JavaScript";
H2.style.color = "red";
H2.style.backgroundColor = "#000000";
document.body.appendChild(H2);

let paragraph = document.createElement("p");
paragraph.textContent = "Hello world, my name is Kenneth";
paragraph.style.backgroundColor = "blue";
paragraph.style.color = "white";
paragraph.style.padding = "1rem";
paragraph.style.borderRadius = "3rem";
paragraph.style.textAlign = "center";
document.body.appendChild(paragraph);

