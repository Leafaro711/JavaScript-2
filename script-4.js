// 4. Найти расстояние между двумя точками в двумерном декартовом пространстве

function findCoords(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

let x1 = Number(prompt("Enter number X1:"));
while (true) {
  if (isNaN(x1)) {
    x1 = Number(prompt("Number X1 is not correct!\nPlease try again:"));
  } else {
    break;
  }
}
let y1 = Number(prompt("Enter number Y1:"));
while (true) {
  if (isNaN(y1)) {
    y1 = Number(prompt("Number Y1 is not correct!\nPlease try again:"));
  } else {
    break;
  }
}
let x2 = Number(prompt("Enter number X2:"));
while (true) {
  if (isNaN(x2)) {
    x2 = Number(prompt("Number X2 is not correct!\nPlease try again:"));
  } else {
    break;
  }
}
let y2 = Number(prompt("Enter number Y2:"));
while (true) {
  if (isNaN(y2)) {
    y2 = Number(prompt("Number Y2 is not correct!\nPlease try again:"));
  } else {
    break;
  }
}

console.log("X1 = " + x1);
console.log("Y1 = " + y1);
console.log("X2 = " + x2);
console.log("Y2 = " + y2);

console.log(
  "distance between points: " +
    Math.round(findCoords(x1, y1, x2, y2) * 100) / 100
);
