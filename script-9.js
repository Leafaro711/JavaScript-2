// 9. Написать функцию, которая принимает два числа в параметрах (num, length) и возвращает массив множителей числа num, 
// пока массив не получит длину равную length. Использовать цикл

function arrayOfMultiples(num, length) {
    const arr = [];
    for (let i = 1; i <= length; i++) {
        arr.push(num * i);
    }
    return arr;
}
var num = prompt("Введите число:");
var length = prompt("Введите длину:");
console.log(`Mассив множителей числа: [${arrayOfMultiples(num, length)}]`);
alert(`Mассив множителей числа: [${arrayOfMultiples(num, length)}]`);