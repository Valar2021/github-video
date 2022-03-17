const buttons = document.querySelectorAll(".btn");
const results = document.querySelector("#result");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let val = e.target.id;
    console.log(val);
    results.textContent += val;
  });
});
equal.addEventListener("click", () => {
  results.textContent = eval(results.textContent);
});
clear.addEventListener("click", () => {
  results.textContent = 0;
});
