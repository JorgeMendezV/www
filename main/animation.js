const animations = (elementId) => {
  let animationEffect = document.getElementById(elementId);
  let scrollPosition = animationEffect.getBoundingClientRect().top;
  let screenSize = window.innerHeight;

  if (scrollPosition < screenSize - 100) {
    animationEffect.style.animation = "showAnimation 1s none";
    animationEffect.style.opacity = 1;
  } else {
    animationEffect.style.transition = "all .3s ease";
    animationEffect.style.opacity = 0;
    animationEffect.style.animation = "";
  }
};
window.addEventListener("scroll", () => animations("animation"));
window.addEventListener("scroll", () => animations("about-me-footer"));

window.onload = () => {
  // SHOW MENU
  document.getElementById("show-nav").style.transform = "scale(0)";

  //LOADER ANIMATION
  document.getElementById("loading").style.opacity = "0";
  document.getElementById("loading").style.visibility = "hidden";
  document.body.style.overflowY = "auto";
  window.scrollTo(0, 0);
};