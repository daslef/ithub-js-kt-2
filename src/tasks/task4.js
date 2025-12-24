/**
 * @param {string} word - Слово для проверки 
 * @returns {boolean} - Итог проверки
 * @description Проверка слова на палиндром
 */
export function isPalindrome(word) {
    if (word === null) {
      throw new Error("Некорректное слово");
    }
  
    const normalized = word.toLowerCase(); 
    const reversed = normalized.split('').reverse().join(''); 
  
    const result = normalized === reversed;

    return result;
  }