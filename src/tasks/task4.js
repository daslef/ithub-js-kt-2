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
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed += normalized[i];
  }
  return normalized === reversed;
}