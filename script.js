document.querySelectorAll(".dropdown-submenu").forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    element.querySelector(".dropdown-menu").classList.add("show");
  });
  element.addEventListener("mouseleave", function () {
    element.querySelector(".dropdown-menu").classList.remove("show");
  });
});

var a = document.querySelectorAll(".nav-link");
a.forEach(function (element) {
  element.addEventListener("click", function () {
    a[0].classList.remove("active")
    a.classList.add("active");
  });
});
var toggler = document.querySelectorAll(".navbar-toggler");
var div = document.querySelectorAll("#navbarSupportedContent");


// toggler.addEventListener("click", function () {
  
//   div.classList.add("show");
//   div.style.color="black";
//   div.style.width="200px"


// });