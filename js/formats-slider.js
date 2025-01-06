const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        // when window width is >= 820px
        820: {
          slidesPerView: 2,
        },
        // when window width is >= 1280px
        1280: {
          slidesPerView: 3,
        },
    },
    // If we need pagination
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__btn',
      bulletActiveClass: 'pagination__btn--active',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.carousel-btn.right',
      prevEl: '.carousel-btn.left',
    },
  
  });