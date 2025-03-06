



  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".swiper-slide img");

    // Define image paths
    const desktopImages = [
        "./Asserts/mv1_large.jpg",
        "./Asserts/mv2_large.jpg" ,
        "./Asserts/mv3_large.jpg" ,
        "./Asserts/mv4_large.jpg" ,
        "./Asserts/mv5_large.jpg" ,
        "./Asserts/mv6_large.jpg" ,
        "./Asserts/mv7_large.jpg" ,
        "./Asserts/mv8_large.jpg" ,
        "./Asserts/mv9_large.jpg" ,
        "./Asserts/mv10_large.jpg",
        "./Asserts/mv11_large.jpg"
    ];

    const mobileImages = [
        "./Asserts/mobile/mv1_small.jpg",
        "./Asserts/mobile/mv2_small.jpg",
        "./Asserts/mobile/mv3_small.jpg",
        "./Asserts/mobile/mv4_small.jpg",
        "./Asserts/mobile/mv5_small.jpg",
        "./Asserts/mobile/mv6_small.jpg",
        "./Asserts/mobile/mv7_small.jpg",
        "./Asserts/mobile/mv8_small.jpg",
        "./Asserts/mobile/mv9_small.jpg",
        "./Asserts/mobile/mv10_small.jpg",
        "./Asserts/mobile/mv11_small.jpg"
    ];

    function updateSliderImages() {
        const isMobile = window.matchMedia("(max-width: 1024px)").matches;
        slides.forEach((img, index) => {
            img.src = isMobile ? mobileImages[index] : desktopImages[index];
        });
    }

    // Run on load
    updateSliderImages();

    // Listen for screen resize
    window.addEventListener("resize", updateSliderImages);

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


});

function openMenu(){
  const sidebar = document.querySelector(".navbar-mobile");
  sidebar.style.display = "flex";
}

function closeMenu(){
  const sidebar = document.querySelector(".navbar-mobile");
  sidebar.style.display = "none";
}

