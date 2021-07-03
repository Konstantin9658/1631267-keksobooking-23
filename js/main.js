import {generateAdvert} from './data.js';
import './form.js';
import {setAdFormDisabled} from './form.js';
import {setMapFormDisabled, getMapLoad, createMarker} from './map.js';

const setPageDisabled = (disabled) => {
  setAdFormDisabled(disabled);
  setMapFormDisabled(disabled);
};

const addAdvertToMap = () => {
  setPageDisabled(false);
  const similarAdverts = new Array(10).fill(null).map(generateAdvert);
  similarAdverts.forEach((advert) => createMarker(advert));
};

addAdvertToMap(getMapLoad);
