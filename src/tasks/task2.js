/**
 * @param {string} userInput - Число
 * @returns {string} Строка с перечислением кратных трём
 * @description Формирование строки с перечислением чисел
 * от 1 до userInput, кратных трём, через запятую с пробелом
 */
export function getMultiplesOfThree(userInput) {
if(userInput === null) {
  throw new Error("Пользователь отменил ввод") 
} 
const number = Number(userInput)  
if (isNaN(number)) {
  throw new Error("Некорректные входные данные") 
}
let result = [];  
for(let i = 1; i <= number; i++) {   
  if(i % 3 === 0){             
    result.push(i)                 
  }
}

  return result.join(", ");           
}
