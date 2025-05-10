document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  const images = Array.from(thumbnails).map(img => img.dataset.src);
  let currentIndex = 0;

  function updateMainImage(index) {
    if (!mainImage) return;
    currentIndex = index;
    mainImage.src = images[currentIndex];
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => updateMainImage(index));
  });

  if (leftArrow) {
    leftArrow.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateMainImage(currentIndex);
    });
  }

  if (rightArrow) {
    rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateMainImage(currentIndex);
    });
  }

  function openLightbox() {
    const src = mainImage?.src;
    document.getElementById("lightbox-image").src = src;
    document.getElementById("lightbox-modal").classList.remove("hidden");
  }

  function closeLightbox() {
    document.getElementById("lightbox-modal").classList.add("hidden");
  }

  document.addEventListener("click", function(event) {
    const modal = document.getElementById("lightbox-modal");
    const image = document.getElementById("lightbox-image");
    if (event.target === modal && !image.contains(event.target)) {
      closeLightbox();
    }
  });
});


