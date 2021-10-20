// 1. Верна ли запись
// const userInfo = {
//     name: 'Вася',
//     age: 30
// };

// 2.что будет в консоле?
let userInfo2 = {
    name: 'Вася',
    age: 30,
    "58": 'Значение свойства'
};
console.log(userInfo2[58]);

// Выведет в консоль  'Значение свойства'


// 3. что будет в консоле?
const userInfo3 = {
    name: 'Вася',
    age: 30
};

let user = userInfo3;
user.age = 45;

console.log(userInfo3.age);

// Переопределили значение age 


// 4.   что будет в консоле?


let userInfo = {
    name: 'Вася',
    age: 30,
    showInfo() {
        console.log(`${this.name}`);
    }
};
let user2 = userInfo;
userInfo = null;
user2.showInfo();

// Выведется имя "Вася"

// 5.   что будет в консоле?

let userInfo5 = {
    name: 'Вася',
    age: 30,
};
for (const key in userInfo5) {
    const value = userInfo5[key];
    console.log(value);
}
// Выведет ключевые значения из объекта userInfo5

// 6.   что будет в консоле?

let userInfo6 = {
    name: 'Вася',
    age: 30,
    address: {
        city : 'Uzgorod',
        street: "kievskaya"
    }
};
for (const key in userInfo6.address) {    
    console.log(userInfo6.address[key]);
}

// Выведет город "Ужгород", так как мы в из обьекта useInfo6 
// берем по ключу address  и выводим все значения address
// при добавлении улицы, она так же выведется


// Задача 7 (Верна ли запись)
// const userInfo7 = {
//     name: 'Вася',
//     age: 30,
//     "likes js": true
// };
// console.log(userInfo7."likes js");


//не верна

const userInfo7 = {
    name: 'Вася',
    age: 30,
    "likes js": false
};
console.log(userInfo7["likes js"]);


// так вроде верна


// Задача 8

let userInfo777 = {
    name: 'Василий',
    age: 30
};

userInfo777.name = 'Леночка';
delete userInfo777.name;

console.log(userInfo777.name);
