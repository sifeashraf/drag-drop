let input = document.querySelector(".inputs input");
let btn = document.querySelector(".inputs button");
let boxes = document.querySelectorAll(".box");
let drag = null;

local();
dragitem();
btn.onclick = function () {
  if (input.value === "") {
    return;
  } else {
    boxes[0].innerHTML += `<p class="item" draggable="true">${input.value}</p>`;
    localStorage.setItem(input.value, input.value);
    input.value = "";
  }

  dragitem();
};

function dragitem() {
  let p = document.querySelectorAll(".list p");

  p.forEach((para) => {
    para.addEventListener("dragstart", function () {
      console.log(para);
      drag = para;
      this.style.opacity = "0.5";
    });
    para.addEventListener("dragend", function () {
      drag = null;
      this.style.opacity = "1";
    });
  });

  boxes.forEach((box) => {
    box.addEventListener("dragover", function (e) {
      console.log(drag);
      e.preventDefault();
      this.style.background = "#090";
      this.style.color = "#fff";
    });
    box.addEventListener("dragleave", function () {
      console.log(drag);
      this.style.background = "#fff";
      this.style.color = "black";
    });
    box.addEventListener("drop", function () {
      console.log(drag);
      this.append(drag);
      this.style.background = "#fff";
      this.style.color = "black";
    });
  });
}

function local() {
  if (localStorage.length > 0) {
    for (let [key] of Object.entries(localStorage)) {
      boxes[0].innerHTML += `<p class="item" draggable="true">${key}</p>`;
    }
  }
}
