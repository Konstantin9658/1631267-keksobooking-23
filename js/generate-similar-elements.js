const cardTemplate = document.querySelector('#card').content;
const card = cardTemplate.querySelector('.popup');

const map = document.querySelector('#map-canvas');

const getOfferTypeName = (offerType) => {
  switch (offerType) {
    case 'flat': return 'Квартира';
    case 'bungalow' : return 'Бунгало';
    case 'house' : return 'Дом';
    case 'palace' : return 'Дворец';
    case 'hotel' : return 'Отель';
  }
};

const checkFeatures = (popupElement, features) => {
  const popupGroupItem = popupElement.querySelector('.popup__features');
  const popupElements = popupGroupItem.children;
  if (features.length === 0) {
    // Скрываем блок с фичами, если их нет вообще
    popupGroupItem.classList.add('hidden');
  } else {
    for (let i = 0; i < popupElements.length; i++) {
      popupElements[i].classList.add('hidden');
      for (let j = 0; j < features.length; j++) {
        // Проверяем на наличие нужного модификатора из массива с фичами
        if (popupElements[i].classList.contains(`popup__feature--${features[j]}`)) {
          popupElements[i].classList.remove('hidden');
        }
      }
    }
  }
};

const checkPhotos = (popupElement, photos) => {
  const popupGroupItem = popupElement.querySelector('.popup__photos');
  const popupPhoto = popupGroupItem.querySelector('.popup__photo');
  if (photos.length === 0) {
    // Скрываем блок с фото, если их нет
    popupGroupItem.classList.add('hidden');
  } else {
    for (let i = 0; i < photos.length; i++) {
      const userPhoto = popupPhoto.cloneNode(true);
      popupPhoto.src = photos[i];
      userPhoto.src = photos[i];
      popupGroupItem.appendChild(userPhoto);
    }
  }
};

const showPopup = (advert) => {
  const popupElement = card.cloneNode(true);
  popupElement.querySelector('.popup__title').textContent = advert.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = advert.offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${advert.offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__type').textContent = getOfferTypeName(advert.offer.type);
  popupElement.querySelector('.popup__text--capacity').textContent = `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${advert.offer.checkin}, выезд после ${advert.offer.checkout}`;
  checkFeatures(popupElement, advert.offer.features);
  popupElement.querySelector('.popup__description').textContent = advert.offer.description;
  checkPhotos(popupElement, advert.offer.photos);
  popupElement.querySelector('.popup__avatar').src = advert.author.avatar;
  map.appendChild(popupElement);
};

export {showPopup};
