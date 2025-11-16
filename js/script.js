$(function(){
  $(".menu").click(function(){
    $(".toggleMenu, .overlay").toggleClass("active");
  });
});
$(".overlay").click(function(){
  $(".toggleMenu, .overlay").removeClass("active");
});
$(document).click(function(e){
  if($(e.target).closest(".menu").length ||
$(e.target).closest(".toggleMenu").length)
{
  return;
}
$(".toggleMenu, .overlay").removeClass("active");
});


//スライド
$(window).on("load", function() {
  const $slider = $(".pickupPic");

const $slides = $slider.children().clone();
$slider.append($slides);
$slider.prepend($slides.clone());

  const scrollWidth = $slider[0].scrollWidth;
  const visibleWidth = $slider.outerWidth();
  const centerPosition = (scrollWidth - visibleWidth) / 2;
  $slider.scrollLeft(centerPosition);


$slider.on("scrollLeft", function() {
  const scrollLeft = $slider.scrollLeft();
  const maxScroll = scrollWidth - visibleWidth;

    if(scroll >= maxScroll -1) {
      $slider.scrrollLeft(centerPosition);
    }
    else if(scrollLeft <= 1){
      $slider.scrollLeft(centerPosition);
    }
});
});

$(function(){
  let isDragging = false;
  let startX;
  let scrollLeft;

$(".pickupPic").on("mousedown", function(e){
  isDragging = true;
  startX = e.pageX - $(this).offset().left;
  scrollLeft = $(this).scrollLeft();
  $(this).addClass("active");
});

$(".pickupPic").on("mousemove", function(e){
  if(!isDragging) return;
  e.preventDefault();
  const X = e.pageX - $(this).offset().left;
  const walk = (X - startX) * 0.8;
  $(this).scrollLeft(scrollLeft - walk);
});

$(window).on("mouseup", function(){
  isDragging = false;
  $(".pickupPic").removeClass("active");
});
});
