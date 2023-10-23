"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const inputSquares = document.querySelector(".inputSquares");
  inputSquares.value = "16";
  const submitBtnSquares = document.querySelector(".submitBtnSquares");
  let wantedNumberOfSquares = 16;
  let numberOfSquares = wantedNumberOfSquares * wantedNumberOfSquares;

  const createGrid = (numberOfSquares) => {
    for (let index = 0; index < numberOfSquares; index++) {
      const div = document.createElement("div");
      div.classList.add("square");
      div.style.width = `${1000 / Math.sqrt(numberOfSquares) - 2}px`;
      div.style.height = `${1000 / Math.sqrt(numberOfSquares) - 2}px`;

      container.appendChild(div);
    }
  };

  const destroyGrid = () => {
    document.querySelectorAll(".square").forEach((element) => {
      element.parentNode.removeChild(document.querySelector(".square"));
    });
  };

  const paintBlack = (target) => {
    target.style.backgroundColor = "black";
  };

  createGrid(numberOfSquares);

  document.addEventListener("mouseover", (e) => {
    e.target;

    switch (e.target.className) {
      case "square":
        paintBlack(e.target);
        e.stopPropagation();
        break;

      default:
        break;
    }

    submitBtnSquares.addEventListener("click", () => {
      destroyGrid();
      console.log(inputSquares.value);
      wantedNumberOfSquares = inputSquares.value;
      numberOfSquares = wantedNumberOfSquares * wantedNumberOfSquares;
      createGrid(numberOfSquares);
    });
  });
});
