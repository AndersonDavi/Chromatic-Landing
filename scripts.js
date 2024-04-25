window.onscroll = function () {
  setSticky();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function setSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
