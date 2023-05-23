"use strict";

(() => {
  // === DOM & VARS ===
  const DOM = {};

  DOM.decBtn = document.querySelector(".dec-btn");
  DOM.incBtn = document.querySelector(".inc-btn");
  DOM.resetBtn = document.querySelector(".reset-btn");
  DOM.counterTextEl = document.querySelector("span.c__numText");

  let counter = 0;

  // === INIT =========

  const init = () => {
    DOM.decBtn.addEventListener("click", handleDecrement);
    DOM.incBtn.addEventListener("click", handleIncrement);
    DOM.resetBtn.addEventListener("click", handleReset);
  };

  // === EVENTS / XHR =======
  const handleDecrement = (e) => {
    e.preventDefault();
    decrement();
    DOM.counterTextEl.innerText = counter;
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    increment();
    DOM.counterTextEl.innerText = counter;
  };

  const handleReset = (e) => {
    e.preventDefault();
    reset();
    DOM.counterTextEl.innerText = counter;
  };

  // === FUNCTIONS ====

  const decrement = () => {
    if (counter !== 0) counter--;
  };

  const increment = () => {
    counter++;
  };

  const reset = () => {
    counter = 0;
  };

  init();
})();
