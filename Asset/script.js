// Get the button element
const navToggle = document.querySelector(".nav-toggle");

// Get the nav element
const nav = document.querySelector(".nav");

// Toggle navigation when the button is clicked
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});
