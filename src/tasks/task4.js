/**
 * @param {string} word - Слово для проверки 
 * @returns {boolean} - Итог проверки
 * @description Проверка слова на палиндром
 */
export function isPalindrome(word) {
    if (word === null) {
        throw new Error("Пользователь отменил ввод");
    }
    if (typeof word !== 'string') {
        throw new Error("Некорректные входные данные");
    }
    
    const trimmed = word.trim();
    if (trimmed.length === 0) {
        throw new Error("Некорректные входные данные");
    }
    if (trimmed.includes(' ')) {
        throw new Error("Введено несколько слов");
    }
    if (!/^[а-яА-Яa-zA-Z]+$/.test(word)) {
        throw new Error("Некорректные входные данные");
    }
    
    if (trimmed.length === 1) return `${trimmed} - не палиндром`;

  const normalizedWord = word.toLowerCase(); //к нижнему

  const reversedWord = normalizedWord.split("").reverse().join(""); //разбивает, переворачивает, объединяет

  return normalizedWord === reversedWord
    ? `${word} - палиндром`
    : `${word} - не палиндром`;
}
