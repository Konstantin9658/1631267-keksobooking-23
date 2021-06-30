import {generateAdvert} from './data.js';
import {showPopup} from './popup.js';
import './form.js';
import {makeAdFormEnabled} from './form.js';
import {makeMapFormEnabled} from './map.js';

const similarAdverts = new Array(10).fill(null).map(generateAdvert);
showPopup(similarAdverts[0]);

const disabledPage = (disabled) => {
  makeAdFormEnabled(disabled);
  makeMapFormEnabled(disabled);
};

disabledPage(false);
