// 5. Написать функцию, которая принимает два массива чисел, сортирует их (можно использовать sort) и возвращает массив чисел, которые встречались в обоих входных массивах.

const array1 = [];
for (let i = 0; i < 7; i++) {
  array1.push(Math.round(Math.random() * 30));
}
console.log(`Массив 1: [${array1}]`);

const array2 = [];
for (let i = 0; i < 7; i++) {
  array2.push(Math.round(Math.random() * 30));
}
console.log(`Массив 2: [${array2}]`);

function commonElements(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  arr1 = arr1.filter((el) => arr2.indexOf(el) > -1);
  arr2 = arr2.filter((el) => arr1.indexOf(el) > -1);
  return arr1.length < arr2.length ? arr1 : arr2;
}

console.log(`Дубликаты обоих массивов: [${commonElements(array1, array2)}]`);
