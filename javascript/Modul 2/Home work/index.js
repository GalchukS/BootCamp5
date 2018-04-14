/*
   Есть три курорта: taba, sharm или hurgada.

   Необходимо через prompt попросить ввести число, от 1 до 3-х.

   В тексте prompt необходимо написать какое число соотвествует
   какому курорту, на ваш выбор.

   После этого вывести сообщение о том, что пользователь
   выбрал такой-то курорт или сообщение о том, что введено
   число, варианта курорта для которого не было.
*/

// let taba, sharm, hugarda;
// taba = 1;
// sharm = 2;
// hugarda = 3;
//  let resort = prompt('Taba-1 Sharm-2 Hugarda-3')
// console.log(resort);
//  let taba = 1;
//  let sharm = 2;
//  let  hugarda = 3;
//  switch (yourChoise) {
//      case 1:
//          document.write('taba');
//      case 2:
//          document.write('sharm');
//      case 3:
//          document.write('hugarda')
//  }
// let numResort = +prompt('enter number from 1 to 3 (1-taba; 2-sharm; 3-hurgada)');
// if (numResort === 1){
//     alert('You chose a resort Taba');
// }
// else if (numResort === 2){
//     alert('You chose a resort Sharm');
// }
// else if (numResort === 3){
//     alert('You chose a resort Hurgada');
// }
// else {
//     alert('ERROR resort under this number is not');
// }

// let resort = +prompt('Enter number of your choise (1-Taba; 2-Sharm; 3-Hugarda)');
// if (resort === 1){
//     alert('Your choice is Taba');
// }
// else if (resort === 2){
//     alert('Your choice is Sharm');
// }
// else if (resort === 3){
//     alert('Your choice is Hugarda');
// }
// else{
//     alert('What\'s wrong with u? U have only three options');
// }

/*
  Пользователь через prompt вводит число участников группы.
  Необходимо проверить является ли введенные данные целым
  положительным числом. Вывести alert в случае ошибочного ввода.

  Всего имеется три группы sharm, hurgada и taba.
  В группах ограничено кол-во свободных мест:
    sharm - 15
    hurgada - 25
    taba - 6

  Если количество мест позволяет, то вывести пользователю
  сообщение через confirm что есть место в группе такой-то,
  согласен ли пользоваетель быть в этой группе?

  Если ответ ok, уменьшаем число свободных мест на  число участников группы.
  Если ответ нет, предлагаем следующую группу со свободными местами.

  Если мест нигде нет, выводим сообщение alert('Мест нет!')
*/

let numOfParticipant = +prompt('Enter number of Participants');
let numTaba = 6;
let numSharm = 15;
let numHugarda = 25;
let confirmCheck;
if(typeof numOfParticipant !==`number` ||  numOfParticipant < 1 || Number.isInteger(numOfParticipant) === false) {
    alert('You insert wrong data');
}
else if(numOfParticipant <= 6)
{
    confirmCheck = confirm('Do u wanna hotel Taba?');
    if (confirmCheck === true) {
        numTaba = numTaba - numOfParticipant;
        console.log(numTaba);
    }
    else if (confirmCheck === false) {
        confirmCheck = confirm('Do u wanna hotel Sharm?');
        if (confirmCheck === true) {
            numSharm = numSharm - numOfParticipant;
            console.log(numSharm);
        }
        else if (confirmCheck === false) {
            confirmCheck = confirm('Do u wanna Hugarda?');
            numHugarda = numHugarda - numOfParticipant;
            console.log(numHugarda);
        }
    }
}
    else if (numOfParticipant > 6 && numOfParticipant <= 15) {
    confirmCheck = confirm('Do u wanna hotel Sharm?');
    if (confirmCheck === true) {
        numSharm = numSharm - numOfParticipant;
        console.log(numSharm);
    }
    else if (confirmCheck === false) {
        confirmCheck = confirm('Do u wanna Hugarda?');
        numHugarda = numHugarda - numOfParticipant;
        console.log(numHugarda);
    }
}
else if (numOfParticipant > 15 && numOfParticipant <= 25)
{
    confirmCheck = confirm('Do u wanna Hugarda?');
    numHugarda = numHugarda - numOfParticipant;
    console.log(numHugarda);
}
else if (numOfParticipant > 25)
{
    alert('No Vacancy');
}



// task1
// let a = +prompt('enter')
// if (a === 10){
//     document.write('Верно');
// }else {
//     document.write('Неверно')
// }

// task2

// let min = +prompt('Введите число от 0 до 59');
// if (min <= 15 && min >= 0) {
//     document.write('Первая чверть часа');
// }
// else if (min <= 30 && min >= 16) {
//     document.write('Вторая чверть часа');
// }
// else if (min <= 45 && min >= 31) {
//     document.write('Третья чверть часа');
// }
// else if (min <= 59 && min >= 46) {
//     document.write('Четверта чверть часа');
// }
// else {
//     document.write('Число не соответствует доступным');
// }

// task3



