// Hero slider
let slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 4000);

// Navbar shrink effect
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "12px 8%";
  } else {
    navbar.style.padding = "20px 8%";
  }
});
// Navbar shrink on scroll (premium feel)
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.padding = "12px 8%";
    navbar.style.background = "rgba(11,17,32,0.95)";
  } else {
    navbar.style.padding = "20px 8%";
    navbar.style.background = "rgba(11,17,32,0.75)";
  }
});
// Navbar shrink on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const toggleBtn = document.getElementById("eventToggle");
const eventDetails = document.getElementById("eventDetails");

toggleBtn.addEventListener("click", () => {
  eventDetails.classList.toggle("active");

  if (eventDetails.classList.contains("active")) {
    toggleBtn.textContent = "Hide Event Details";
  } else {
    toggleBtn.textContent = "View Event Details";
  }
});
