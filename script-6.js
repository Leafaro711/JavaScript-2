// 6. Написать функцию, которая принимает строку и возвращает первый элемент, который повторяется. Если таких элементов нет, вернуть -1.

function firstRepeat(str) {
  let val = str
    .split("")
    .find((e, i, a) => a.slice(i + 1).some((n) => e === n));
  return val ? val : -1;
}

console.log(firstRepeat("legolas"));
console.log(firstRepeat("Gandalf"));
console.log(firstRepeat("Balrog"));
console.log(firstRepeat("Isildur"));
