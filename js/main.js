// Функция, для генерирования случайного целого числа в заданном диапозоне
const ERROR = new Error('Введите корректные данные');
function getRandomNumber(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  // Проверяем данные на валидность
  if (min >= 0 && max >= 0, min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    throw ERROR;
  }
}

getRandomNumber(1, 100);

// Функция, для генерирования случайного дробного числа в заданном диапозоне

function getRandomFractionalNumber(min, max, afterPoint) {
  min = Math.floor(min);
  max = Math.ceil(max);
  const NUM = Math.pow(10, afterPoint);
  // Проверяем данные на валидность
  if (min >= 0 && max >= 0, min <= max) {
    return ~~((Math.random() * (max - min + 1) + min) * NUM) / NUM;
  } else {
    throw ERROR;
  }
}

getRandomFractionalNumber(1, 100, 3);
