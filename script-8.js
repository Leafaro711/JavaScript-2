// 8. Написать функцию, которая принимает число и возвращает другую функцию.
// Возвращаемая функция должна принимать массив чисел в качестве параметра и возвращать тот же массив,
// но где каждое число разделено на число, которое было отправлено в первую функцию

function generateDivisionArray(n) {
  return function (array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] / n;
    }
    console.log(array);
  };
}

generateDivisionArray(10)([22, 8, 15]);