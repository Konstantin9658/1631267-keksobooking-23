import {makeFormEnabled} from './form.js';

const mapForm = document.querySelector('.map__filters');
const elementsMapForm = mapForm.querySelectorAll('.map__filter');

const makeMapFormEnabled = (disabled) => {
  // Переиспользуем функцию для блокировки формы и ее элементов
  makeFormEnabled(mapForm, elementsMapForm, disabled);
};

export {makeMapFormEnabled};
