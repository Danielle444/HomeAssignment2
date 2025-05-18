function showHideNav() {
  const nav = document.querySelector(".topnav");
  nav.classList.toggle("responsive");
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", showHideNav);
  }

  const btnLightMode = document.getElementById("btnLightMode");
  if (!btnLightMode) return;

  const icon = btnLightMode.querySelector("i");

 if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-sun-o");
    icon.classList.add("fa-moon-o");
  }

  btnLightMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      icon.classList.remove("fa-sun-o");
      icon.classList.add("fa-moon-o");
    } else {
      localStorage.setItem("darkMode", "disabled");
      icon.classList.remove("fa-moon-o");
      icon.classList.add("fa-sun-o");
    }
  });
});