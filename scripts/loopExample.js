const temples = [
    "temple1",
    "temple2",
    "temple3",
    "temple4",
    "temple5",
    "temple6",
    "temple7",
    "temple8",
    "temple9",
    "temple10",
    "temple11",
    "temple12",
    "temple13",
    'temple14',
];

let hearder = document.querySelector(".temples");
temples.forEach(temple => {
    const paragraph = document.createElement("p");
    paragraph.textContent = temple;
    hearder.appendChild(paragraph);
});