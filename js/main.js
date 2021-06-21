import {generateAdvert} from './data.js';
import {showPopup} from './generate-similar-elements.js';

// eslint-disable-next-line no-unused-vars
const similarAdverts = () => new Array(10).fill(null).map(() => generateAdvert());
// Он не хочет из similarAdverts находить объекты offer, author
showPopup(generateAdvert());
