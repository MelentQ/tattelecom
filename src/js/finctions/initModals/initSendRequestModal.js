// модалка "Тариф “Много интернета”"
// __классы для кнопок__
// .js-open-send-request-modal - на кнопки открывания модалки
// .js-close-send-request-modal - на кнопку закрывания модалки

// __Атрибуты для кнопки открытия__
//  data-tariff-name="title" - заголовок
//  data-prise="250" - цена, необяз

// __если есть продукт__
// data-product-img
// data-product-caption
// data-product-value
// data-product-price

// __если есть селект пункт выдачи__
// data-point-issue

import { Modal } from '../../components/modal';

export default function initSendRequestModal() {
  const btnsOpen = document.querySelectorAll('.js-open-send-request-modal');
  const btnsClose = document.querySelectorAll('.js-close-send-request-modal');
  const modalElem = document.querySelector('#modal-send-request-host');
  const dataTitleElem = modalElem.querySelector('.modal__title');
  const dataCommentElem = modalElem.querySelector('input[name=param_comment]');
  const modalPriceWrapperElem = modalElem.querySelector('.send-request__price');
  const modalPriceElem = modalElem.querySelector('.send-request__price .number');
  const modalTariffingElem = modalElem.querySelector('.send-request__price .tariffing');

  const modalProductWrapperElem = modalElem.querySelector('.send-request__product-wrapper');
  const modalProductImgElem = modalProductWrapperElem.querySelector('.send-request__product-img');
  const modalProductCaptionElem = modalProductWrapperElem.querySelector('.send-request__product-caption');
  const modalProductValueElem = modalProductWrapperElem.querySelector('.send-request__product-value');
  const modalProductPriceElem = modalProductWrapperElem.querySelector('.send-request__product-price');

  const modalPointIssueSelectElem = modalElem.querySelector('.send-request__form-select-wrapper');

  let modalComponent;

  btnsOpen.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      const dataTitle = btn.getAttribute('data-tariff-name');
      const dataCommnt = btn.getAttribute('data-comment');
      const dataPrise = btn.getAttribute('data-prise');
      const dataTariffing = btn.getAttribute('data-tariffing');

      const dataProductImg = btn.getAttribute('data-product-img');
      const dataProductCaption = btn.getAttribute('data-product-caption');
      const dataProductValue = btn.getAttribute('data-product-value');
      const dataProductPrice = btn.getAttribute('data-product-price');
      const dataPointIssue = btn.hasAttribute('data-point-issue');

      dataTitleElem.innerText = dataTitle;
      dataCommentElem.value = "";
      dataCommentElem.value = dataCommnt;
      if (dataPrise) {
        modalPriceElem.innerText = dataPrise;
      } else {
        modalPriceWrapperElem.remove();
      }
      if (dataTariffing) {
        modalTariffingElem.innerText = dataTariffing;
      }


      if (dataProductImg || dataProductCaption || dataProductValue || dataProductPrice) {
        modalProductWrapperElem.classList.add('mod-show');

        if (dataProductImg && modalProductImgElem) {
          modalProductImgElem.setAttribute('src', dataProductImg);
        }

        if (dataProductCaption) {
          modalProductCaptionElem.innerText = dataProductCaption;
        }

        if (dataProductValue) {
          modalProductValueElem.innerText = dataProductValue;
        }

        if (dataProductPrice) {
          modalProductPriceElem.innerText = dataProductPrice;
        }
      }

      if (dataPointIssue) {
        modalPointIssueSelectElem.classList.add('mod-show');
      }

      modalComponent = new Modal(modalElem);
      modalComponent.onOpenModal();
    });
  })

  btnsClose.forEach(btn => {
    btn.addEventListener('click', () => {
      modalComponent.onCloseModal();
    })
  })
}

window.initSendRequestModal = initSendRequestModal;