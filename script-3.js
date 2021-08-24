// 3. Написать функцию, которая принимает строку (Rock, Paper или Scissors), 
// рандомно сама генерирует один из этих вариантов и возвращает в ответ следующую строку: “Player selected Scissors. CPU selected Rock. CPU won”. 
// Если выбор пал на одинаковые строки, то строка должна быть следующей: “Player and CPU both selected Paper. Friendship won”.
//  Игра камень ножницы бумага

const words = ["Rock", "Paper", "Scissors"];
let cpu = words[Math.floor(Math.random() * words.length)];

function rps(player) {
    if (player === words[0] || player === words[0].toUpperCase() || player === words[0].toLowerCase() && cpu === words[0]) {
        return `Player and CPU both selected ${words[0]}. Draw`;
    } else if (player === words[1] || player === words[1].toUpperCase() || player === words[1].toLowerCase() && cpu === words[1]) {
        return `Player and CPU both selected ${words[1]}. Draw`;
    } else if (player === words[2] || player === words[2].toUpperCase() || player === words[2].toLowerCase() && cpu === words[2]) {
        return `Player and CPU both selected ${words[2]}. Draw`;
    } else if (player === words[0] || player === words[0].toUpperCase() || player === words[0].toLowerCase() && cpu === words[1]) {
        return `Player selected ${words[0]}. CPU selected ${words[1]}. CPU won`;
    } else if (player === words[1] || player === words[1].toUpperCase() || player === words[1].toLowerCase() && cpu === words[2]) {
        return `Player selected ${words[1]}. CPU selected ${words[2]}. CPU won`;
    } else if (player === words[2] || player === words[2].toUpperCase() || player === words[2].toLowerCase() && cpu === words[0]) {
        return `Player selected ${words[2]}. CPU selected ${words[0]}. CPU won`;
    } else if (player === words[1] || player === words[1].toUpperCase() || player === words[1].toLowerCase() && cpu === words[0]) {
        return `Player selected ${words[1]}. CPU selected ${words[0]}. Player won`;
    } else if (player === words[2] || player === words[2].toUpperCase() || player === words[2].toLowerCase() && cpu === words[1]) {
        return `Player selected ${words[2]}. CPU selected ${words[1]}. Player won`;
    } else if (player === words[0] || player === words[0].toUpperCase() || player === words[0].toLowerCase() && cpu === words[2]) {
        return `Player selected ${words[0]}. CPU selected ${words[2]}. Player won`;
    } else {
        return rps(prompt(`Incorrect word! Try again:\n${words[0]}, ${words[1]} or ${words[2]}`));
    }
}

alert(rps(prompt(`Please enter:\n${words[0]}, ${words[1]} or ${words[2]}`)));