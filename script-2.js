// 2. Написать функцию, которая принимает число от 1 до 999 и возвращает его строковый вариант.

let number = Number(Math.floor(prompt("Введите число от 1 до 999:")));
while (true) {
  if (isNaN(number) || number < 1 || number >= 1000) {
    number = Number(Math.floor(prompt("Неверное число. Максимум от 1 до 999")));
  } else {
    break;
  }
}

let num = number;

let count = num === 0 ? 1 : 0;
let tmp = num;
while (num !== 0) {
  count++;
  num /= 10;
  num = Math.floor(num);
}

function numToString(n) {
  for (let i = 0; i < count; i++) {
    let string100;
    let string10;
    let string;
    let n100;
    let n10;

    if (count === 3) {
      n100 = Math.floor(n / 100);
      n10 = Math.floor(n / 10) % 10;
      n %= 10;
    } else if (count === 2) {
      n10 = Math.floor(n / 10);
      n %= 10;
    }

    if (n100 === 0) {
      string100 = "";
    } else if (n100 === 1) {
      string100 = "сто ";
    } else if (n100 === 2) {
      string100 = "двести ";
    } else if (n100 === 3) {
      string100 = "триста ";
    } else if (n100 === 4) {
      string100 = "четыреста ";
    } else if (n100 === 5) {
      string100 = "пятьсот ";
    } else if (n100 === 6) {
      string100 = "шестьсот ";
    } else if (n100 === 7) {
      string100 = "семьсот ";
    } else if (n100 === 8) {
      string100 = "восемьсот ";
    } else if (n100 === 9) {
      string100 = "девятьсот ";
    }

    if (n10 === 0 || (n10 === 1 && n > 0)) {
      string10 = "";
    } else if (n10 === 1 && n === 0) {
      string10 = "десять ";
    } else if (n10 === 2) {
      string10 = "двадцать ";
    } else if (n10 === 3) {
      string10 = "тридцать ";
    } else if (n10 === 4) {
      string10 = "сорок ";
    } else if (n10 === 5) {
      string10 = "пятьдесят ";
    } else if (n10 === 6) {
      string10 = "шестьдесят ";
    } else if (n10 === 7) {
      string10 = "семьдесят ";
    } else if (n10 === 8) {
      string10 = "восемьдесят ";
    } else if (n10 === 9) {
      string10 = "девяносто ";
    }

    if (n10 !== 1 && n === 0) {
      string = "";
    } else if (n10 !== 1 && n === 1) {
      string = "один";
    } else if (n10 !== 1 && n === 2) {
      string = "два";
    } else if (n10 !== 1 && n === 3) {
      string = "три";
    } else if (n10 !== 1 && n === 4) {
      string = "четыре";
    } else if (n10 !== 1 && n === 5) {
      string = "пять";
    } else if (n10 !== 1 && n === 6) {
      string = "шесть";
    } else if (n10 !== 1 && n === 7) {
      string = "семь";
    } else if (n10 !== 1 && n === 8) {
      string = "восемь";
    } else if (n10 !== 1 && n === 9) {
      string = "девять";
    } else if (n10 === 1 && n === 0) {
      string = "";
    } else if (n10 === 1 && n === 1) {
      string = "одиннадцать";
    } else if (n10 === 1 && n === 2) {
      string = "двенадцать";
    } else if (n10 === 1 && n === 3) {
      string = "тринадцать";
    } else if (n10 === 1 && n === 4) {
      string = "четырнадцать";
    } else if (n10 === 1 && n === 5) {
      string = "пятнадцать";
    } else if (n10 === 1 && n === 6) {
      string = "шестнадцать";
    } else if (n10 === 1 && n === 7) {
      string = "семнадцать";
    } else if (n10 === 1 && n === 8) {
      string = "восемнадцать";
    } else if (n10 === 1 && n === 9) {
      string = "девятнадцать";
    }

    if (count === 3)
      return (
        string100.charAt(0) +
        string100.slice(1) +
        string10 +
        string
      );
    else if (count === 2)
      return string10.charAt(0) + string10.slice(1) + string;
    else return string.charAt(0) + string.slice(1);
  }
}

alert(numToString(number));
