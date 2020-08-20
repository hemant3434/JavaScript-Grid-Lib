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
      initiateDraggable();
    }
  }

  function initiateDraggable() {
    $(self.gridRoot).children().addClass("draggable");

    drag.elems = [
      ...document
        .getElementById(self.gridRoot.substring(1))
        .querySelectorAll(".draggable"),
    ];
    drag.elems.forEach((element) => {
      element.addEventListener("dragstart", (e) => {
        element.classList.add("dragging");
      });
    });

    drag.elems.forEach((element) => {
      element.addEventListener("drop", (e) => {
        print(e.target);
        $(".swap").removeClass("swap");
        const copy_to = $(".dragging").clone(true);
        copy_to.removeClass("dragging");
        if (drag.next) {
          const copy_from = $(drag.next).clone(true);
          $(drag.next).replaceWith(copy_to);
          $(".dragging").replaceWith(copy_from);
        }
        initiateDraggable();
        element.classList.remove("dragging");
      });
    });

    drag.elems.forEach((element) => {
      element.addEventListener("dragend", (e) => {
        print(e.target);
        initiateDraggable();
      });
    });

    document
      .getElementById(self.gridRoot.substring(1))
      .addEventListener("dragover", (e) => {
        // initiateDraggable();
        e.preventDefault();
        const next = getDragAfterElement(
          document.getElementById(self.gridRoot.substring(1)),
          e.clientY,
          e.clientX
        );
        if (next) {
          // print(next);
          drag.next = next;
          $(".swap").removeClass("swap");
          $(next).addClass("swap");
        }
      });
  }

  function getDragAfterElement(root, y, x) {
    const all = [...root.querySelectorAll(".draggable")];
    const temp = all.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = [x - (box.left + box.width), y - (box.top + box.height)];
        // print(
        //   `y:${y} boxTop:${box.top} boxHeight: ${box.height} offset:${offset}`
        // );
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
    );
    return temp.element;
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
      // "grid-template-rows": "auto auto auto",
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
