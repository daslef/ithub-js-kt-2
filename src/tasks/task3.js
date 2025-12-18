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

  if (isNaN(h)) {
      throw new Error("Некорректные входные данные");
  }

  if (h !== Math.round(h)) {
      throw new Error("Некорректные входные данные");
  }

  if (h < 0) {
      throw new Error("Некорректные входные данные");
  }

  if (h === 0) {
      return "";
  }

  if (h === 1) {
      return "1";
  }

  let result = "";

  for (let i = 1; i <= h; i++) {
      for (let j = 1; j <= i; j++) {
          result += j;
      }
      result += `\n`;
  }

  let i = 0;
  let a = "";
  while (i < result.length - 1) {
      o += result[i];
      i++;
  }
  result = a;

  return result;
}
