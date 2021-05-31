// Функция, для генерирования случайного дробного числа в заданном диапозоне
const getRandomNumber = function (min, max, precision) {
  const num = Math.pow(10, precision);
  // Проверяем данные на валидность
  if (max <= min || max < 0 || min < 0) {
    throw new Error('Ожидается max > min, min, max > 0');
  }
  // генерация случайного числа
  return ~~((Math.random() * (max - min) + min) * num) / num;
};

const getRandomInt = function (min, max) {
  // Переиспользуем функцию
  getRandomNumber(min, max, 1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomNumber(1.1, 1.2, 2);
getRandomInt(1, 3);
