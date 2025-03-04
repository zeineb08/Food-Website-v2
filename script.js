let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let height = section.offsetHeight;
    let offset = section.offsetTop - 150;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector(`header .navbar a[href="#${id}"]`)
          .classList.add("active");
      });
    }
  });
});

document.querySelector("#search-icon").addEventListener("click", () => {
  document.querySelector("#search-form").classList.toggle("active");
});

document.querySelector("#close").addEventListener("click", () => {
  document.querySelector("#search-form").classList.remove("active");
});

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let loader = document.querySelector('.loader-container');

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
})
