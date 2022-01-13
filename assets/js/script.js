document.querySelector(".icon-menu").addEventListener("click", () => {
  document.querySelector(".icon-menu").classList.toggle("active");
});
document.querySelector(".icon-menu").addEventListener("click", () => {
  document.querySelector(".menu__body").classList.toggle("active");
});

document.getElementById("link_about").addEventListener("click", () => {
  document.querySelector(".menu__body").classList.remove("active");
});
document.getElementById("link_skills").addEventListener("click", () => {
  document.querySelector(".menu__body").classList.remove("active");
});
document.getElementById("link_works").addEventListener("click", () => {
  document.querySelector(".menu__body").classList.remove("active");
});

document.getElementById("link_about").addEventListener("click", () => {
  document.querySelector(".icon-menu ").classList.remove("active");
});
document.getElementById("link_skills").addEventListener("click", () => {
  document.querySelector(".icon-menu").classList.remove("active");
});
document.getElementById("link_works").addEventListener("click", () => {
  document.querySelector(".icon-menu").classList.remove("active");
});
