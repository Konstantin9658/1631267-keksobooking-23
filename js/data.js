// Я правильно понимаю, что это на больше не нужно?

// import {getRandomNumber, getRandomInt, getRandomArrayElement, getRandomArray} from './util.js';

// const PHOTOS = [
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
// ];
// const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
// const CHECKINS = ['12:00', '13:00', '14:00'];
// const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];


// const generateAdvert  = () => {
//   const checkin = getRandomArrayElement(CHECKINS);
//   const ratio = getRandomInt(1, 3);
//   const location = {
//     lat: getRandomNumber(35.65, 35.7, 5),
//     lng: getRandomNumber(139.7, 139.8, 5),
//   };
//   return {
//     author: {
//       avatar: `img/avatars/user0${getRandomInt(1, 8)}.png`,
//     },
//     offer: {
//       title: 'Милая, уютная квартирка в центре Токио',
//       address: `${location.lng}, ${location.lat}`,
//       price: getRandomInt(0, 10000),
//       type: getRandomArrayElement(TYPES),
//       rooms: ratio,
//       guests: ratio,
//       checkin: checkin,
//       checkout: checkin,
//       features: getRandomArray(FEATURES),
//       description: 'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.',
//       photos: getRandomArray(PHOTOS),
//     },
//     location: {
//       lat: location.lat,
//       lng: location.lng,
//     },
//   };
// };

// export {generateAdvert};
