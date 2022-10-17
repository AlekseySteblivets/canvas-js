const btnEl = document.querySelector(".myBtn");
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

let x = null;
let y = null;
let clickX = null;
let clickY = null;
let drawLane = false;

canvas.onmousedown = function (event) {
  console.log("X:", x);
  x = event.offsetX;
  y = event.offsetY;

  drawLane = !drawLane;
  ctx.fillRect(x, y, 1, 1);
};

canvas.onmousemove = function (event) {
  if (!drawLane) {
    return;
  }
  ctx.clearRect(0, 0, 400, 200);
  clickX = event.offsetX;
  clickY = event.offsetY;
  console.log("clickX", clickX);

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(clickX, clickY);
  ctx.stroke();
};

// function myDraw() {
//   console.log("myDraw:", 123);
// }

// myDraw();
