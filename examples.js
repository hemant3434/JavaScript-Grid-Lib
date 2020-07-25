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
  const style = {
    padding: 20,
    gap: 20,
    numCols: 1,
    // width: 800,
    // height: 800,
    static: true,
    customSize: false,
    // sizeCol: 400,
    widthItem: 250,
    heightItem: 150,
    color: "red",
    draggable: true,
  };
  const r = initializeGrid(style, "#parent");
}

sample();
