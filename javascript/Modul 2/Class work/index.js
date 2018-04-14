// Если нам нужно ввести апостроф в текст файла JS, тогда перед ним нужно ввести обратный слэш.
// let a = 'Моє ім\'я';
// console.log(a);
// let a = 'sdfsfsdf;\\.';
// console.log(a);

// В JS есть несколько знаков сравнения (>, <, >=, <=)
// console.log(1 < 2);
// console.log(1 > 2);
// console.log(5 >= 1 + 4);
// console.log(5 >= 2 + 4);

// Варианты сравнения
// let a = 1;
// let b = 1;
// console.log(a = b);
// console.log(a == b); сравнивает по значению
// console.log(a === b); сравнивает по типу потом по значению

// let a = 1;
// let b = 2;
// console.log(a !== b); сравнивает по типу
// console.log(a != b); сравнивает по значению и типу
// знак восклицания это 'Не равно'
// console.log(!true); - false

// let a = Nan,
// b = Nan;
// console.log(a == b); //- false

// let a = null,
//     b = null;
// console.log(a == b);
// console.log(a === b);

// let a = 'H';
// let b = 'h';
// console.log(a == b);
// console.log(a === b);

// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(''));
// console.log(Boolean('f'));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean('add'));
// console.log(Boolean(Infinity));
// console.log(Boolean(-0));
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean(1));
// console.log(Boolean.({}));

// Существует всего 7 типов false
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(-0));
// console.log(Boolean(false));

// логичные операторы
// AND - &&
// OR - ||

// console.log(1 || 2 || '0'); выведет результат первого true, если не находит, использует последний элемент
// console.log('a' && 1 && 0); выводит первый false либо, если false нет, выведет последний true

// Контролирующие структуры
// if
// else
// let turn = prompt("Хочешь выебать Иру ?")
//
// if (turn === 'да'){
//     document.write("Еби");
// } else{
//     document.write("Дрочи");
// }

// Написать код который показывает время года в зависимости от номера месяца который мы ввели.

// 1. Написать код который попросить юзера ввести номер месяца.
// 2. Написать проверку котрая ввыедет на экран "зима" если юзер ввел числа 12 или 1 ли 2
// 3. весна когда 3 або 4 або 5
// 4. лето когда 6 або 7 або 8
// 5. осень когда 9 або 10 або 11
// 6. Проверить на ошибки

// let month = prompt("Введи номер месяца");
// if (month == 12 || month === 1 || month === 2);
// {
//     console.log('Зима');
// }

// Другой способ записи IF, Else - switch

// let luckyNumber = 8;
//
// switch (luckyNumber) {
//     case 1:
//         console.log('it is one');
//         break;
//     case 8:
//         console.log('this is 8');
//         break;
//     case 7:
//         console.log('You win');
//         break;
//     default:
//         console.log('error');
//         break;
// }

// // Тернанрный оператор
// let result = a === b ? 'true' : 'false';
// console.log(result);

// let test =  5 < 6 ? 'Evrika' : 'to bad';
// console.log(test);

// Пользователь вводит цвет, либо черный либо белый. Если пользователь вводит белый цвет то день, все остальное ночь.

// let color = prompt('Enter color');
//
// let result = color === 'white' ? "day" : 'night';
// console.log(result);

// Math.random	Псевдослучайное число в диапазоне [0, 1), т.е. включая 0, но исключая 1.
// console.log(Math.floor(Math.random()*10)+1);
// console.log(Math.ceil(5.9999));
// console.log(Math.floor(5.99999));
// console.log(Math.round(5.999));
// console.log(Math.round(5.53));
// Math.max(a, b, c)	Возвращает наибольшее из чисел, перечисленных через запятую в круглых скобках (наибольший аргумент)
// Math.min(a, b, c)	Возвращает наименьшее из чисел, перечисленных через запятую в круглых скобках (наименьший аргумент)
// Math.ceil(0.5)	Округление вверх: 1
// Math.floor(0.5)	Округление вниз: 0. Используется для точного распредления Math.random()
// Math.round(0.5)	Округление до ближайшего целого: 1
// Math.(base, exponent)	возведение числа base в степень exponent
// Math.PI	число π: 3.14...
// Math.pow,
// Math.sqrt.

// let year = +prompt('Please insert year of your birth');
// if(year < 0){
//     alert('U are stupid whore!!!')
// }else{
//     let century = (year + 1) / 100;
//     alert(Math.ceil(century));
// }