function showHideNav() {
  const nav = document.querySelector(".topnav");
  nav.classList.toggle("responsive");
}


  const menuToggle = document.getElementById("menuToggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", showHideNav);
  }


  const btnLightMode = document.getElementById("btnLightMode");

  if (btnLightMode) {
    const icon = btnLightMode.querySelector("i");
    const savedDarkMode = localStorage.getItem("darkMode") === "true";

        if (savedDarkMode) {
      document.body.classList.add("dark-mode");
      updateDarkModeIcon(true);
    }
        btnLightMode.addEventListener("click", function () {
      const isDarkMode = document.body.classList.toggle("dark-mode");
      updateDarkModeIcon(isDarkMode);
      localStorage.setItem("darkMode", isDarkMode);
    });
        function updateDarkModeIcon(isDarkMode) {
      if (!icon) return;
      icon.classList.remove("fa-sun-o", "fa-moon-o");
      icon.classList.add(isDarkMode ? "fa-moon-o" : "fa-sun-o");
    }
  }
