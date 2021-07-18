import {renderAdvertMarkers} from './map.js';
import {debounce} from './util.js';

const MAX_ADS = 10;
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;
const TIMEOUT_DELAY = 500;

const filterHousingType = document.querySelector('#housing-type');
const filterPrice = document.querySelector('#housing-price');
const filterRooms = document.querySelector('#housing-rooms');
const filterGuests = document.querySelector('#housing-guests');
const mapFeatures = document.querySelector('.map__features');
const filterFeatures = mapFeatures.querySelectorAll('.map__checkbox');

const anyFilterValue = (filter) => filter.value === 'any';

const isTypeOfHousingInAdMatches = (advert) => anyFilterValue(filterHousingType) || advert.offer.type === filterHousingType.value;

const isPriceInAdMatch = (advert) => {
  if (anyFilterValue(filterPrice)) {
    return true;
  }
  switch (filterPrice.value) {
    case 'low' : return advert.offer.price <= MIN_PRICE;
    case 'middle' : return advert.offer.price >= MIN_PRICE && advert.offer.price <= MAX_PRICE;
    case 'high' : return advert.offer.price >= MAX_PRICE;
    default : return false;
  }
};

const isNumberOfRoomsInAdMatch = (advert) => anyFilterValue(filterRooms) || advert.offer.rooms === parseInt(filterRooms.value, 10);

const isNumberOfGuestsInAdMatch = (advert) => anyFilterValue(filterGuests) || advert.offer.guests === parseInt(filterGuests.value, 10);

const isFeaturesInAdMatch = (advert) => {
  const adFeatures = advert.offer.features || [];
  for (const filterFeature of filterFeatures) {
    if (filterFeature.checked && !adFeatures.includes(filterFeature.value)) {
      return false;
    }
  }
  return true;
};

const filters = [
  isTypeOfHousingInAdMatches,
  isPriceInAdMatch,
  isNumberOfRoomsInAdMatch,
  isNumberOfGuestsInAdMatch,
  isFeaturesInAdMatch,
];

const isAdMatch = (advert) => filters.every((filter) => filter(advert));

const filterAds = (adverts) => {
  const filteredAds = [];
  for (let i = 0; i < adverts.length && filteredAds.length < MAX_ADS; i++) {
    const advert = adverts[i];
    if (isAdMatch(advert)) {
      filteredAds.push(advert);
    }
  }
  return filteredAds;
};

const trackChangeInFilter = (adverts) => debounce(() => renderAdvertMarkers(filterAds(adverts)), TIMEOUT_DELAY);

const setListenerChangesInFilter = (adverts) => {
  const filterChangeHandler =  trackChangeInFilter(adverts);

  filterHousingType.addEventListener('change', filterChangeHandler);
  filterPrice.addEventListener('change', filterChangeHandler);
  filterRooms.addEventListener('change', filterChangeHandler);
  filterGuests.addEventListener('change', filterChangeHandler);
  mapFeatures.addEventListener('change', filterChangeHandler);
};

export {setListenerChangesInFilter, filterAds};
