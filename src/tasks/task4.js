export function isPalindrome(word) {
    if (word === null) {
        throw new Error("Пользователь отменил ввод");
    }
    
    if (typeof word !== "string" || /[^а-яА-ЯЁёa-zA-Z\s]/.test(word)) {
        throw new Error("Некорректные входные данные"); 
    }

    const trimmedWord = word.trim();
    if (trimmedWord.split(" ").length > 1) {
        throw new Error("Введено несколько слов"); 
    }

    const cleanedWord = trimmedWord.toLowerCase().replace(/\s+/g, '');
    const length = cleanedWord.length;

    if (length === 0) {
        throw new Error("Некорректные входные данные");
    }

    if (length === 1) {
        return `${word} - не палиндром`;
    }

    let left = 0;
    let right = length - 1;

    while (left < right) {
        if (cleanedWord[left] !== cleanedWord[right]) {
            return `${word} - не палиндром`;
        }
        left++;
        right--;
    }

    return `${word} - палиндром`;
}