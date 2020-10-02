import { getData } from "./getData.js";
const wishList = ["idd021", "idd054", "idd023", "idd078", "idd099"];

const generateGoodsPage = () => {
  const mainHeader = document.querySelector(".main-header");
  const goodsList = document.querySelector(".goods-list");

  const generateCards = (data) => {
    goodsList.textContent = "";
    data.forEach((item) => {
      goodsList.insertAdjacentHTML(
        `afterbegin`,
        `<li class="goods-list__item">
        <a class="goods-item__link" href="card.html#${item.id}">
            <article class="goods-item">
                <div class="goods-item__img">
                           <img src="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0710165_PE727396_S5.JPG"
                              data-second-image="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0876876_PE611263_S5.JPG" alt="ФАБЛЕР БЬЁРН">
                        </div>
                <h3 class="goods-item__header">${item.name}</h3>
                <p class="goods-item__description">${item.description}</p>
                <p class="goods-item__price">
                    <span class="goods-item__price-value">${item.price}</span>
                    <span class="goods-item__currency"> ₽</span>
                </p>
                <button class="btn btn-add-card" aria-label="Добравить в корзину" data-idd="${item.id}"></button>
            </article>
        </a>
    </li>`
      );
    });
  };

  if (location.pathname.includes("goods") && location.search) {
    const search = decodeURI(location.search); //decodeURI декодирование из непонятных символов на латинские буквы
    const prop = search.split("=")[0].substring(1); // split разбивает/разделяем строку на на символ =, [0] получаем 0 элемент
    const value = search.split("=")[1];

    if (prop === "s") {
      // запрос поиска
      getData.search(value, generateCards);
      mainHeader.textContent = `Поиск: ${value}`;
    } else if (prop === "wishlist") {
      // запрос списка желаний
      getData.wishList(wishList, generateCards); //callback функция
      mainHeader.textContent = `Список желаний`;
    } else if (prop === "cat" || prop === "subcat") {
      // запрос категорий
      getData.category(prop, value, generateCards);
      mainHeader.textContent = value;
    }
  }
};
export default generateGoodsPage;
