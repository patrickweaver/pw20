(() => {
  const modal = document.getElementById('gallery-modal');
  if (!modal) return;

  const modalImage = modal.querySelector('.modal-image-container img');
  const closeBtn = modal.querySelector('.modal-close');
  const prevBtn = modal.querySelector('.modal-prev');
  const nextBtn = modal.querySelector('.modal-next');
  const imageCounter = modal.querySelector('.modal-counter');
  const galleryImages = Array.from(
    document.querySelectorAll('ul.project-images img')
  );

  let currentImageIndex = -1;
  let scrollPosition = 0;

  function updateModal(index) {
    if (index < 0 || index >= galleryImages.length) return;

    if (currentImageIndex === -1) {
      scrollPosition = window.scrollY || window.pageYOffset;
    }

    currentImageIndex = index;
    const img = galleryImages[index];
    modalImage.src = img.src;
    modalImage.alt = img.alt || '';

    if (imageCounter) {
      imageCounter.textContent = `${index + 1} / ${galleryImages.length}`;
    }

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === galleryImages.length - 1;

    window.location.hash = `image-${index + 1}`;
    modal.showModal();
  }

  function closeModal() {
    modal.close();
    window.location.hash = '';
    currentImageIndex = -1;
    window.scrollTo(0, scrollPosition);
  }

  galleryImages.forEach((img, index) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => updateModal(index));
  });

  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', () => {
    if (currentImageIndex > 0) updateModal(currentImageIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    if (currentImageIndex < galleryImages.length - 1) {
      updateModal(currentImageIndex + 1);
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.open) return;
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'Escape') closeModal();
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (!hash.startsWith('#image-')) {
      if (modal.open) closeModal();
      return;
    }

    const imageIndex = parseInt(hash.slice(7), 10) - 1;
    if (!isNaN(imageIndex) && imageIndex >= 0 && imageIndex < galleryImages.length) {
      updateModal(imageIndex);
    }
  });

  if (window.location.hash.startsWith('#image-')) {
    const imageIndex = parseInt(window.location.hash.slice(7), 10) - 1;
    if (!isNaN(imageIndex) && imageIndex >= 0 && imageIndex < galleryImages.length) {
      updateModal(imageIndex);
    }
  }
})();
