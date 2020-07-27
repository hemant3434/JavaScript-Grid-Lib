"use strict";
console.log("ultimate-grid");
const print = console.log;

function initializeGrid(style, gridRoot) {
  const self = {};
  self.style = style;
  self.gridRoot = gridRoot;

  let drag = {};
  void (() => {
    buildParentGridContainer();
    buildGridItems();
  })();

  function buildGridItems() {
    const tempCSS = getChildCSS();
    $(self.gridRoot).children().css(tempCSS);

    if (self.style.draggable) {
      $(self.gridRoot).children().addClass("draggable");

      drag.elems = [...$(".draggable")];
      drag.elems.forEach((element) => {
        element.addEventListener("dragstart", () => {
          element.classList.add("dragging");
        });
      });

      drag.elems.forEach((element) => {
        element.addEventListener("dragend", () => {
          const temp = $(drag.next).next();
          if (drag.next != null) {
            $(drag.next).insertBefore(".dragging");
            $(".dragging").insertBefore(temp);
          }
          $(drag.next).removeClass("swap");
          element.classList.remove("dragging");
        });
      });

      document
        .getElementById(self.gridRoot.substring(1))
        .addEventListener("dragover", (e) => {
          e.preventDefault();
          const next = getDragAfterElement(
            document.getElementById(self.gridRoot.substring(1)),
            e.clientY,
            e.clientX
          );
          if (next != null) {
            drag.next = next;
            $(self.gridRoot).children(".swap").removeClass("swap");
            $(drag.next).addClass("swap");
          }
        });
    }
  }

  function getDragAfterElement(root, y, x) {
    const all = [...root.querySelectorAll(".draggable:not(.dragging)")];
    return all.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = [
          x - box.left - box.width / 2,
          y - box.top - box.height / 2,
        ];
        if (
          offset[0] < 0 &&
          offset[0] > closest.offset[0] &&
          offset[1] < 0 &&
          offset[1] > closest.offset[1]
        ) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY] }
    ).element;
  }

  function getChildCSS() {
    const tempCSS = {};
    if (self.style.widthItem) tempCSS.width = self.style.widthItem;
    if (self.style.heightItem) tempCSS.height = self.style.heightItem;
    return tempCSS;
  }

  function buildParentGridContainer() {
    self.parentCss = {
      "background-color": self.style.color,
      "grid-template-columns": buildColSize(),
      "grid-gap": self.style.gap,
      display: "grid",
      width: () => {
        if (!self.style.width) return "max-content";
        return self.style.width;
      },
      height: () => {
        if (!self.style.height) return "max-content";
        return self.style.height;
      },
      padding: self.style.padding,
      "grid-template-rows": "auto auto auto",
    };

    $(self.gridRoot).css(self.parentCss);
  }

  function buildColSize() {
    let tempCol = "";
    for (let i = 0; i < self.style.numCols; i++) {
      if (self.style.sizeCol) {
        tempCol += self.style.sizeCol.toString() + "px ";
      } else {
        tempCol += "auto ";
      }
    }
    return tempCol;
  }
  return self;
}
