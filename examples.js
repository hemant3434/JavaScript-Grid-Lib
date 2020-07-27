"use strict";
console.log("example");

function sample() {
  const ids = [
    "#img1",
    "#img2",
    "#img3",
    "#img4",
    "#img5",
    "#img6",
    "#img7",
    "#img8",
    "#img9",
  ];

  const style1 = {
    padding: 10,
    gap: 20,
    numCols: 1,
    // width: 800,
    // height: 800,
    // sizeCol: 400,
    widthItem: 100,
    heightItem: 130,
    color: "rgba(50, 0, 0, 0.3)",
    draggable: false,
  };
  initializeGrid(style1, "#section");

  const style2 = {
    padding: 10,
    gap: 20,
    numCols: 4,
    // width: 800,
    // height: 800,
    // sizeCol: 400,
    widthItem: 200,
    heightItem: 130,
    color: "rgba(255, 0, 0, 0.3)",
    draggable: true,
  };
  initializeGrid(style2, "#items");
}

sample();
