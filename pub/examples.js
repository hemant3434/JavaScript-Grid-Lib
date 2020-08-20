"use strict";
console.log("example");

function sample() {
  const style1 = {
    // padding: 10,
    // gap: 20,
    numCols: 1,
    // width: 800,
    // height: 800,
    // sizeCol: 400,
    widthItem: 220,
    heightItem: 130,
    color: "rgba(255, 0, 0, 0.3)",
    draggable: true,
  };
  initializeGrid(style1, "#items2");

  const style2 = {
    // padding: 10,
    // gap: 20,
    numCols: 1,
    // width: 800,
    // height: 800,
    // sizeCol: 400,
    widthItem: 220,
    heightItem: 130,
    color: "rgba(255, 0, 0, 0.3)",
    draggable: true,
  };
  initializeGrid(style2, "#items");
}

sample();
