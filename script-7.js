// 7. Числа Фибоначчи считаются следующим образом:
// F(0) = 0
// F(1) = 1
// ...
// F(n) = F(n-2) + F(n-1)
// Написать функцию, которая будет считать n-ное число из ряда Фибоначчи. Использовать рекурсию

function fibo(n) {
  if (n < 0) {
    return fibo(n + 2) - fibo(n + 1);
  } else if (n <= 1) {
    return n;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}

let num = Math.floor(prompt("Введите число в диапазоне [-30; 30]:"));
while (true) {
  if (isNaN(num) || num > 30 || num < -30) {
    num = Math.floor(
      prompt(
        "Ошибка!\nЧисло должно быть в диапазоне [-30; 30]"
      )
    );
  } else {
    break;
  }
}

console.log(fibo(num));
alert(`Число Фибоноччи: ${fibo(num)}`);