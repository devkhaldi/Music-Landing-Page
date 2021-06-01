const navbar = document.querySelector("nav")
const joinNowBtn = document.querySelector(".section-1 a")
const navbarBtn = document.querySelector("nav .join-now-btn")

window.onscroll = () => {
  // change navbar style on scroll
  if (window.scrollY !== 0) navbar.classList.add("nav-scrolling")
  else navbar.classList.remove("nav-scrolling")

  // Toggle join now btn
  if (window.scrollY > joinNowBtn.offsetTop + 250)
    navbarBtn.classList.remove("hidden-btn")
  else navbarBtn.classList.add("hidden-btn")

  // Hide Navbar
  const section6 = document.querySelector(".section-6")
  if (window.scrollY > section6.offsetTop - 550)
    navbar.classList.add("hidden-nav")
  else navbar.classList.remove("hidden-nav")
}

// Toggle menu
const mobileMenu = document.querySelector(".mobile-nav-items")
const menuIcon = document.querySelector(".menu-icon")
menuIcon.onclick = () => {
  if (window.scrollY === 0) navbar.classList.toggle("nav-scrolling")
  mobileMenu.classList.toggle("hidden-mobile-nav")
}
