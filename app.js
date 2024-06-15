/*-------------------------------- Constants --------------------------------*/
// const buttonAddition = document.querySelector("#add")
// const buttonSubtraction = document.querySelector("#minus")
// const buttonMultiplication = document.querySelector("#multiply")
// const buttonDivision = document.querySelector("#divide")
// const buttonEquals = document.querySelector("#equals")
// const buttonCancel = document.querySelector("#cancel")

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll(".button")
const display = document.querySelector(".display")
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        if (button.innerText === "C") {
            display.innerText = "";
        } else if (button.innerText === "=") {
            display.innerText = eval(display.innerText);
        } else {
            display.innerText = display.innerText + button.innerText;
        }
    }) 
})
/*-------------------------------- Functions --------------------------------*/
