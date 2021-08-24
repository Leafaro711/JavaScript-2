// 8. Написать функцию, которая принимает число и возвращает другую функцию.
// Возвращаемая функция должна принимать массив чисел в качестве параметра и возвращать тот же массив,
// но где каждое число разделено на число, которое было отправлено в первую функцию

function factory(n) {
  return array => {
      const newArr = [];
      for(let i of array) {
          newArr.push(i / n);
      }
      return newArr;
  }
}

let n1 = prompt("Введите делитель:");
const arr = factory(n1);
const arr1 = [];
for (let i = 0; i < 7; i++) {
  arr1.push(Math.round(Math.random() * 100));
}
console.log(`Массив: [${arr1}]`);
console.log(`[${arr1}] / ${n1} = [${arr(arr1)}]`);
alert(`[${arr1}] / ${n1} = [${arr(arr1)}]`);
