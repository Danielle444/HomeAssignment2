function showHideNav() {
    const nav = document.querySelector(".topnav");
    nav.classList.toggle("responsive");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    if (menuToggle) {
      menuToggle.addEventListener("click", showHideNav);
    }
    });
