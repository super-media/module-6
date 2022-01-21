/*Задание 2.

Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, 
является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, 
то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
*/

function getSimpleNumber() { // Объявляем функцию
  let inputNumber = prompt("Введите пожалуйста число: ");
  inputNumber = +inputNumber;
  if (inputNumber > 1000) {
    alert(`Число больше 1000, проверка невозможна.`)
  } else if (inputNumber < 2 ) {
    alert(`Число меньше 2, проверка невозможна.`)
  } else {
    let simpleTest = true;
    for (let i = 2; i < inputNumber; i++) {  //Определение является ли число простым
	    if (inputNumber % i == 0)
      simpleTest = false      
        } if (simpleTest == true) 
        {alert(`Число ${inputNumber} простое.`)
        } else {alert(`Число ${inputNumber} сложное.`)}
  }
}
getSimpleNumber(); // Вызываем функцию