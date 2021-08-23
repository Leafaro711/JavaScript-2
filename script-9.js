// 9. Написать функцию, которая принимает два числа в параметрах (num, length) и возвращает массив множителей числа num, 
// пока массив не получит длину равную length. Использовать цикл

function arrayOfMultiples(num, length) {
    const arr = [];
    for (let i = 1; i <= length; i++) {
        arr.push(num * i);
    }
    return arr;
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));
