let firstName = "Antonia";
let lastName = "Francesca";
function fullName(first, last) {
    return "${first} ${last}";
}
const fullName = function (first, last) {
    return "${first} ${last}";
}
const fullName = (fisrtName, lastName) => "${firstName} ${lastName}";
document.querySelector("fullName").innerHTML = fullName(fisrtName, lastName);