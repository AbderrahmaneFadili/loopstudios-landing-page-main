/* Open Menu & Close */
const nav = document.querySelector(".nav");
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");

iconOpen.addEventListener("click", () => {
  nav.classList.add("open");
});
iconClose.addEventListener("click", () => {
  nav.classList.remove("open");
});
