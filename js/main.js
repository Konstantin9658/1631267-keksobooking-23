const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

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
// Функция для генерирования слачайного элемента из массива
const getRandomArrayElement = function (array) {
  return array[getRandomInt(0, array.length - 1)];
};
// Функция для генерирования случайного массива из массива :)
const getRandomArray = function (array) {
  return array.slice(0, getRandomInt(0, array.length - 1));
};

const generateAdvert  = function () {
  const choose = getRandomInt(0, 2);// Не знаю правильно ли такое решение?!
  //Я вроде у тебя спросил — ты что то не ответил) По другому никак не получается одно и то же время вытянуть
  const location = {
    lat: getRandomNumber(35.65, 35.7, 5),
    lng: getRandomNumber(139.7, 139.8, 5),
  };
  return {
    author: {
      avatar:  `img/avatars/user0${getRandomInt(1, 8)}.png`,
    },
    offer: {
      title: 'Почему другие используют Кексобукинг, а Вы — нет?',
      address: `${location.lng}, ${location.lat}`,
      price: getRandomInt(0, 100000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(1, 3),
      guests: CHECKINS[choose],
      checkin: CHECKINS[choose],
      checkout: getRandomArrayElement(CHECKINS),
      features: getRandomArray(FEATURES),
      description: 'Сдаётся номер в ',
      photos: getRandomArray(PHOTOS),
    },
    location: {
      location,
    },
  };
};

// eslint-disable-next-line no-unused-vars
const similarAdvert = new Array(10).fill(null).map(() => generateAdvert());


