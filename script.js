const navToggle = document.querySelector(".nav-toggle");
const menuIcon = document.querySelector(".nav-toggle-img");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  navToggle.classList.add("open");
  navToggle.setAttribute("aria-expanded", "true");
  mobileMenu.classList.add("open");
  overlay.classList.add("open");
  menuIcon.src = "images/icon-close.svg";
  menuIcon.alt = "Close menu";
  requestAnimationFrame(() => mobileMenu.classList.add("visible"));
}

function closeMenu() {
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  overlay.classList.remove("open");
  mobileMenu.classList.remove("visible");
  menuIcon.src = "images/icon-hamburger.svg";
  menuIcon.alt = "Hamburger menu icon";
  mobileMenu.addEventListener(
    "transitionend",
    () => {
      mobileMenu.classList.remove("open");
    },
    { once: true },
  );
}

navToggle.addEventListener("click", () => {
  navToggle.classList.contains("open") ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navToggle.classList.contains("open")) {
    closeMenu();
  }
});
