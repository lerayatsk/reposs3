// Первое д\з

// console.log('Начинаем изучать JS');
// console.log('5' + '+' + '5');  



// Второе д\з

// let a = 3; // месяц рождения
// console.log(a);

// console.log('Добро ' + 'пожаловать ' + 'на курс ' + 'Валерия');

// // alert('19.06.2023')

// let b = 'string';
// console.log(b); // тип данных - строка

// let c = 17;
// console.log(c); // тип данных - nubmer

// console.log(354135146161463656131n) // тип данных - bigint

// console.log(20 > 10); // тип данных - boolean

// let nuller = null;
// console.log(nuller); // тип данных - null

// let d;
// console.log(d); // тип данных - undefined

// document.getElementById('one').innerHTML = 'Hello world';



// Третье д\з

// document.querySelector('#one').innerHTML = '<h1>Это заголовок</h1>'; 

document.querySelector('p').innerHTML = 'Это первый параграф'; 

document.querySelector('#twop').innerHTML = 'Это второй параграф'; 
document.querySelector('#threep').innerHTML = 'Это третий параграф'; 

// document.querySelectorAll('p').innerHTML = 'Это параграф'; // обращение ко всем параграфам

let inp = document.querySelector('.text'); //обращение к классу
let btn = document.querySelector('.check');
let div = document.querySelector('div');

// btn.onclick = function() {
//     console.log('it works');
//     console.log(inp.value); // первый способ вывода в консоль отправленных данных (любой тип)
// }

btn.onclick = function() {
    let e = +inp.value; // выведет только number
    console.log(e); // второй способ вывода в консоль отправленных данных
}

btn.onclick = function() {
    let e = inp.value; 
    div.innerHTML = `<h1>${e}</h2>`; // вывод отправленных данных на странице
}

// let f = prompt('Введите число');
// if (f < 100) {
//  console.log(f);
// } else{
//  div.innerHTML = f;
// }



// ЧЕТВЕРТОЕ Д\З

// let a = prompt('Введите первое число от 0 до 15');
// let b = prompt('Введите второе число от 0 до 15');
// let c = parseInt(a) + parseInt(b); // преобразуем в тип данных number и складываем

// // Первый вариант первого задания
// // if (c < 15 || c == 15) {
// //     console.log('Нет');
// // } else {
// //     console.log('Да');
// // }

// // Второй вариант первого задания
// let answer = c > 15 ? 'Да': 'Нет';
// console.log(answer);


// Второе задание
// let a = prompt('Введите первое значение');
// let b = prompt('Введите второе значение');

// Первый вариант второго задания
// if (a === b) {
//     console.log('Значения переменных равны')
// } else{
//     console.log('Значения переменных различны')
// }

// Второй вариант второго задания
// let result = a === b ? true : false;
// console.log(result);

// Третий вариант второго задания
// console.log(a === b);








// ПЯТОЕ Д\З

// Задание 1

// let i = 1;
// while (i<51) {
//   console.log(i);
//   i++
// }

// for(let i = 1; i < 51; i++) {
//   console.log(i);
// }


// Задание 2

// let b = 50;
// while (b>24) {
//   console.log(b);
//   b--
// }

// for(let b = 50; b > 24; b--) {
//   console.log(b);
// }

// Задание 3

// let c = 2501;
// while (c < 3000) {
//   console.log(c);
//   c+=2;
// }

// for(let c = 2501; c < 3000; c += 2) {
//   console.log(c);
// }









// ШЕСТОЕ Д\З

// Задание 1

// let a = 'Зима';
// let b = prompt('Введите время года');
// switch(b) {
//   case a:
//     alert('Да');
//     break;
//   case 'Весна':
//   case 'Осень':
//   case 'Лето':
//     alert('Нет');
//     break;
//   default:
//     alert('Не сработало');
// }


// Задание 2

// let a = prompt('Введите число от 1 до 12');
// switch(+a) {
//   case 1:
//   case 2:
//     alert('Зима');
//     break;
//   case 3:
//   case 4:
//   case 5:
//     alert('Весна');
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert('Лето');
//     break;
//   case 9:
//   case 10:
//   case 11:
//     alert('Осень');
//     break;
//   default:
//     alert('Мы же попросили ввести число от 1 до 12');
// }


// Задание 3

// let a = null;
// let b = 'Круг';
// let c = 'Квадрат';
// alert(a ?? b ?? c ?? 'Треугольник'); // выведет первое определенное значение - круг








// ШЕСТОЕ Д\З (ФУНКЦИИ)

// Задание 1

// let fun = document.querySelector('.fn');
// let a = 'Функция работает';
// function work () {
//   document.querySelector("div").innerHTML = a;
// };
// fun.onclick = work;




// Задание 2

// ПЕРВЫЙ ВАРИАНТ 

let inp1 = document.querySelector('.number1');
let inp2 = document.querySelector('.number2');
let a = inp1.value;
let b = inp2.value;

let fn1 = document.querySelector('.fn1');
let fn2 = document.querySelector('.fn2');
let fn3 = document.querySelector('.fn3');
let fn4 = document.querySelector('.fn4');
let res = document.querySelector('div');

fn1.onclick = function(a, b) {
  let res1 = (a * b);
  res.innerHTML = res1;
};

fn2.onclick = function(a, b) {
  let res2 = (a / b);
  res.innerHTML = res2;
};

fn3.onclick = function(a, b) {
  let res3 = (a + b);
  res.innerHTML = res3;
};

fn4.onclick = function(a, b) {
  let res4 = (a - b);
  res.innerHTML = res4;
};



// ВТОРОЙ ВАРИАНТ

// let a = Number(prompt('Введите первое число'));
// let b = Number(prompt('Введите второе число'));
// let oper = prompt('Введите знак математического действия + - * /');

// function calc(a, b, oper) {
//   let res;
//   switch(oper) {
//     case '+':
//       res = (a + b);
//     break;
//     case '-':
//       res = (a - b);
//     break;
//     case '*':
//       res = (a * b);
//     break;
//     case '/':
//       res = (a / b);
//       break;
//     default:
//       alert('Повторите попытку');
//   }
//   alert(res);
// }
// calc();

