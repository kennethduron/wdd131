let checkNumberButton = document.getElementById("checkNumber");

checkNumberButton.addEventListener("click", fuction() {
    let numberValue = document.getElementById ("number").value;

    if (numberValue >8) {
        alert("Your number is greater than 8. And your number is:" + numberValue)
    } else {
        alert("The number is smaller that 8. And your number is:" + numberValue)
    }
});