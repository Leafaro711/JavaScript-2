// 7. Числа Фибоначчи считаются следующим образом:
// F(0) = 0
// F(1) = 1
// ...
// F(n) = F(n-2) + F(n-1)
// Написать функцию, которая будет считать n-ное число из ряда Фибоначчи. Использовать рекурсию

function fib(n) {
  if (n < 0) {
    return fib(n + 2) - fib(n + 1);
  } else if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

let num = Math.floor(prompt("Please enter number:"));
while (true) {
  if (isNaN(num) || num > 40 || num < -40) {
    num = Math.floor(
      prompt(
        "You entered string or wrong number!\nThe number must be in the range [-40; 40]\nPlease try again:"
      )
    );
  } else {
    break;
  }
}

console.log(fib(num));
