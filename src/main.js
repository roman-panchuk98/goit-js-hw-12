import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const btnMore = document.querySelector('.btn-more');

let currentPage = 1;
let currentText = '';
let totalPages = 0;
const perPage = 15;

form.addEventListener('submit', ev => {
  ev.preventDefault();
  hideLoadMoreButton();
  currentPage = 1;
  const textValue = ev.target.elements['search-text'].value.trim();
  currentText = textValue;

  if (textValue === '') {
    iziToast.error({
      title: 'Please write word!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();

  showLoader();

  setTimeout(async () => {
    try {
      const responseData = await getImagesByQuery(textValue, currentPage);

      if (responseData.hits.length === 0) {
        iziToast.error({
          title: `Sorry, there are no images matching your search ${textValue}. Please try again!`,
          position: 'topRight',
        });
        hideLoadMoreButton();
        return;
      }
      totalPages = Math.ceil(responseData.totalHits / perPage);

      if (currentPage >= totalPages) {
        iziToast.info({
          title: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
        hideLoadMoreButton();
      }
      createGallery(responseData);
      form.reset();
    } catch (error) {
      iziToast.error({
        title: error.message,
        position: 'topRight',
      });
    } finally {
      hideLoader();
      if (currentPage < totalPages) {
        showLoadMoreButton();
      }
    }
  }, 1000);
});

btnMore.addEventListener('click', () => {
  hideLoadMoreButton();
  showLoader();
  currentPage += 1;
  setTimeout(async () => {
    try {
      const responseData = await getImagesByQuery(currentText, currentPage);

      if (responseData.hits.length === 0) {
        iziToast.error({
          title: `Sorry, there are no images matching your search ${currentText}. Please try again!`,
          position: 'topRight',
        });
        hideLoadMoreButton();
        return;
      }

      if (currentPage >= totalPages) {
        iziToast.info({
          title: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
        hideLoadMoreButton();
      } else {
        showLoadMoreButton();
      }
      createGallery(responseData);
      let itemGallery = document.querySelector('.gallery-item');
      if (itemGallery) {
        let heightOneItem = itemGallery.getBoundingClientRect().height;
        scrollBy({
          top: heightOneItem * 2,
          behavior: 'smooth',
        });
      }
    } catch (error) {
      iziToast.error({
        title: error.message,
      });
    } finally {
      hideLoader();
    }
  }, 1000);
});
