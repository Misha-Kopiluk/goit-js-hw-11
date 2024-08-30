import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { photoRequest } from "./js/pixabay-api";
import { galleryMarkup } from "./js/render-functions";

const formEl = document.querySelector('.forms');
const galleryEl = document.querySelector('.gallery');
const loader = document.querySelector('.js-loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.8,
});
  
function searchAndDisplayImages(event) {
  event.preventDefault();
  const el = formEl.elements.user.value.trim();

  function loading() {
    loader.classList.remove('is-hidden');
  }
  function hideloading() {
    loader.classList.add('is-hidden');
  }

  loading();

  if (el === '') {
    iziToast.warning({
    position: 'topRight',
    message: 'Fill in the input field',
    });
    hideloading();
    return;
  }

  photoRequest(el)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
    
        galleryEl.innerHTML = '';
      }
      const creatingGaleri = data.hits.map(imginfo => galleryMarkup(imginfo)).join('');
      galleryEl.innerHTML = creatingGaleri;
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: 'An error occurred',
      });
    })
    .finally(() => {
      hideloading();
    });

  formEl.reset();
}

formEl.addEventListener('submit', searchAndDisplayImages);
