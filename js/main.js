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
  catalog.classList.add("open"); //добавляем класс 
  overlay.classList.add("active"); //добавляем класс
};
const closeMenu = () => {
  closeSubMenu();
  catalog.classList.remove("open"); //удаляем класс
  overlay.classList.remove("active");
};
const openSubMenu = (event) => {
  event.preventDefault(); //отменяет переход на другую страницу при нажатии на ссылку в меню event-обьект 
  const target = event.target; //target свойство оебьекта event 
  const itemList = target.closest(".catalog-list__item"); //метод closest берет элемент на который кликнул и по DOM дереву идет наверх, пока не встретит элемент с  тем селектором который мы напишем иначе null 
  if (itemList) {
    subcatalogHeader.innerHTML = itemList.innerHTML; //забиарем и отдаем Header для добавелнеия имени у сабменю
    subCatalog.classList.add("subopen");
  }
};

const closeSubMenu = () => {
  subCatalog.classList.remove("subopen");
};

//вызов метода
btnBurger.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
catalog.addEventListener("click", openSubMenu);
btnReturn.addEventListener("click", closeSubMenu);

//закрытие меню по нажатию на ESC
document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeMenu();
  }
});