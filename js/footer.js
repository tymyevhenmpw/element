const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
    freeMode: true,
  
 
    breakpoints: {

        1700: {
            slidesPerView:5,
        },
        1200: {
            slidesPerView:4,
        },
    
        374: {
            slidesPerView:3,
        }
      },
  
      autoplay: {
        delay: 3000,
      },

  

  });