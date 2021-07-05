import {isEscEvent} from './util.js';

const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;
const errorMessage = errorMessageTemplate.querySelector('.error');
const successMessage = successMessageTemplate.querySelector('.success');

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '350px';
  alertContainer.style.right = '350px';
  alertContainer.style.top = '15px';
  alertContainer.style.padding = '20px 3px';
  alertContainer.style.fontSize = '25px';
  alertContainer.style.color = 'black';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;
  document.body.appendChild(alertContainer);
};

const showStatus = (status) => {
  document.body.insertAdjacentElement('beforeend', status);
  document.addEventListener('click', () => {
    status.remove();
  });
  document.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    isEscEvent(evt, status);
  });
};

const showSuccessMessage = () => {
  const messageStatus = successMessage.cloneNode(true);
  showStatus(messageStatus);
};

const showErrorMessage = () => {
  const messageStatus = errorMessage.cloneNode(true);
  showStatus(messageStatus);
};

export {showAlert, showSuccessMessage, showErrorMessage};
