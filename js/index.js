// js code for hero section slider
// js code for hero section slider
// js code for hero section slider

function populateSlider() {
  setSliderMarkup();
  imageSlider.reload();
}
function setSliderMarkup() {
  var sliderFrame = document.getElementById("sliderFrame");
  sliderFrame.innerHTML =
    '<div id="slider"><img src="images/sl1.jpg" />' +
    '<img src="images/sl3.jpg" />' +
    '<img src="images/sl4.jpg" />' +
    '<img src="images/sl3.jpg" /></div>';
}

// for the first blue slider
$(document).ready(function () {
  $(".items").slick({
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// scroll sticky navbar
window.onscroll = function () {
  stickyMenu();
};

var navbar = document.getElementById("stickyNav");
var sticky = navbar.offsetTop;

function stickyMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
