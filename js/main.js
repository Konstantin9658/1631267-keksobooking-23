// Функция, для генерирования случайного дробного числа в заданном диапазоне
const getRandomNumber = function (min, max, precision) {
  // Проверяем данные на валидность
  if (max <= min || max < 0 || min < 0) {
    throw new Error('Ожидается max > min, min, max > 0');
  }
  // генерация случайного числа
  return (Math.random() * (max - min + 1) + min).toFixed(precision);
};

const getRandomInt = function (min, max) {
  // Переиспользуем функцию
  return getRandomNumber(min, max, 0);
};


getRandomInt(1, 190);
getRandomNumber(1.1, 1.2, 2);
