let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // ✅ Always show navbar when near the top of the page
  if (currentScrollY < 50) {
    navbar.style.top = "0";
    return;
  }

  // ✅ Hide navbar only when scrolling down
  if (currentScrollY > lastScrollY) {
    navbar.style.top = "-100px";
  } 
  // ✅ Show navbar again when scrolling up
  else {
    navbar.style.top = "0";
  }

  lastScrollY = currentScrollY;
});
