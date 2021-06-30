import {generateAdvert} from './data.js';
import {showPopup} from './popup.js';
import {validateRoomsAndGuests} from './form.js';
// import './form.js';

const similarAdverts = new Array(10).fill(null).map(generateAdvert);
showPopup(similarAdverts[0]);

validateRoomsAndGuests();
