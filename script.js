"use strict";

const shareSection = document.querySelector(".article__share");
const footer = document.querySelector(".article__footer");

footer.addEventListener("click", function (e) {
  const clicked = e.target;
  //   check that share button was clicked
  if (clicked.closest(".article__btn--share")) shareSection.classList.toggle("hidden");
});
