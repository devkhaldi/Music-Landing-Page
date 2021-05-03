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
}

// Toggle menu
const mobileMenu = document.querySelector(".mobile-nav-items")
const menuIcon = document.querySelector(".menu-icon")
menuIcon.onclick = () => {
  if (window.scrollY === 0) navbar.classList.toggle("nav-scrolling")
  mobileMenu.classList.toggle("hidden-mobile-nav")
}
