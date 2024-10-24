// Video JS
document.getElementById("toggle-button").addEventListener("click", function () {
  const image = document.getElementById("dream-image");
  const video = document.getElementById("dream-video");

  if (video.classList.contains("hidden")) {
    image.classList.add("hidden");
    video.classList.remove("hidden");
    video.play();
  } else {
    video.classList.add("hidden");
    image.classList.remove("hidden");
    video.pause();
    video.currentTime = 0;
  }
});
// Swiper for the first slider (fade effect)
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  speed: 900,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  spaceBetween: 20,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

// Swiper for the second slider (creative effect)
var swiper2 = new Swiper(".mySwiper2", {
  grabCursor: false,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: false,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["90%", 0, 0],
    },
  },
  slideToClickedSlide: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  smooth: true,
  loop: true,
});

// Navbar dropdown JS
let activeMenu = "home-menu";
let activeDropdown = null;

function activateMenu(menuId) {
  if (activeMenu) {
    const previousMenu = document.getElementById(activeMenu);
    previousMenu.classList.remove("border-black", "active");
  }
  const currentMenu = document.getElementById(menuId);
  currentMenu.classList.add("border-black", "active");
  activeMenu = menuId;
}

function toggleDropdown(menuId) {
  const dropdown = document.querySelector(`#${menuId} ul`);
  const arrow = document.querySelector(`#${menuId} svg`);
  const button = document.querySelector(`#${menuId} button`);

  if (activeDropdown && activeDropdown !== dropdown) {
    activeDropdown.classList.add("hidden");
    const activeArrow =
      activeDropdown.previousElementSibling.querySelector("svg");
    activeArrow.classList.remove("rotate-180");
    activeDropdown.previousElementSibling.classList.remove("border-black");
  }

  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
    arrow.classList.add("rotate-180");
    button.classList.add("border-black");
    activeDropdown = dropdown;
  } else {
    dropdown.classList.add("hidden");
    arrow.classList.remove("rotate-180");
    button.classList.remove("border-black");
    activeDropdown = null;
  }
}

// menuicon JS
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  const isMenuOpen = !mobileMenu.classList.contains("hidden");

  if (isMenuOpen) {
    mobileMenu.classList.add("hidden");
    closeIcon.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
  } else {
    mobileMenu.classList.remove("hidden");
    hamburgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  }
});

// Counter JS
var counted = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $(".count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    counted = 1;
  }
});
