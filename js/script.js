$(document).ready(function(){

    $('.slider-card').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        centerPadding: '60px',
        responsive: [
          {
            breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
          },
          {
            breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
          },
          {
            breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
          }
        ]
    });
    new WOW().init();
});