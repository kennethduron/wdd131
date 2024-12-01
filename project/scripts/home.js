document.addEventListener("DOMContentLoaded", function(){
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").textContent += lastModified.toLocaleString();
});

const mainnav = document.querySelector("nav")
const hambutton = document.querySelector("#menu")

hambutton.addEventListener("click", function() {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});