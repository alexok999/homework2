// "use strict";
// //Задача 1 Получить верное значение округления 
// let numOne = Math.round(1.005 * 100) / 100;
// console.log(numOne);



// let numOne2 = Math.ceil(1.005 * 100) / 100;
// console.log(numOne2);

// // let numOne3 = Math.ceil(1.005 * 100) / 100;
// // console.log(numOne3.toFixed(2));

// // Как я понял 1.01 должно получится при результате 1.005. В других случаях если округлять до целого будет 1.

// //1234git
// //Задача 2 Получить число 135.58
// let value = "135.58px";
// console.log(value);

// let value22 = "135.58px";
// console.log(parseFloat(value22));

// //Задача 3 Построить верное условное ветвление
// // let value2 = 58 - "Фрилансер";
// // if (написать ответ) {
// //     console.log('Результат выражения NaN');
// // }

// let value2 = 58 - "Фрилансер";
// if (isNaN(value2)) {
//     console.log('Результат выражения NaN');
// }


// //Задача 4 Найти максимальное число из 10,58,39,-150,0
// console.log(Math.max(10, 58, 39, -150, 0));



// //Задача 5 Округлить число 58.858 до числа 58
// let num1 = 58.858;
// console.log(Math.floor(num1));



// //Задача 6 Верна ли запись?
// //Должно быть "Привет! Я фрилансер"
// let fls = "Фрилансер";
// let text = 'Привет! Я +  ${fls}' ;
// console.log(text);



// let fls1 = "Фрилансер";
// let text1 = `Привет! Я ${fls1}` ;
// console.log(text1);


// //Задача 7 Получить символ "н" строки:
// let text2 = 'Фрилансер';
// console.log(text2);
// console.log(text2[5]);




// //Задача 8 Верно? Ожидаем 579
// let text3 = 123 + "456";
// console.log(text3);





// //Задача 9 Получить строку в верхнем регистре
// let text4 = 'Фрилансер';
// console.log(text4);

// let text44 = 'Freelancer';
// console.log(text44.toUpperCase());



// //Задача 10 Получить подстроку "лан"
// let text5 = 'Фрилансер';
// console.log(text5);
// console.log(text5.slice(3, 6));




// //Задача 11 true or false? 
// let text6 = 'Фрилансер';
// console.log(text6.includes('лан', 4)); // false


// let text7 = 'Фрилансер';
// console.log(text7.includes('лан', 3)); // Начало с 3 будет true

// //Если я правильно понял что тут требуется


//Functions
// function declaration 
//function exspression
// arrow functions


// Состояние функций - Анонимная, колбек функция, функция конструктор, функция высшего порядка

//func declaration - стандартная функция
function sayhi(){
    console.log('hi');
}
sayhi();






//Объявляемые функции "всплывающие"
// Функциональные выражение (function expression)
// Именованные функциональные выражения named func expression)
//Стрелочный функции появились в ES6 - краткий синтксис, отсутствие псевдомассива arguments...
// Анонимные функции - все те , у которых нет имени . Как правильно используются как стрелочные callbak-функции



////// Function declaration


// function saveFile() {
//     console.log('hi')
// }

// saveFile(); // вызов функции



// function sayHiByName(name = 'default name', surname = 'default surname') {
//     console.log(name);
//     console.log(surname);
// }

// sayHiByName('Alex', 'Olishevskyi'); // если не передать surname будет undefined



// function calcSum(a, b){
//     console.log(`Sum is ${a + b}`);
// }

// calcSum(1, 2);



// function getSum(a, b){
//     return a + b;  // любой код который написан ниже return не выполняется
// }

// getSum(1, 3);
// console.log(getSum(1, 3));



// function text(){

// }
// let a = text();
// console.log(a);


// function test2 (){
//     console.log('first string');
//     newTest();
//     return;
//     function newTest(){
//         console.log('i`m function');
//     }
//     console.log('end of the  string');
// }


// test2();
//только func declaration может всплыть после return, остальные не могут


///// function expression  // не всплывает!


// let newFunc = function(){
//     console.log('im func expression');
// }
// newFunc();



// let calcSum = function(a, b) {
//     return a + b;
// }
// console.log(calcSum(1,2));


// // Стрелочные функции - arrow functions
// // (parameters) => {telo}

// let parametr = (a,b) => a + b;
// console.log(parametr(3,2));

// // {() => {
// //     console.log('test');
// // }};





// function testArguments(...args){
//     console.log(arguments);
//     console.log(args);

// }

// testArguments(1,2,3,4,5,6,7,8,9,0);


// function testHiOrder (sayHiFn, count){
//     for (let i = 0; i < count; i++){
//         sayHiFn();
//     }

// }


// function sayHi(){
//     console.log('Hiii');
// }


// testHiOrder(sayHi, 5);




// // testHiOrder (sayHiFn () => console.log('hii'), 5);



// function sayHello(){
//     console.log('Hi, Alex');
// }

// function getFnSayHiTo(name){
//     return () => console.log('Hi ' + name);
// }

// let sayHiSashaFn = getFnSayHiTo('Alex');

// let sayHiRomaFn = getFnSayHiTo('Roma');
// sayHiSashaFn();
// sayHiRomaFn();







// Замыкание - лексическое окружение (lexical environment)

// let c = 3;
// let d = 4;


// function test3() {
//     let a = 1;
//     let b = 2;
//     console.log(c);
// }
// test3();



// function test5(){
//     let c = 10;
//     test3();

// }

// test5();


let a = 1;
function test() {
    let a = 2;
    console.log(a);
}
test();


function counterFn(){
    let count = 0;
    return function (){
        count++;
        console.log(count);
    }
}

let counter = counterFn();
counter();
counter();
counter();

let counter2 = counterFn();
counter2();
counter2();
counter2();



function calcP(a,b,c){
    return a+b+c;
}
calcP();
function toUpper(symbol){
    console.log(symbol.toUpperCase());
}
function useToUpper(fn, str){
    for (let symbol of str){
        fn(symbol);
    }

    // for(let i = 0; i < str.lenght; i++){
    //     if(str[1] !== ''){
    //         fn(str[i]);
    //     } 
    // }
}

useToUpper(toUpper, 'Some text to upper');