/**
 * @param {string | null} word - Слово для проверки
 * @returns {string} - Итог проверки
 * @description Проверка слова на палиндром
 */
export function isPalindrome(word) {
  if (word === null) {
      return "Ввод отменен.";
  }

  const str = word;

  if (str.length <= 1) { 
      return `${word} - не палиндром`;
  }

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
      if (str[left] !== str[right]) {
          return `${word} - не палиндром`;
      }
      left++;
      right--;
  }

  return `${word} - палиндром`;
}
