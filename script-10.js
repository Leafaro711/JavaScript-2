// 10. Написать функцию, которая принимает значения start и end в параметрах, возвращает массив, который содержит все числа в данном диапазоне,
// включая отправленные. Порядок расположения чисел в возвращаемом массиве зависит от того, какие параметры были отправлены

function diapazone(start, end) {
  const array = [];
  let arrayLength = end - start;
  if (start < end) {
    for (let i = 0; i <= arrayLength; i++) {
      array[i] = start++;
    }
    alert(`${array}`);
  } else if (start > end) {
    for (let i = start; i >= end; i--) {
      array[i - 1] = i;
    }
    alert(`${array.reverse()}`);
  }
  console.log(array);
}
alert('Введите два числа, чтобы получить массив из чисел в этом диапазоне:');
diapazone(prompt("Start"), prompt("End"));
