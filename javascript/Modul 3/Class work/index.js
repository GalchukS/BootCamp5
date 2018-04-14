// Масив способо сохранения информации в виде колекции.
// Есть два способа создания масива.

// let arr = [];
// let a = new Array();

// let firstArray = [1,2,3];
// let secondaryArry = [5,6,7,8];
// console.log(firstArray, secondaryArry);

// let firstArray = [1,2,3];
// console.log(firstArray.length);/* длина масива*/
// console.log(firstArray[0]);
// console.log(firstArray[2]);
// console.log(firstArray[3]);
// let arr = [1,2,3,[5,6]];
// console.log(arr[3][2]);

// let firstAray = [1,2,3];
// firstAray[1] = 100;
// firstAray[3] = 6;
// firstAray[6]=25;
// console.log(firstAray);


 // push

// let firstArray = [1,2,3];
// firstArray[3] = 6;
// firstArray.push(10);
// console.log(firstArray);

// pop

// let firstArray = [1,2,3];
// let Del = firstArray.pop()
// console.log(Del);
// console.log(firstArray);

// shift

// let firstArray = [1,2,3,4];
// console.log(firstArray.shift());
// console.log(firstArray);

// unshift

// let firstArray = [1,2,3,4];
// firstArray.unshift(27);
// console.log(firstArray);

// indexOf - порядковый номер в масиве

//  let firstArray = [1,2,3,4];
// console.log(firstArray.indexOf(4));

// includes - проверяет наличие элемента

// let firstArray = [1,2,3,4];
// console.log(firstArray.includes(2));

// let users = ['Jon', 'Frank', 'Mick'];
// let newUser = prompt('Enter name')
// console.log(users.includes(newUser));

// Метод Splice

// let firstArray = [10,8,7,5];
// let newArr = firstArray.splice(1,2);
// console.log(newArr);
// console.log(firstArray);

// Метод Slice

// let firstArray = [10,8,7,5];
// let newArr = firstArray.slice(1,3);
// console.log(newArr);
// console.log(firstArray);

// Вгадати тварину загадану компютером
// компютер загадує випадкову тварину з списку
// просить користувача ввести свій варіант
// відбувається перевірка значень компютера і користувача
// Виводить через alert результат, вгадав чи не вгадав. якщо не вгадав тоді додатково показує що було загадано.

// let animals = ["cat","dog","rabbit","bird","fish", "ebanashka", "skatina"];
// let number = Math.floor(Math.random()*animals.length);
// let animalsRandom = animals[number];
// console.log(animalsRandom);
// console.log(number);
// let user = prompt('Введите свой вариант животного');
// if (user === animalsRandom) {
//     alert('Ты урод, но везучий')
// }
// else{
//     alert('WTF?')
// }
// user === animalsRandom ? alert('Ты урод, но везучий') : alert('WTF?');
// var ans=prompt('Name a vegetable that is green on the outside and  white on the inside. It starts with C.','answer');
// if(ans=='Cucumber')
//     alert('Congratulations, answer is right!');
// else
//     alert('Wrong answer');
// alert('Game over');
// var count=0;
// var ans=prompt('Name a vegetable that is green on the outside and  white on the inside. It starts with C.','answer');
// if(ans=='Cucumber')
//     count=count+1;
// ans=prompt('Name a tiny, round green vegetable that grows in pods. It starts with P. Children like it.','answer');
// if(ans=='Peas')
//     count=count+1;
// ans=prompt('What goes up when the rain comes down?','answer');
// if(ans=='Umbrella')
//     count=count+1;
// ans=prompt('I am purple, yellow, red,/and green./The King cannot reach me and neither can the Queen./I show my colours after the rain,/And only when the sun comes out again.','answer');
// if(ans=='Rainbow')
//     count=count+1;
// alert('Count of right answers:'+count);
// alert('Game over');

// let quotes = ['Почніть робити те, що потрібно. Потім робіть те, що можливо. І ви раптом виявите, що робите неможливе. – Св.Франциск Асізський','Ніщо не є більш обтяжливим для мудрої людини і ніщо не доставляє йому більшого занепокоєння, ніж необхідність витрачати на дрібниці і непотрібні речі більше часу, ніж вони того заслуговують. – Платон', 'Кращий спосіб почати робити – перестати говорити і почати робити. – Уолт Дісней', 'Ваш час обмежений, не витрачайте його, проживаючи чуже життя. Не попадайтеся на гачок віровчення, яке існує на уявленнях інших людей. Не дозволяйте поглядам інших заглушати свій власний внутрішній голос. І дуже важливо мати мужність слідувати своєму серцю та інтуїції. Вони, так чи інакше, вже знають, що ви дійсно хочете зробити. Все інше – другорядне. – Стів Джобс','Ваш мозок може все. Абсолютно все. Головне, переконати себе в цьому. Руки не знають, що вони не вміють віджиматися, ноги не знають, що вони слабкі. Це знає ваш мозок. Переконавши себе в тому, що ви можете все, ви зможете дійсно все. – Роберт Кіосакі', 'Ви отримуєте від життя лише те, що наважуєтеся попросити. Не бійтеся підвищувати планку. – Опра Уїнфрі', 'Щаслива людина занадто задоволена сьогоденням, щоб занадто багато думати про майбутнє. – Альберт Эйнштейн','Іноді щось може йти не так, як хотілося-б, але ви не повинні зупинятися. – Майкл Джордан','Будь собою, інші ролі зайняті. – Оскар Уайльд'];
// alert(quotes[Math.floor(Math.random()*quotes.length)]);
// const iterable = 'javascript';
//
// for (const value of iterable) {
//     console.log(value);
// }

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
//  let empty = [];
//
//  for(let i = 0; i < 3; i++){
//      for(let = 1; a < 4;a++){
//
//  }
//      empty.push([])
// console.log(empty);


// let password = 'qwerty1234';
// let question = prompt('Enter your password');
// for(let i = 0, n = 3; i < 3; i++) {
//
//     if (password !== question && n !== 0) {
//         --n;
//         if( n === 0){
//             alert('Your account have been blocked.');
//             break;
//         }
//         alert(`Wrong pass, u have ${n} attempts`)
//     }
//     else if (password === question) {
//         alert('U are welcome');
//         break;
//     }
// }

    // }else if (password !== pass)
    //     alert('Wrong pass, u have n attempts');

// const string = "May the force be with you";
// let arr = string.split(' ');
// let result = arr[0];
//
// for (let i = 0; i < arr.length; i++){
//     if(arr[i].length > result.length) {
//         result = arr[i];
//     }
// }
//
// console.log(result);

// const numbers = [12, 15, 25, 37, 41];
// let num = +prompt('Введите цифру между 12 и 41');
// console.log(typeof num);
// let type = (typeof num);
// console.log(type);
// if (num !== num) {
//     alert('not a number')
// } else  {
//     for (let i of numbers){
//         if(i === num){
//             alert('Поздравляем, Вы угадали!');w
//         }
//         else {
//             alert('U are wrong!!!')
//             break
//         }
//     }
// }
/*
  Напишите цикл, который предлагает, через prompt,
  ввести число, большее 100.

  Если посетитель ввёл другое число –
  попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо
  посетитель не введёт число, большее 100,
  либо не нажмёт кнопку Cancel.


// let number = +prompt('Введіть число більше за 100') ;
// let result = 0;
//
// for (let i = 0; i <= Infinity; i++) {
//
//     if (number >= 100) {
//         alert('Ви ввели нормальне число');
//         break;
//     }
//
//     else {
//
//         number = +prompt('Введіть число більше за 100');
//
//     }
// }


*/

// let writeNumber = prompt('Введите число больше 100');
// for( let i of writeNumber )


// }
// if (writeNumber <= 100){
//     prompt('Введите число больше 100')
// }
//
// let number = prompt('Введіть число більше за 100') ;
// for (let i = 0; i <= Infinity; i++) {
//
//     if (number >= 100) {
//         alert('Ви ввели нормальне число');
//         break;
//     }
//     else if (number === null){
//         break
//     }
//     else {
//         number = prompt('Введіть число більше за 100');
//     }
// }


let arr = [];
let sum = 0;
for (let i = 0; i < Infinity; i++){
    let number = prompt('Enter number');
    if(number === "" || isNaN(number) || number === null){
        for( let item of arr){
            sum += +item;
        }
        break;
    }
    arr.push(number)
}
console.log(sum);
