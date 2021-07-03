import {setFormDisabled, addressField} from './form.js';
import {showPopup} from './popup.js';

const UP_TO_FIVE = 5;
const mapForm = document.querySelector('.map__filters');
const elementsMapForm = mapForm.querySelectorAll('.map__filter');

const setMapFormDisabled = (disabled) => {
  // Переиспользуем функцию для блокировки формы и ее элементов
  setFormDisabled(mapForm, elementsMapForm, disabled);
};

const map = L.map('map-canvas');

map.setView({
  lat: 35.68169,
  lng: 139.75388,
}, 10);

const getMapLoad = () => {
  map.on('load', () => {
  });
};

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const newMarkerIcon = L.icon ({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const adIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mapMarker = L.marker(
  {
    lat: 35.68169,
    lng: 139.75388,
  },
  {
    draggable: true,
    icon: newMarkerIcon,
  },
);

mapMarker.addTo(map);

const markerAdGroup = L.layerGroup().addTo(map);

const createMarker = (advert) => {
  L.marker(
    {
      lat: advert.location.lat,
      lng: advert.location.lng,
    },
    {
      icon: adIcon,
    },
  ).addTo(markerAdGroup)
    .bindPopup(
      showPopup(advert),
      {
        keepInView: true,
      },
    );
};

// Заполняем поле адреса
addressField.value = `${mapMarker.getLatLng().lat}, ${mapMarker.getLatLng().lng}`;
mapMarker.on('moveend', (evt) => {
  const coordinateValues = evt.target.getLatLng();
  addressField.value = `${Number(coordinateValues.lat.toFixed(UP_TO_FIVE))}, ${Number(coordinateValues.lng.toFixed(UP_TO_FIVE))}`;
});

export {setMapFormDisabled, getMapLoad, createMarker};
