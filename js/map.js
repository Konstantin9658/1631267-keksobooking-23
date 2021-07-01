import {setFormDisabled} from './form.js';

const mapForm = document.querySelector('.map__filters');
const elementsMapForm = mapForm.querySelectorAll('.map__filter');

const setMapFormDisabled = (disabled) => {
  // Переиспользуем функцию для блокировки формы и ее элементов
  setFormDisabled(mapForm, elementsMapForm, disabled);
};

export {setMapFormDisabled};
