"use strict";
console.log("example");

function sample() {
  const style2 = {
    padding: 15,
    gap: 20,
    numCols: 1,
    custom_size: [1, 1, 1],
    sizeCol: 150,
    sizeRow: 80,
    color: "rgba(255, 0, 0, 0.4)",
    draggable: true,
    drag_mode: "swap",
    drag_factor: 1,
  };

  const style3 = {
    padding: 15,
    gap: 20,
    numCols: 1,
    custom_size: [2, 1, 1],
    sizeCol: 150,
    sizeRow: 80,
    color: "rgba(255, 0, 0, 0.4)",
    draggable: true,
    drag_mode: "append",
    drag_factor: 1,
  };

  const style4 = {
    padding: 15,
    gap: 20,
    numCols: 1,
    custom_size: [2, 1, 1],
    sizeCol: 150,
    sizeRow: 80,
    color: "rgba(255, 0, 0, 0.4)",
    draggable: true,
    drag_mode: "append",
    drag_factor: 1,
  };
  const style5 = {
    padding: 15,
    gap: 20,
    numCols: 1,
    custom_size: [1, 2, 1],
    sizeCol: 150,
    sizeRow: 80,
    color: "rgba(255, 0, 0, 0.4)",
    draggable: true,
    drag_mode: "append",
    drag_factor: 1,
  };
  const style6 = {
    padding: 15,
    gap: 20,
    numCols: 1,
    custom_size: [1, 1, 2],
    sizeCol: 150,
    sizeRow: 80,
    color: "rgba(255, 0, 0, 0.4)",
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

  const add1 = initializeGrid(style4, "#items7");
  const add2 = initializeGrid(style5, "#items8");
  const add3 = initializeGrid(style6, "#items9");

  document.getElementById("add1").addEventListener("click", () => {
    const elem = document.createElement("textarea");
    elem.setAttribute("placeholder", "new element generated with size 2");
    add1.addElement(elem, 2);
  });
  document.getElementById("add2").addEventListener("click", () => {
    const elem = document.createElement("textarea");
    elem.setAttribute("placeholder", "new element generated with size 1");
    add2.addElement(elem, 1);
  });
  document.getElementById("add3").addEventListener("click", () => {
    const elem = document.createElement("textarea");
    elem.setAttribute("placeholder", "new element generated with size 2");
    add3.addElement(elem, 2);
  });
}

sample();
