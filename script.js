// JavaScript for Image Slideshow (Smooth, Continuous Loop)
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  
  // Move the images by 100% to the left
  slides.style.transform = `translateX(-${(slideIndex + 1) * 100}%)`;
  slideIndex++;

  // Reset to the first image when the last image is reached
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
    setTimeout(() => {
      slides.style.transition = 'none';  // Disable transition for a smooth reset
      slides.style.transform = `translateX(0)`;
    }, 1000);
    setTimeout(() => {
      slides.style.transition = 'transform 1s ease';  // Re-enable transition for the next round
    }, 2000);
  }
}

// Initialize the slideshow with a smooth loop
setInterval(showSlides, 2000); // Change slide every 2 seconds
