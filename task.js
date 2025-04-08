var currentIndex = 0;
var imageSources = [];

$(document).ready(function () {
  //__________________
  $(".images").each(function () {
    imageSources.push($(this).attr("src"));
  });
  //__________________

  $(".images").on("click", function () {
    currentIndex = $(".images").index(this);
    showImage(currentIndex);
  });
  //____________________
  $("#prev").on("click", prevImage);
  $("#next").on("click", nextImage);

  // __________________
  hideSliderOnEscape();
});
