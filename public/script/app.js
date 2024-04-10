const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const down = document.querySelector(".down");
let rotate = true;
const cartOpenBtn = document.querySelector(".cart-icon");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const cart = document.querySelector(".cart");

toggleThemeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

submenuOpenBtn.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.toggle("text-orange-300");
  submenu.classList.toggle("submenu--open");
  if (rotate == true) {
    rotate = !rotate;
    down.classList.remove("down");
    down.classList.add("un-down");
  } else {
    rotate = !rotate;
    down.classList.remove("un-down");
    down.classList.add("down");
  }
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.remove("-right-64");
  nav.classList.add("right-0");
  console.log("open nav ");
  overlay.classList.add("overlay--visible");
  overlay.classList.remove("overlay");
});

cartOpenBtn.addEventListener("click", () => {
  cart.classList.remove("-left-64");
  cart.classList.add("left-0");
  console.log("open cart ");
  overlay.classList.add("overlay--visible");
  overlay.classList.remove("overlay");

  // overlay.addEventListener("click", closeCart);
});

function closeNav() {
  nav.classList.remove("right-0");
  nav.classList.add("-right-64");
  overlay.classList.remove("overlay--visible");
  overlay.classList.add("overlay");
  console.log("close nav");
}
function closeCart() {
  cart.classList.remove("left-0");
  cart.classList.add("-left-64");
  overlay.classList.add("overlay");
  overlay.classList.remove("overlay--visible");
  console.log("close cart");
}

navCloseBtn.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);

cartCloseBtn.addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);


