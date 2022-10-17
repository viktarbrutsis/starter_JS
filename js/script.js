'use strict';

loop_1: for (let i = 1; i < 4; i++) {
    console.log(`First level: ${i}`);
    for (let j = 1; j < 4; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 1; k < 4; k++) {
            if (k === 3) continue loop_1;
            console.log(`Third level: ${k}`);
        }
    }
}
for (let k = 2; k <= 10; k++) {
    if (k%2 === 0) {
        console.log(k);
    }
}
let l = 2;
while (l <= 10) {
        if (l%2 === 0) {
            console.log(l);
        }
        l++;
    }
let arrayOfNumbers = [];
for (let i = 5; i <= 10; i++)  {
    arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for ( let i = 0; i < data.length; i++) {
//     result[i] = data[data.length - 1 - i];
// }
// console.log(result);

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let o = 0, o < arr.length; o++) {
//         result[o] = arr[o];
//     }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let j = 0; j < data.length; j++) {
//     if (typeof(data[j]) == 'string') {
//         data[j] = data[j] + ' -done';
//     } else {
//         data[j] = data[j] * 2;
//     }
// }
// console.log(data);

// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//         }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//         }
//     result += "\n";
// }
// console.log(result);

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания
// let val = 7;
// function createAdder() {
//     function addNumbers(a, b) {
//     let ret = a + b;
//     //return ret;
//     }
//     return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val, 8);
// console.log('example of function returning a function: ', sum);

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;// объявили переменную локально то есть внутри функции 
// }
// showFirstMessage('Hello World!!!');
// console.log(num);// 20 так как локальная переменная не видна

//  function ret() {
//     let num = 50;
//     return num;
//  }
//  const number = ret();
//  console.log(number);

// const calc = (a, b) => a + b;

// const usdCurr = 28;
// const discount = 0.9;

// function convert (amount, rate) {
//     return amount * rate;
// }
// function promotion (result) {
//     console.log(result * discount);
// } 

// const res = convert(500, usdCurr);
// promotion(res);
function getMathResult (a, b) {
    if (b <= 0 || typeof(b) !== 'number') {
        return a;
    }
        else {
            let str = '';
            for (let i = 1; i <= b; i++) {
                if ( i === b) {
                    str = str + a * i;
                } else {
                    str = str + a * i + '---';
                }
               
            }
            return str;
        }
    }
    console.log(getMathResult(4, 5));


    function readNumber() {
        let num;
      
        do {
          num = prompt("Введите число", 0);
        } while ( !isFinite(num) );
      
        if (num === null || num === '') return null;
      
        return +num;
      }
      
      alert(`Число: ${readNumber()}`);
      
