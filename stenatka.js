function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    // Set the source of the lightbox image to the clicked image
    lightboxImg.src = imgElement.src;
    
    // Display the lightbox
    lightbox.style.display = 'block';
  }
  
  // Close the lightbox when clicking anywhere outside the image or the close button
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  }