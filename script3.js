const btnEl = document.querySelector(".myBtn");
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

let y = 0;
let x = 0;

let timerToCollapse = 3000;
let count = 0;
// let counter = count;
console.log("count1:", count);

let ax1 = 30;
let ay1 = 15;
let ax2 = 390;
let ay2 = 20;

let countForDeleteX = ax2 - ax1;
let countForDeleteY = ay2 - ay1;

if (countForDeleteX < countForDeleteY) {
  count = Math.round(countForDeleteX / 2);
}
if (countForDeleteX > countForDeleteY) {
  count = Math.round(countForDeleteY / 2);
}
console.log("count2:", count);

// console.log("ax1:", ax1);
// отрисовка прямой "а"
ctx.beginPath();
ctx.moveTo(ax1, ay1);
ctx.lineTo(ax2, ay2);
ctx.stroke();

function collapseLine(myTimer) {
  //   counter = counter - 1;
  console.log("count3:", count);
  count = count - 1;
  ctx.clearRect(0, 0, 400, 200);
  ctx.beginPath();
  ctx.moveTo(ax1, ay1);
  ctx.lineTo(ax2, ay2);
  ctx.stroke();

  if (countForDeleteX < countForDeleteY) {
    ax1 = ax1 + 1;
    ax2 = ax2 - 1;

    ay1 = ay1 + countForDeleteY / countForDeleteX;
    ay2 = ay2 - countForDeleteY / countForDeleteX;
  }

  if (countForDeleteX > countForDeleteY) {
    ax1 = ax1 + countForDeleteX / countForDeleteY;
    ax2 = ax2 - countForDeleteX / countForDeleteY;

    ay1 = ay1 + 1;
    ay2 = ay2 - 1;
  }
  if (count <= 0) {
    clearInterval(myTimer);
    ctx.clearRect(0, 0, 400, 200);
  }
}

btnEl.onmousedown = function onBtnClick() {
  let myTimer = window.setInterval(
    () => collapseLine(myTimer),
    `${timerToCollapse}` / `${count}`
  );
};
