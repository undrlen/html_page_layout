

var blue_button = document.getElementById("blue_button");
var blue_close_button = document.getElementById("blue_close_button");
var wrap_blue_video = document.getElementById("wrap_blue_video");

blue_button.addEventListener("click", function() {
  wrap_blue_video.setAttribute("class","wrap_blue_video show_wrap_blue_video");
});

blue_close_button.addEventListener("click", function() {
  wrap_blue_video.setAttribute("class","wrap_blue_video");
});
