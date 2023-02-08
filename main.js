let btn = document.getElementById("btn");
let input = document.getElementById("input");
let boxs = document.querySelectorAll(".box");
let drag = null;

btn.onclick = function () {
  if (input.value != "") {
    boxs[0].innerHTML += `<p class="item" draggable="true">${input.value}</p>`;

    input.value = "";
  }

  dragItem();
};

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", () => {
      drag = item;
      item.style.opacity = "0.5";
    });

    item.addEventListener("dragend", () => {
      drag = null;
      item.style.opacity = "1";
    });

    boxs.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.background = "#090";
        this.style.color = "#fff";
      });

      box.addEventListener("dragleave", function () {
        this.style.background = "white";
        this.style.color = "black";
      });

      box.addEventListener("drop", function () {
        this.append(drag);
        this.style.background = "white";
        this.style.color = "black";
      });
    });
  });
}
