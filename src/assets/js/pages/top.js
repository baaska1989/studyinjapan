(function ($) {
  'use strict';

  var $breakpoint = 767;

  function mainVisual(){
    $('.js_top_mainvisual').slick({
      infinite      : true,
      autoplay      : true,
      autoplaySpeed : 6500,
      arrows        : false,
      // accessibility : false,
      dots          : true
    });
  }

  function topBanner(){
    $('.js_top_banner').slick({
      // centerMode: true,
      infinite      : true,
      autoplay      : true,
      autoplaySpeed : 6500,
      arrows        : true,
      // accessibility : false,
      dots          : false,
      slidesToShow  : 3,
      responsive : [{
        breakpoint : $breakpoint,
        settings   : {
          centerMode : true,
          slidesToShow : 1
        }
      }]
    });
  }

  // init
  // $(function(){
  // });
  $(window).on('load',function(){
    mainVisual();
    topBanner();
  });

})(jQuery);
