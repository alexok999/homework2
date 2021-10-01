"use strict";
//Задача 1 Получить верное значение округления 
let numOne = Math.round(1.005 * 100) / 100;
console.log(numOne);



let numOne2 = Math.ceil(1.005 * 100) / 100;
console.log(numOne2);

// let numOne3 = Math.ceil(1.005 * 100) / 100;
// console.log(numOne3.toFixed(2));

// Как я понял 1.01 должно получится при результате 1.005. В других случаях если округлять до целого будет 1.


//Задача 2 Получить число 135.58
let value = "135.58px";
console.log(value);

let value22 = "135.58px";
console.log(parseFloat(value22));

//Задача 3 Построить верное условное ветвление
// let value2 = 58 + "Фрилансер";
// if (написать ответ) {
//     console.log('Результат выражения NaN');
// }

// let value2 = 58 + "Фрилансер";
// if (value2 == NaN) {
//     console.log(isNaN(value2));
// }


//Задача 4 Найти максимальное число из 10,58,39,-150,0
console.log(Math.max(10, 58, 39, -150, 0));



//Задача 5 Округлить число 58.858 до числа 58
let num1 = 58.858;
console.log(Math.floor(num1));



//Задача 6 Верна ли запись?
//Должно быть "Привет! Я фрилансер"
let fls = "Фрилансер";
let text = 'Привет! Я +  ${fls}' ;
console.log(text);



let fls1 = "Фрилансер";
let text1 = `Привет! Я ${fls1}` ;
console.log(text1);


//Задача 7 Получить символ "н" строки:
let text2 = 'Фрилансер';
console.log(text2);
console.log(text2[5]);




//Задача 8 Верно? Ожидаем 579
let text3 = 123 + "456";
console.log(text3);





//Задача 9 Получить строку в верхнем регистре
let text4 = 'Фрилансер';
console.log(text4);

let text44 = 'Freelancer';
console.log(text44.toUpperCase());



//Задача 10 Получить подстроку "лан"
let text5 = 'Фрилансер';
console.log(text5);
console.log(text5.slice(3, 6));




//Задача 11 true or false? 
let text6 = 'Фрилансер';
console.log(text6.includes('лан', 4)); // false


let text7 = 'Фрилансер';
console.log(text7.includes('лан', 3)); // Начало с 3 будет true

//Если я правильно понял что тут требуется




