"use strict";
console.log("ultimate-grid");
const print = console.log;

function initializeGrid(style, list, parent) {
  const self = {};
  self.style = style;
  self.items = list;
  self.parent = parent;

  void (() => {
    self.items.map((ID) => {
      $(self.parent).append($("<div></div>").append($(ID)));
    });

    print("done creating");
  })();

  return self;
}
