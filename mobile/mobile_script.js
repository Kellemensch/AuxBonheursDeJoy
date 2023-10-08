/*barre de navigation*/
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

var menuButton = document.getElementById("openBtn");
var header = document.getElementById("header");

window.addEventListener("scroll", function() {
  var scrollTop = window.scrollY;
  var headerHeight = header.clientHeight;

  if (scrollTop > headerHeight) {
    menuButton.style.top = "0";
  } else {
    menuButton.style.top = "20px"; // Ajustez la marge supérieure selon vos besoins
  }
});
