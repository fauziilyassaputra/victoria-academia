const navbarIsi = document.querySelector(".navbarIsi");

document.querySelector(".navIcon").onclick = () => {
  navbarIsi.classList.toggle("active");
};
const navIcon = document.querySelector(".navIcon");

document.addEventListener("click", function (event) {
  if (!navbarIsi.contains(event.target) && !navIcon.contains(event.target)) {
    navbarIsi.classList.remove("active");
  }
});
