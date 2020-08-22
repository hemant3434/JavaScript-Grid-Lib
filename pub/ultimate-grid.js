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
        // print(e);
        // print(e.target);
        // print(self.gridRoot);
        e.dataTransfer.setData("text", self.gridRoot);
        element.draggable = true;
        element.classList.add("dragging");
        if (self.style.drag_mode !== "swap") {
          element.classList.add("append");
        }
      });
    });

    drag.elems.forEach((element) => {
      element.addEventListener("drop", (e) => {
        // print(e.dataTransfer.getData("text"));
        if (self.style.drag_mode !== "append") {
          $(".swap").removeClass("swap");
          const copy_to = $(".dragging").clone(true);
          copy_to.removeClass("dragging");
          if (drag.next) {
            const copy_from = $(drag.next).clone(true);
            $(drag.next).replaceWith(copy_to);
            $(".dragging").replaceWith(copy_from);
          }
        }
        const id = e.dataTransfer.getData("text");
        const newRowSize = buildRowSize(id);
        $(id).css("grid-template-rows", newRowSize);

        element.classList.remove("dragging");
        initiateDraggable();
      });
    });

    drag.elems.forEach((element) => {
      element.addEventListener("dragend", (e) => {
        initiateDraggable();
        element.classList.remove("append");
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
        if (next) {
          if (self.style.drag_mode === "append") {
            $(".dragging").insertAfter(next);
            $(self.gridRoot).css("grid-template-rows", () => {
              const temp = buildRowSize(self.gridRoot);
              $(self.gridRoot).css("grid-template-rows", temp);
            });
          } else {
            drag.next = next;
            $(".swap").removeClass("swap");
            $(next).addClass("swap");
          }
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

  function setChildCSS() {
    [...$(self.gridRoot).children()].forEach((each, i) => {
      if (self.style.custom_size) {
        $(each).css({
          width: "100%",
          height: "100%",
          "grid-row-start": "span " + self.style.custom_size[i].toString(),
        });
      } else {
        $(each).css({
          width: "100%",
          height: "100%",
          "grid-row-start": "span 1",
        });
      }
    });
  }

  function buildParentGridContainer() {
    setChildCSS();
    self.parentCss = {
      "background-color": self.style.color,
      "grid-template-columns": buildColSize(),
      "grid-template-rows": buildRowSize(self.gridRoot),
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
    };

    $(self.gridRoot).css(self.parentCss);
  }

  function buildColSize() {
    let tempCol = "";
    for (let i = 0; i < self.style.numCols; i++) {
      if (self.style.sizeCol) {
        tempCol += self.style.sizeCol.toString() + "px ";
      } else {
        tempCol += "1fr ";
      }
    }
    return tempCol;
  }

  function buildRowSize(selector) {
    let tempRow = "";
    [...$(selector).children()].forEach((each) => {
      const size = parseInt($(each).css("grid-row-start").split(" ")[1]);
      for (let i = 0; i < size; i++) {
        if (self.style.sizeRow) {
          tempRow += self.style.sizeRow + "px ";
        } else {
          tempRow += self.style.sizeRow + "1fr ";
        }
      }
    });
    // print(tempRow);
    return tempRow;
  }

  return self;
}
