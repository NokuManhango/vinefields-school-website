// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Mobile menu
const btn = document.getElementById("mobileToggle");
const mobileNav = document.getElementById("mobileNav");
if (btn && mobileNav){
  btn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
  });
}