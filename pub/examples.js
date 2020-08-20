"use strict";
console.log("example");

function sample() {
  let combine = {};
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
    combine: combine,
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
    combine: combine,
  };
  initializeGrid(style2, "#items");
}

sample();
