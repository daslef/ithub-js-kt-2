/**
 * @param {string} height - Высота лесенки
 * @returns {string} Строка с отображением лесенки
 * @description Формирование строки с лесенкой заданной длины
 */
export function renderLadder(height) {
  if (height === null) {
    throw new Error("Пользователь отменил ввод");
  } 

  const h = Number(height);
  if (isNaN(h) || h < 0 || !Number.isInteger(h)) {   
  throw new Error("Некорректные входные данные") 
}
if (h === 0) {
  return ""       
}


  let result = ""; 
  for (let i = 1; i <= h; i++) { 
  for(let j = 1; j <= i; j++){       
  result += j 
  }          
  result += "\n"      
} 
return result.trim()        
}