
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".up");
const clear = document.getElementById("clear");
const back = document.getElementById("backspace");
const calc = document.getElementById("equal");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    result.value += button.textContent;
  });
});

clear.addEventListener("click", () => {
  result.value = "";
});

back.addEventListener("click", () => {
    result.value = result.value.slice(0, -1);
})

calc.addEventListener("click", () => {
    result.value = eval(result.value);
})