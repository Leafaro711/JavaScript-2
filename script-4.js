// 4. Найти расстояние между двумя точками в двумерном декартовом пространстве

function findCoords(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

let x1 = Number(prompt("Введите число для X1:"));
while (true) {
  if (isNaN(x1)) {
    x1 = Number(prompt("Ошибка!\nВведите число"));
  } else {
    break;
  }
}

let y1 = Number(prompt("Введите число для Y1:"));
while (true) {
  if (isNaN(y1)) {
    y1 = Number(prompt("Ошибка!\nВведите число"));
  } else {
    break;
  }
}

let x2 = Number(prompt("Введите число для X2:"));
while (true) {
  if (isNaN(x2)) {
    x2 = Number(prompt("Ошибка!\nВведите число"));
  } else {
    break;
  }
}

let y2 = Number(prompt("Введите число для Y2:"));
while (true) {
  if (isNaN(y2)) {
    y2 = Number(prompt("Ошибка!\nВведите число"));
  } else {
    break;
  }
}

console.log("X1 = " + x1);
console.log("Y1 = " + y1);
console.log("X2 = " + x2);
console.log("Y2 = " + y2);
console.log(
  "Расстояние между точками: " +
    Math.round(findCoords(x1, y1, x2, y2) * 100) / 100
);
alert(
  "Расстояние между точками: " +
    Math.round(findCoords(x1, y1, x2, y2) * 100) / 100
);
