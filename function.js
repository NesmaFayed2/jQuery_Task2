function showImage(index) {
  $("#slider-image").attr("src", imageSources[index]);
  $(".slider-container").fadeIn(500);
}
function changeImage() {
  $("#slider-image")
    .fadeOut(500, function () {
      $(this).attr("src", imageSources[currentIndex]);
    })
    .fadeIn(500);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageSources.length;
  changeImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  changeImage();
}

function hideSliderOnEscape() {
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $(".slider-container").fadeOut(300);
    }
  });
}

window.nextImage = nextImage;
window.prevImage = prevImage;
