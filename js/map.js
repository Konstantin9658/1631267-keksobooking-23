import {filterAds, setListenerChangesInFilter} from './filter.js';
import {setFormEnabled} from './form.js';
import {showPopup} from './popup.js';

const LOCATION_TOKYO = {
  lat: 35.68169,
  lng: 139.75388,
};
const MAP__ZOOM = 10;
const mapFormFilters = document.querySelector('.map__filters');
const elementsMapForm = mapFormFilters.querySelectorAll('.map__filter');

const setMapFormEnabled = (enabled) => {
  setFormEnabled(mapFormFilters, elementsMapForm, enabled);
};

const map = L.map('map-canvas');

const initMap = (onMapLoad) => {
  map.on('load', onMapLoad);

  map.setView(LOCATION_TOKYO, MAP__ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};


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
  LOCATION_TOKYO,
  {
    draggable: true,
    icon: newMarkerIcon,
  },
);

mapMarker.addTo(map);

const markerAdGroup = L.layerGroup().addTo(map);

const renderAdvertMarkers = (adverts) => {
  markerAdGroup.clearLayers();
  adverts.forEach((advert) => {
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
  });
};

const showAdMarkers = (adverts) => {
  renderAdvertMarkers(filterAds(adverts));
  setListenerChangesInFilter(adverts);
};

const updateMap = (adverts) => {
  mapFormFilters.reset();
  map.setView(LOCATION_TOKYO, 10);
  mapMarker.setLatLng(LOCATION_TOKYO);
  renderAdvertMarkers(filterAds(adverts));
};

export {
  setMapFormEnabled,
  initMap,
  mapMarker,
  LOCATION_TOKYO,
  showAdMarkers,
  updateMap,
  renderAdvertMarkers
};
