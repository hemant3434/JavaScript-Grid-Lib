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
    gap: 25,
    width: 3,
    static: true,
    customSize: false,
    sizeEach: 100,
    color: "red",
  };
  const r = initializeGrid(style, ids, "#parent");
}

sample();
