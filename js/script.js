$(document).ready(function(){

    $('.slider-card').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        centerPadding: '60px',
        swipe: false,
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
                slidesToScroll: 1,
                swipe: true,
              }
          },
          {
            breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                swipe: true,  
              }
          }
        ]
    });
    new WOW().init();
});