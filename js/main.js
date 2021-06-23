import {generateAdvert} from './data.js';
import {showPopup} from './popup.js';

// eslint-disable-next-line no-unused-vars
const similarAdverts = new Array(10).fill(null).map(generateAdvert);
showPopup(similarAdverts[0]);
