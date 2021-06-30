const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_NUMBER_OF_ROOMS = 100;
const NOT_FOR_GUESTS = 0;
const MIN_PRICE = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000',
};
const form = document.querySelector('.ad-form');
// const elementsForm = form.querySelectorAll('.ad-form__element');
const titleField = form.querySelector('#title');
const addressField = form.querySelector('#address');
const typeField = form.querySelector('#type');
const priceField = form.querySelector('#price');
const checkinField = form.querySelector('#timein');
const checkoutField= form.querySelector('#timeout');
const timeField = form.querySelector('.ad-form__element--time');
const roomsField = form.querySelector('#room_number');
const guestsField = form.querySelector('#capacity');

const validateRoomsAndGuests = () => {
  const roomsSelected = parseInt(roomsField.value, 10);
  const guestsSelected = parseInt(guestsField.value, 10);

  if (roomsSelected === MAX_NUMBER_OF_ROOMS && guestsSelected !== NOT_FOR_GUESTS) {
    guestsField.setCustomValidity(`Помещение на ${MAX_NUMBER_OF_ROOMS} комнат — не для гостей`);
  } else if (roomsSelected !== MAX_NUMBER_OF_ROOMS && guestsSelected === NOT_FOR_GUESTS) {
    guestsField.setCustomValidity('Помещение как минимум для одного гостя');
  }  else if (guestsSelected > roomsSelected) {
    guestsField.setCustomValidity('Гостей не может быть больше чем комнат');
  } else {
    guestsField.setCustomValidity('');
  }
  guestsField.reportValidity();
};

// Линт ругается на evt
// eslint-disable-next-line no-unused-vars
const onRoomsOrGuestsChanged = (evt) => validateRoomsAndGuests();
roomsField.addEventListener('change', onRoomsOrGuestsChanged);
guestsField.addEventListener('change', onRoomsOrGuestsChanged);

const onCheckInOutValueChange = (evt) => {
  const newValue = evt.target.value;
  checkinField.value = newValue;
  checkoutField.value = newValue;
};

timeField.addEventListener('change', onCheckInOutValueChange);

// Валидируем заголовок объявления
titleField.addEventListener('input', () => {
  const titleLength = titleField.value.length;
  if (titleLength < MIN_TITLE_LENGTH) {
    titleField.setCustomValidity(`Минимум: ${MIN_TITLE_LENGTH} символов. Введите еще ${MIN_TITLE_LENGTH - titleLength} симв.`);
  } else if (titleLength > MAX_TITLE_LENGTH) {
    titleField.setCustomValidity(`Максимум: ${MAX_TITLE_LENGTH} символов. Удалите ${titleLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleField.setCustomValidity('');
  }
  titleField.reportValidity();
});

// Валидируем адрес объявления
addressField.addEventListener('invalid', () => {
  addressField.setCustomValidity(addressField.validity.valueMissing ? 'Обязательное поле для заполнения!' : '');
});

// Меняем минимальную допустимую цену на апартаменты, в зависимости от выбранного типа жилья
typeField.addEventListener('change', () => {
  priceField.placeholder = MIN_PRICE[typeField.value];
  priceField.min = MIN_PRICE[typeField.value];
});

export {
  guestsField,
  roomsField,
  validateRoomsAndGuests,
  onRoomsOrGuestsChanged
};
