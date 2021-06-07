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
const GET_RANDOM_ARRAY_ELEMENT = function (array) {
  return array[getRandomInt(0, array.length - 1)];
};
// Функция для генерирования случайного массива из массива :)
// Вообще у меня закрадывается сомнения в правильности решения
// Он иногда почему то вообще выдает пустой массив, с чем это связано?
const GET_RANDOM_ARRAY = function (array) {
  return array.slice(0, getRandomInt(0, array.length - 1));
};

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKIN = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const placeAdvert  = function () {
  const LOCATION = {
    lat: getRandomNumber(35.65, 35.7, 5),
    lng: getRandomNumber(139.7, 139.8, 5),
  };
  return {
    author: {
      avatar:  `img/avatars/user${  getRandomInt(1, 8)   }.png`,
    },
    offer: {
      title: 'Почему другие используют Кексобукинг, а Вы — нет?',
      address: `${LOCATION.lng  }, ${  LOCATION.lat}`,
      price: getRandomInt(0, 100000),
      type: GET_RANDOM_ARRAY_ELEMENT(TYPE),//Нужно отдельно создать массив, в котором будут данные palace, flat, house, bungalow или hotel,
      // который при вызове этого массива генерировал случайные данные или как?
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 10),
      checkin: GET_RANDOM_ARRAY_ELEMENT(CHECKIN),
      checkout: GET_RANDOM_ARRAY_ELEMENT(CHECKIN),
      features: GET_RANDOM_ARRAY(FEATURES),
      description: 'Сдаётся номер',
      photos: GET_RANDOM_ARRAY(PHOTOS),
    },
    location: {
      LOCATION,
    },
  };
};

// eslint-disable-next-line no-unused-vars
const similarAdvert = new Array(10).fill(null).map(() => placeAdvert());
