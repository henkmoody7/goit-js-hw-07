import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");

function createImageMarkup({ preview, original, description }) {
  return `    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}

const createGallery = galleryItems.map(createImageMarkup).join("");

galleryContainerRef.insertAdjacentHTML("beforeend", createGallery);

galleryContainerRef.addEventListener("click", onImageClick);
function onImageClick(e) {
  const originalSrc = e.target.dataset.source;
  if (e.target.nodeName !== "IMG") return;
  e.preventDefault();

  const instance = basicLightbox.create(
    `
   <img src="${originalSrc}">
    `,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscClick);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscClick);
      },
    }
  );
  const onEscClick = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };
  instance.show();
}
