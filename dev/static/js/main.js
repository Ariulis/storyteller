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

// Constants

const ibgElements = document.querySelectorAll(".ibg");
const menuBurger = document.querySelector(".top-menu__burger");
const menuList = document.querySelector(".top-menu__list");
const menuWrapper = document.querySelector(".header__menu-wrapper");
const menuLinks = document.querySelectorAll(".top-menu__list a");
const headElement = document.head;
const scriptMain = document.querySelector("script[name='scriptMain']");
const stylesConnection = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        headElement.insertAdjacentHTML(
          "beforeend",
          '<link rel="stylesheet" href="static/css/styles.css">'
        );
        scriptMain.insertAdjacentHTML(
          "beforebegin",
          '<script src="static/js/libs.js" />'
        );
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);
const sectionWho = document.querySelector(".who");

// styles connection

stylesConnection.observe(sectionWho);

// scroll

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    menuWrapper.classList.add("fixed-menu");
  } else {
    menuWrapper.classList.remove("fixed-menu");
  }
});

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
    const dataSrc = ibgElement.querySelector("img").dataset.src;
    if (ibgElement.querySelector("img")) {
      ibgElement.style.backgroundImage = `url(${dataSrc})`;
    }
    if (ibgElement.parentElement.classList.contains("header")) {
      ibgElement.style.backgroundAttachment = "fixed";
    }
  }
}
