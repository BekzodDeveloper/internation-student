// document.querySelectorAll(".accordion__item-trigger").forEach((item) => {
//   item.addEventListener("click", () => {
//     const parent = item.parentNode;

//     if (parent.classList.contains("accordion__item--active")) {
//       parent.classList.remove("accordion__item--active");
//     } else {
//       document
//       .querySelectorAll(".accordion__item")
//       .forEach((item) => {
//         item.classList.remove("accordion__item--active");
//       });
//     }
//   });
// });
var swiper1 = new Swiper(".swiper-stat", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  centeredSlides: false,
  draggable: true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 640px
    // 576: {
    //   slidesPerView: 2,
    //   spaceBetween: 15,
    // },
    // 768: {
    //   slidesPerView: 3,
    //   spaceBetween: 15,
    // },
    // 992: {
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    // },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }, //   });
});

const accountLinkProfile = document.querySelector(".account__link-profile");
const accountModal = document.querySelector(".account__modal");

accountLinkProfile.addEventListener("click", function () {
  accountModal.classList.toggle("account__modal--open");
});
