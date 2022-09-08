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
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const accountLinkProfile = document.querySelector(".account__link-profile");
const accountModal = document.querySelector(".account__modal");

accountLinkProfile.addEventListener("click", function () {
  accountModal.classList.toggle("account__modal--open");
});

// Any of the following formats may be used

const ctx = document.getElementById("myChart-1");

if (ctx) {
  const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["ACTIVE", "ACTIVE"],
      datasets: [
        {
          label: "My First Dataset",
          data: [90, 10],
          backgroundColor: ["#42C2C2", "#AEA6FF"],
          hoverOffset: 4,
        },
      ],
    },
  });
}

const ctx2 = document.getElementById("myChart-2");
if (ctx2) {
  const myChart2 = new Chart(ctx2, {
    type: "doughnut",
    data: {
      labels: ["EXPENSIVE", "EXPENSIVE", "EXPENSIVE", "EXPENSIVE", "EXPENSIVE"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 300, 50, 20],
          backgroundColor: [
            "#32CF65",
            "#0C81D0",
            "#E45E7B",
            "#FFC231",
            "#FF9D3B",
          ],
          hoverOffset: 4,
        },
      ],
    },
  });
}

// const modalOverlay = document.querySelector(".modal-office-hours");
// const officeHoursBtn = document.querySelector(".office-hours-btn");
// const modalOfficeHours = modalOverlay.querySelector(".modal-office-hours__modal");

// officeHoursBtn.addEventListener('click',function () {
//   modalOverlay.classList.add("modal-office-hours-open");

// })

const modalTrigger = document.querySelectorAll(".office-hours-btn"),
  modal = document.querySelector(".modal-office-hours"),
  modalCloseBtn = document.querySelectorAll(".modal-close-btn");

if (modal) {
  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("modal-office-hours-hide");
    modal.classList.remove("modal-office-hours-show");
    document.body.style.overflow = "";
  }

  function openModal() {
    modal.classList.add("modal-office-hours-show");
    modal.classList.remove("modal-office-hours-hide");
    // document.body.style.overflow = "hidden";
    // clearInterval(modalTimerId);
  }

  modalCloseBtn.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}
