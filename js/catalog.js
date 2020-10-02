import {
  getData
} from './getData.js';
import generateSubCatalog from './generateSubCatalog.js';

export const catalog = () => {
  const updateSubCatalog = generateSubCatalog();
  const btnBurger = document.querySelector(".btn-burger");
  const catalog = document.querySelector(".catalog");
  const subCatalog = document.querySelector(".subcatalog");
  const subcatalogHeader = document.querySelector(".subcatalog-header");
  const btnReturn = document.querySelector(".btn-return");

  //добавляем overlay в main
  const overlay = document.createElement("div");
  overlay.classList.add("overlay"); //присваевам класc
  document.body.insertAdjacentElement("beforeend", overlay);

  const openMenu = () => {
    catalog.classList.add("open"); //добавляем класс
    overlay.classList.add("active"); //добавляем класс
  };
  const closeMenu = () => {
    closeSubMenu();
    catalog.classList.remove("open"); //удаляем класс
    overlay.classList.remove("active");
  };
  const handlerCatalog = (event) => {
    event.preventDefault(); //отменяет переход на другую страницу при нажатии на ссылку в меню event-обьект
    // const target = event.target; //target свойство оебьекта event
    const itemList = event.target.closest(".catalog-list__item>a"); //метод closest берет элемент на который кликнул и по DOM дереву идет наверх, пока не встретит элемент с  тем селектором который мы напишем иначе null
    if (itemList) {
      getData.subCatalog(itemList.textContent, (data) => {
        updateSubCatalog(itemList.textContent, data) //передаем заголовок
        subCatalog.classList.add("subopen"); //отображаем заголовок
      })
    };
    if (event.target.closest('.btn-close')) { //если есть то закрываем
      closeMenu();
    };
  };

  const closeSubMenu = () => {
    subCatalog.classList.remove("subopen");
  };

  //вызов метода/событие
  btnBurger.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeMenu);
  catalog.addEventListener("click", handlerCatalog);
  subCatalog.addEventListener('click', event => {
    const btnReturn = event.target.closest('.btn-return');
    if (btnBurger) closeSubMenu();
  })
  //закрытие меню по нажатию на ESC
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      closeMenu();
    }
  });

}