import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");

function createImageMarkup({ preview, original, description }) {
  return `<li>
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
}

function renderGallery(gallery) {
  const createGallery = gallery.reduce((acc, item) => {
    return acc + createImageMarkup(item);
  }, "");
  galleryContainerRef.insertAdjacentHTML("beforeend", createGallery);
}
renderGallery(galleryItems);

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
