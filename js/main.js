/*menu*/

var toggleButton = document.querySelector(".main-nav__toggle");

var menu = document.querySelector(".main-nav");

toggleButton.addEventListener('click', function () {
  menu.classList.toggle("main-nav--closed")
})

if (document.documentElement.clientWidth < 768) {
  menu.classList.add("main-nav--closed")
}

window.onresize = function () {
  if (document.documentElement.clientWidth >= 768) {
    menu.classList.remove("main-nav--closed")
  }
}
/*
if (menu.classList.contains("main-nav--nojs")) {
    menu.classList.remove("main-nav--nojs");
    toggleButton.classList.remove("main-nav__toggle--nojs");
    toggleButton.classList.add("main-nav__toggle--open");
};
toggleButton.addEventListener("click", function(event) {
  event.preventDefault();
      menu.classList.toggle("main-nav__toggle--open");
      toggleButton.classList.toggle("main-nav__toggle--close");
      toggleButton.classList.toggle("main-nav__toggle--open");
});*/


