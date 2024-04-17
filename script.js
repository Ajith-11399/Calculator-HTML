// const display = document.getElementById("result")

// function appendToDisplay(input) {
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = "";
// }

// function backspace(){
//     display.value = display.value.slice(0, -1)
// }

// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "Error";
//     }
// }



// const result = document.getElementById("result");
// const numButtons = document.querySelectorAll(".up");

// numButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     result.value += button.textContent;
//   });
// });

// const clear = document.getElementById("clear");
// clear.addEventListener("click", () => {
//   result.value = "";
// });

// const back = document.getElementById("backspace");
// back.addEventListener("click", () => {
//     result.value = result.value.slice(0, -1);
// })

// const calc = document.getElementById("calculate");
// calc.addEventListener("click", () => {
//     result.value = eval(result.value);
// })



const result = document.getElementById("result");
const numButtons = document.querySelectorAll(".up");
const clear = document.getElementById("clear");
const back = document.getElementById("backspace");
const equal = document.getElementById("equal");

// Function to handle button clicks
function handleButtonClick(event) {
  const button = event.target;
  if (button.textContent === "=") {
    try {
      result.value = evaluateExpression(result.value);
    } catch (error) {
      result.value = "Error";
    }
  } else if (button.textContent === "AC") {
    result.value = "";
  } else if (button.textContent === "←") {
    result.value = result.value.slice(0, -1);
  } else {
    result.value += button.textContent;
  }
}

// Function to evaluate the expression
function evaluateExpression(expression) {
  return eval(expression);
}

// Add event listeners to number buttons
numButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

// Clear button
clear.addEventListener("click", () => {
  result.value = "";
});

// Backspace button
back.addEventListener("click", () => {
  result.value = result.value.slice(0, -1);
});

// Equal button
equal.addEventListener("click", () => {
  result.value = evaluateExpression(result.value);
});



