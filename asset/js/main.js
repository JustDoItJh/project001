$(function(){



    var swiper = new Swiper(".swiper-container", {
        slidesPerView:'auto',
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });


})