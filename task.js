var currentIndex = 0;
var imageSources = [];

$(document).ready(function () {
  ////////
  $(".images").each(function () {
    imageSources.push($(this).attr("src"));
  });
  ////////
  $(".images").on("click", function () {
    currentIndex = $(".images").index(this);
    $(".slider-container").show();
    showImage(currentIndex);
  });

  $("#prev").on("click", prevImage);
  $("#next").on("click", nextImage);
});
