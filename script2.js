const btnEl = document.querySelector(".myBtn");
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

// let y = null;
// let x = null;

let x1 = 30;
let y1 = 15;
let x2 = 150;
let y2 = 160;

let x3 = 250;
let y3 = 100;
let x4 = 25;
let y4 = 50;

// отрисовка прямой "а"
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();

// отрисовка прямой "b"
ctx.beginPath();
ctx.moveTo(x3, y3);
ctx.lineTo(x4, y4);
ctx.stroke();

function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  // Check if none of the lines are of length 0
  if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
    return false;
  }

  let denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

  // Lines are parallel
  if (denominator === 0) {
    return false;
  }

  let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
  let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;

  // is the intersection along the segments
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
    return false;
  }

  // Return a object with the x and y coordinates of the intersection
  let x = x1 + ua * (x2 - x1);
  let y = y1 + ua * (y2 - y1);

  ctx.fillStyle = "red";
  ctx.fillRect(x - 3, y - 3, 6, 6);

  return { x, y };
}

console.log("intersect():", intersect(x1, y1, x2, y2, x3, y3, x4, y4));
