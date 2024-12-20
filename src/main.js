import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { searchImage } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import errorIcon from './img/error.png';

const form = document.querySelector('.form');
const gallery = document.querySelector('ul.gallery');
const loader = document.querySelector('.loader');
const buttonLoadMore = document.querySelector('.button-search-more');
const section = document.querySelector('section');

let lightbox = new SimpleLightbox(
  '.gallery a'
  //   {
  //   captionsData: 'alt',
  //   captionDelay: 250,
  // }
);

iziToast.settings({
  timeout: 4000,
  position: 'topRight',
});

let page = 1;
let perPage = 15;
let searchText = '';
let totalPages = 0;

const functionSearch = async first => {
  if (first) {
    page = 1;
  }
  try {
    const { hits, totalHits } = await searchImage(searchText, page, perPage);

    totalPages = Math.ceil(totalHits / perPage);

    if (first) {
      gallery.innerHTML = '';
      buttonLoadMore.style.visibility = 'hidden';
    }

    const images = renderImages(hits);
    if (images) {
      loader.style.display = 'none';
    }

    if (hits.length === 0) {
      iziToast.error({
        iconUrl: errorIcon,
        iconColor: '#fff',
        imageWidth: 24,
        messageColor: '#fff',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      loader.style.display = 'none';
      gallery.innerHTML = '';
    }

    first
      ? (gallery.innerHTML = images)
      : gallery.insertAdjacentHTML('beforeend', images);
    buttonLoadMore.style.visibility = 'visible';
    buttonLoadMore.style.display = 'block';

    if (page + 1 > totalPages) {
      loader.style.display = 'none';
      buttonLoadMore.style.visibility = 'hidden';
      if (totalPages === 0) return;

      return iziToast.info({
        iconColor: '#fff',
        imageWidth: 24,
        messageColor: '#fff',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    const imageCard = document.querySelector('.gallery-item');
    const { y } = imageCard.getBoundingClientRect();

    window.scrollBy({
      top: -y * 2,
      behavior: 'smooth',
    });

    lightbox.refresh();
    form.reset();
  } catch (error) {
    loader.style.display = 'none';
    gallery.innerHTML = '';
    buttonLoadMore.style.display = 'none';

    iziToast.error({
      iconUrl: errorIcon,
      iconColor: '#fff',
      imageWidth: 24,
      messageColor: '#fff',
      message: error.message,
    });
  }
};

const createGalary = async e => {
  e.preventDefault();
  gallery.innerHTML = '';
  loader.style.display = 'block';
  searchText = e.target.elements.search.value.trim();
  buttonLoadMore.style.display = 'none';

  if (searchText === '') {
    iziToast.error({
      iconUrl: errorIcon,
      iconColor: '#fff',
      imageWidth: 24,
      messageColor: '#fff',
      message: 'Please write a query for search',
    });
    gallery.innerHTML = '';
    loader.style.display = 'none';
    return;
  }

  await functionSearch('first');
};
const addItemInGallery = async () => {
  buttonLoadMore.style.display = 'none';
  loader.style.display = 'block';
  section.insertAdjacentElement('beforeend', loader);
  //setTimeout(() => functionSearch(), 1000);
  page += 1;
  await functionSearch();
};

form.addEventListener('submit', createGalary);
buttonLoadMore.addEventListener('click', addItemInGallery);
