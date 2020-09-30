'use strict';

const btnBurger = document.querySelector(".btn-burger");
const catalog = document.querySelector(".catalog");
const btnClose = document.querySelector(".btn-close");
const subCatalog = document.querySelector(".subcatalog");
const subcatalogHeader = document.querySelector(".subcatalog-header");
const btnReturn = document.querySelector(".btn-return");

//добавляем overlay в main
const overlay = document.createElement('div');
overlay.classList.add('overlay'); //присваевам класc
document.body.insertAdjacentElement('beforeend', overlay);

const openMenu = () => {
  catalog.classList.add("open");
  overlay.classList.add("active");
};
const closeMenu = () => {
  closeSubMenu();
  catalog.classList.remove("open");
  overlay.classList.remove("active");
};
const openSubMenu = (event) => {
  event.preventDefault(); //отменяет переход на другую страницу при нажатии на ссылку в меню
  const target = event.target;
  const itemList = target.closest(".catalog-list__item");
  if (itemList) {
    subcatalogHeader.innerHTML = itemList.innerHTML; //забиарем с target и отдаем Header для добавелнеия имени у сабменю
    subCatalog.classList.add("subopen");
  }
};

const closeSubMenu = () => {
  subCatalog.classList.remove("subopen");
};

btnBurger.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
catalog.addEventListener("click", openSubMenu);
btnReturn.addEventListener("click", closeSubMenu);

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeMenu();
  }
});