document.addEventListener("DOMContentLoaded", function(){
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").textContent += lastModified.toLocaleString();
});

const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu")

hambutton.addEventListener("click", () =>{
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});