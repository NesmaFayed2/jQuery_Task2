function showImage(index) {
  $("#slider-image").attr("src", imageSources[index]);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageSources.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  showImage(currentIndex);
}

window.nextImage = nextImage;
window.prevImage = prevImage;
