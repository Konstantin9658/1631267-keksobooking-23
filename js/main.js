import './form.js';
import {setAdFormEnabled, setUserFormSubmit, showMessageAndResetForm} from './form.js';
import {setMapFormEnabled, initMap, showAdMarkers} from './map.js';
import './status.js';
import {fetchAdverts} from './api.js';

const setPageEnabled = (enabled) => {
  setAdFormEnabled(enabled);
  setMapFormEnabled(enabled);
};

setPageEnabled(false);

initMap(() => {
  setPageEnabled(true);
  setUserFormSubmit(showMessageAndResetForm);
  fetchAdverts((advertsFromServer) => {
    showAdMarkers(advertsFromServer);
  });
});


