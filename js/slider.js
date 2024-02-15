var _width_ = window.innerWidth;
var scrol = '';
var parallax_ ='';
if(_width_>=1079){
  parallax_ = true;
  scrol = 'horizontal';
}else{
  parallax_ = false
  scrol = 'vertical';
}






var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: scrol,
    loop: false,
  
    parallax: parallax_,


    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
    },
    
    effect: 'slide',

    
  });
  