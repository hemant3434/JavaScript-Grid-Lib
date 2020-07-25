"use strict";
console.log("ultimate-grid");
const print = console.log;

function initializeGrid(style, list, parent) {
  const self = {};
  self.style = style;
  self.items = list;
  self.parent = parent;

  void (() => {
    buildParentGridContainer();
    self.items.map((elem) => {
      $(self.parent).append($("<div></div>").append($(elem)));
    });
  })();

  function buildParentGridContainer() {
    let tempCol = "";
    for (let i = 0; i < self.style.width; i++) {
      tempCol += self.style.sizeEach.toString() + "px ";
    }
    self.parentCss = {
      "background-color": self.style.color,
      "grid-template-columns": tempCol,
      "grid-gap": self.style.gap,
      display: "grid",
      "justify-content": "space-evenly",
    };
    $(self.parent).css(self.parentCss);
  }

  return self;
}
