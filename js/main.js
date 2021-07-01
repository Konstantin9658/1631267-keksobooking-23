import {generateAdvert} from './data.js';
import {showPopup} from './popup.js';
import './form.js';
import {setAdFormDisabled} from './form.js';
import {setMapFormDisabled} from './map.js';

const similarAdverts = new Array(10).fill(null).map(generateAdvert);
showPopup(similarAdverts[0]);

const setPageDisabled = (disabled) => {
  setAdFormDisabled(disabled);
  setMapFormDisabled(disabled);
};

setPageDisabled(false);
