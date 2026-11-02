const valueDisaplay = document.querySelector(".counter-value");
const increaseBtn = document.querySelector(".btn-increase");
const decreaseBtn = document.querySelector(".btn-decrease");
const resetBtn = document.querySelector(".btn-reset");

let count = 0;

increaseBtn.addEventListener("click", function add() {
  count++;
  valueDisaplay.textContent = count;
});

decreaseBtn.addEventListener("click", function decrease() {
  if (count > 0) {
    count--;
  }
  valueDisaplay.textContent = count;
});

resetBtn.addEventListener("click", function reset() {
  count = 0;
  valueDisaplay.textContent = count;
});
