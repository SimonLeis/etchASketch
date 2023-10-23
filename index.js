"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  let numberOfSquares = 16 * 16;

  const createGrid = (numberOfSquares) => {
    for (let index = 0; index < numberOfSquares; index++) {
      const div = document.createElement("div");
      div.classList.add("square");
      div.style.width = `${1000 / Math.sqrt(numberOfSquares) - 2}px`;
      div.style.height = `${1000 / Math.sqrt(numberOfSquares) - 2}px`;

      console.log(div.style.width);

      container.appendChild(div);
    }
  };

  const destroyGrid = () => {
    document.querySelectorAll(".square").forEach((element) => {
      element.parentNode.removeChild(document.querySelector(".square"));
    });
  };

  createGrid(numberOfSquares);
});
