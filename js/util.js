// Функция, для генерирования случайного дробного числа в заданном диапазоне
const getRandomNumber = (min, max, precision) => {
  // Проверяем данные на валидность
  if (max <= min || max < 0 || min < 0) {
    throw new Error('Ожидается max > min, min, max > 0');
  }
  // генерация случайного числа
  return (Math.random() * (max - min + 1) + min).toFixed(precision);
};

// Переиспользуем функцию
const getRandomInt = (min, max) => getRandomNumber(min, max, 0);

// Функция для генерирования слачайного элемента из массива
const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

// Функция для генерирования случайного массива из массива :)
const getRandomArray = (array) => array.slice(getRandomInt(0, array.length - 1));

const debounce = (callback, timeout) => {
  let timeoutId;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, timeout);
  };
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {getRandomNumber, getRandomInt, getRandomArrayElement, getRandomArray, isEscEvent, debounce};
