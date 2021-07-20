const box = document.querySelectorAll(".header__list-box");
const headerItem = document.querySelectorAll(".header__item");
const arrow = document.querySelectorAll(".header__arrow");
const boxArray = [...box];
const arrowArray = [...arrow];

const removeActive = function (els, active) {
  els.forEach((el) => el.classList.remove(active));
};

const filterArray = function (cl, els, active, element) {
  const currEl = element.querySelector(cl);

  const filtered = els.filter(function (item) {
    return item !== currEl;
  });

  filtered.forEach((el) => el.classList.remove(active));
};

const toggle = function (element, els, active) {
  element.querySelector(els).classList.toggle(active);
};

removeActive(arrow, "header__arrow--active");
removeActive(box, "header__list-box--active");

headerItem.forEach((element) =>
  element.addEventListener("click", function (e) {
    filterArray(
      ".header__list-box",
      boxArray,
      "header__list-box--active",
      element
    );

    filterArray(".header__arrow", arrowArray, "header__arrow--active", element);

    toggle(element, ".header__list-box", "header__list-box--active");

    toggle(element, ".header__arrow", "header__arrow--active");
  })
);
