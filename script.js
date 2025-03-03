

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
  });


function openMenu(){
  const sidebar = document.querySelector(".navbar-mobile");
  sidebar.style.display = "flex";
}

function closeMenu(){
  const sidebar = document.querySelector(".navbar-mobile");
  sidebar.style.display = "none";
}