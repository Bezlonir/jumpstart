var distanceScrolled = 0;

$(document).ready(function(){
  $('.jump-carousel').slick({
    accessibility:false,
    arrows:false,
    autoplay: true,
    autoplaySpeed:4000,
    draggable:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    touchMove:false
  });
});

$(window).scroll(function(){
  var scrollN = this.scrollTop();
  if (scronnN >= (distanceScrolled + 50)) {
    var navBarHeight = $('.jump-nav').height();
  };
});
