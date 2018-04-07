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
    swipe:false,
    touchMove:false
  });

  $(window).scroll(function(){
    var scrollN = $(this).scrollTop();
    if (scrollN >= (distanceScrolled + 50)) {
      var navBarHeight = $('.jump-nav').height();
      $(".jump-nav").animate({
        top:-navBarHeight
      },
      150);
      distanceScrolled=scrollN;
    } else if (distanceScrolled >= (scrollN - 50)) {
      $(".jump-nav").animate({
        top:0
      },
      150);
      distanceScrolled=scrollN;
    };
  });
});
