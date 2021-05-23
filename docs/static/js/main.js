const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );
const body = document.body;

window.onload = function () {
  if (isMobile) {
    body.classList.add("touch");
  } else {
    body.classList.add("pc");
  }
};

// styles connection

const headElement = document.head;
const stylesConnection = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        headElement.insertAdjacentHTML(
          "beforeend",
          '<link rel="stylesheet" href="style.css">'
        );
        body.insertAdjacentHTML(
          "beforeend",
          '<script src="static/js/libs.js" /><script src="static/js/main.js" />'
        );
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Constants

const ibgElements = document.querySelectorAll(".ibg");
const menuBurger = document.querySelector(".top-menu__burger");
const menuList = document.querySelector(".top-menu__list");
const menuWrapper = document.querySelector(".header__menu-wrapper");
const menuLinks = document.querySelectorAll(".top-menu__list a");

// menuburger

menuBurger.addEventListener("click", function () {
  menuBurger.classList.toggle("active");
  body.classList.toggle("lock");
  menuList.classList.toggle("open");
  if (window.pageYOffset < 50) {
    menuWrapper.classList.toggle("fixed-menu");
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (
      e.currentTarget === e.target &&
      menuBurger.classList.contains("active")
    ) {
      menuBurger.click();
    }
  });
});

// ibg

ibgElements.forEach((ibgElement) => {
  ibg(ibgElement);
});

function ibg(ibgElement) {
  if (ibgElement.querySelector("img")) {
    const src = ibgElement.querySelector("img").getAttribute("src");
    if (ibgElement.querySelector("img")) {
      ibgElement.style.backgroundImage = `url(${src})`;
    }
    if (ibgElement.parentElement.classList.contains("header")) {
      ibgElement.style.backgroundAttachment = "fixed";
    }
  }
}
