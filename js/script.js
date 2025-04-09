$(document).ready(function(){
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {  
        navLinks.classList.toggle('nav-open');
    });

    const swiper = new Swiper('.swiper', {
        loop: true, // 무한반복
        slidesPerView: 1, // 보여지는 슬라이드 개수
        spaceBetween: 20, // 슬라이드 간격
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 3000, // 3초 자동 슬라이드
        },
      });
      
}); // jquery

