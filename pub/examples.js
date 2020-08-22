"use strict";
console.log("example");

function sample() {
  const style2 = {
    padding: 15,
    gap: 20,
    numCols: 1,
    custom_size: [1, 1, 1, 1, 1],
    sizeCol: 150,
    sizeRow: 80,
    color: "rgba(255, 0, 0, 0.2)",
    draggable: true,
    drag_mode: "swap",
    drag_factor: 1,
  };

  const style3 = {
    padding: 15,
    gap: 20,
    numCols: 1,
    custom_size: [2, 1, 1, 1, 1],
    sizeCol: 150,
    sizeRow: 80,
    color: "rgba(255, 0, 0, 0.2)",
    draggable: true,
    drag_mode: "append",
    drag_factor: 1,
  };

  initializeGrid(style2, "#items");
  initializeGrid(style2, "#items2");
  initializeGrid(style2, "#items3");
  initializeGrid(style3, "#items4");
  initializeGrid(style3, "#items5");
  initializeGrid(style3, "#items6");
}

sample();
