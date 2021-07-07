import {resetForm} from './form.js';
import {isEscEvent} from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

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

const closeMessage = (statusMessage, inCorrect) => {
  statusMessage.remove();
  if (inCorrect) {
    resetForm();
  }
};

const showMessage = (statusMessage, inCorrect) => {
  document.body.insertAdjacentElement('beforeend', statusMessage);
  document.addEventListener('click', () => {
    closeMessage(statusMessage, inCorrect);
  }, {once: true});
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeMessage(statusMessage, inCorrect);
    }
  },  {once: true});
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  showMessage(successMessage, true);
};

const showErrorMessage = (inCorrect) => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  showMessage(errorMessage, !inCorrect);
};

export {showAlert, showSuccessMessage, showErrorMessage};
