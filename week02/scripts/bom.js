const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


button.addEventListener("click", function () {
    if (input.value.trim() !== '') {
        const li = document.createElement("li");
        li.textContent = input.value;
        list.append(li);

        input.value = "";
        input.focus = "";

        const deleteButton = document.createElement("button");
        deleteButton.addEventListener("click", function(){
            list.removeChild(li);
            input.focus();
        });

        deleteButton.textContent = "❌";
        li.append(deleteButton);


    }
});


