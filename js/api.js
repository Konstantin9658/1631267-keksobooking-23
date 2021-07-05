import {showAlert} from './status.js';

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((adverts) => {
      onSuccess(adverts);
    })
    .catch((error) => {
      showAlert(`"${error}" При загрузке данных произошла ошибка. Попробуйте повторить позднее.`);
    });
};

const sendData = (onSuccess, onFail, formdata) => {
  fetch('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formdata,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
