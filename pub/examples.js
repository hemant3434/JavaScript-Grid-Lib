"use strict";
console.log("example");

function sample() {
  const style1 = {
    padding: 15,
    gap: 20,
    // numCols: 1,
    numCols: 1,
    // width: 800,
    // height: 800,
    sizeCol: 250,
    sizeRow: 150,
    custom_size: [2, 1, 1, 1, 1],
    widthItem: 220,
    heightItem: 130,
    color: "rgba(255, 0, 0, 0.3)",
    draggable: true,
    drag_mode: "append",
  };
  initializeGrid(style1, "#items2");

  const style2 = {
    padding: 15,
    gap: 20,
    numCols: 1,
    // width: 800,
    // height: 800,
    custom_size: [1, 1, 1, 1, 1],
    sizeCol: 250,
    sizeRow: 150,
    // widthItem: 220,
    // heightItem: 130,
    color: "rgba(255, 0, 0, 0.3)",
    draggable: true,
    drag_mode: "append",
  };
  initializeGrid(style2, "#items");
}

sample();
