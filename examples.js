"use strict";
console.log("example");

function sample() {
  const ids = ["#img1", "#img2", "#img3"];
  const style = {
    padding: 5,
    width: 1,
    static: true,
  };
  const r = initializeGrid(style, ids);
  r.create();
}

sample();
