import './form.js';
import {setAdFormDisabled, setFormSubmitHandler} from './form.js';
import {setMapFormDisabled, initMap, renderAdvertMarkers} from './map.js';
import './status.js';
import {fetchAdverts} from './api.js';

const setSomethingDisabled = (disabled) => {
  setAdFormDisabled(disabled);
  setMapFormDisabled(disabled);
};

setSomethingDisabled(true);

initMap(() => {
  setSomethingDisabled(false);
  fetchAdverts(renderAdvertMarkers);
  // Не совсем понял про это => //Возможность отправки формы не должна происходить раньше,
  // чем все приложение перейдет в активное состояние
  // То есть она должна появляться после того как загрузится карта и соответсвенно ее нужно переместить сюда?
  setFormSubmitHandler();
});
