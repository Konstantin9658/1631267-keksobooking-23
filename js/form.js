const form = document.querySelector('.ad-form');
const formTitle = form.querySelector('#title');
const formAddress = form.querySelector('#address');
const formSelectOfType = form.querySelector('#type');
const formSelectOfPrice = form.querySelector('#price');
const formCheckIn = form.querySelector('#timein');
const formCheckOut= form.querySelector('#timeout');
const formBlockTime = form.querySelector('.ad-form__element--time');
const numberOfRooms = form.querySelector('#room_number');
const numberOfSeats = form.querySelector('#capacity');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const optionSeats = numberOfSeats.children;
const optionSeatLastChild = numberOfSeats.lastElementChild;

// Ура, выглядит конечно наверно для тебя слишком ущербно :D, но я сделал.
// Только вот какая фигня, когда выбираешь 100 комнат, а потом выбрать 1 комната то
// из соседнего поля пропадут места. Но если открыть селект то они там есть. Это не критично?
numberOfRooms.addEventListener('change', (evt) => {
  const value = evt.target.value;
  for (const optionSeat of optionSeats) {
    if (value !== optionSeat.value && value < optionSeat.value) {
      optionSeat.setAttribute('disabled', 'disabled');
      optionSeatLastChild.remove();
    } else if (value === '100' && optionSeat.value !== '0') {
      optionSeat.setAttribute('disabled', 'disabled');
      numberOfSeats.appendChild(optionSeatLastChild);
    } else {
      optionSeat.removeAttribute('disabled', 'disabled');
    }
  }
});

const onCheckInOutValueChange = (evt) => {
  const newValue = evt.target.value;
  formCheckIn.value = newValue;
  formCheckOut.value = newValue;
};

formBlockTime.addEventListener('change', onCheckInOutValueChange);

// Валидируем заголовок объявления
formTitle.addEventListener('input', () => {
  const titleLength = formTitle.value.length;
  if (titleLength < MIN_TITLE_LENGTH) {
    formTitle.setCustomValidity(`Минимум: ${MIN_TITLE_LENGTH} символов. Введите еще ${MIN_TITLE_LENGTH - titleLength} симв.`);
  } else if (titleLength > MAX_TITLE_LENGTH) {
    formTitle.setCustomValidity(`Максимум: ${MAX_TITLE_LENGTH} символов. Удалите ${titleLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    formTitle.setCustomValidity('');
  }
  formTitle.reportValidity();
});

// Валидируем адрес объявления
formAddress.addEventListener('invalid', () => {
  if (formAddress.validity.valueMissing) {
    formAddress.setCustomValidity('Обязательное поле для заполнения!');
  } else {
    formAddress.setCustomValidity('');
  }
});

// Меняем минимальную допустимую цену на апартаменты, в зависимости от выбранного типа жилья
formSelectOfType.addEventListener('change', () => {
  switch (formSelectOfType.value) {
    case 'bungalow' :
      formSelectOfPrice.placeholder = 0;
      formSelectOfPrice.min = 0;
      break;
    case 'flat' :
      formSelectOfPrice.placeholder = 1000;
      formSelectOfPrice.min = 1000;
      break;
    case 'hotel' :
      formSelectOfPrice.placeholder = 3000;
      formSelectOfPrice.min = 3000;
      break;
    case 'house' :
      formSelectOfPrice.placeholder = 5000;
      formSelectOfPrice.min = 5000;
      break;
    case 'palace' :
      formSelectOfPrice.placeholder = 10000;
      formSelectOfPrice.min = 10000;
      break;
  }
});
