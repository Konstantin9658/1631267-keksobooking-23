import './form.js';
import {setAdFormDisabled, setUserFormSubmit} from './form.js';
import {setMapFormDisabled, getMapLoad, createMarker} from './map.js';
import './status.js';
import {getData} from './api.js';
import {showSuccessMessage} from './status.js';

const setPageDisabled = (disabled) => {
  setAdFormDisabled(disabled);
  setMapFormDisabled(disabled);
};

setPageDisabled(true);

getMapLoad(() => {
  setPageDisabled(false);
  getData(createMarker);
});

setUserFormSubmit(showSuccessMessage);
