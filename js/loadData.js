import {
  getData
} from './getData.js';

const wishList = ['idd021', 'idd054', 'idd023', 'idd078', 'idd099'];
const cardList = [{
    id: 'idd002',
    count: 3
  },
  {
    id: 'idd032',
    count: 2
  },
  {
    id: 'idd010',
    count: 1
  },
];

export const loadData = () => {
  if (location.search) {
    const search = decodeURI(location.search); //decodeURI декодирование из непонятных символов на латинские буквы 
    const prop = search.split('=')[0].substring(1); // split разбивает/разделяем строку на на символ =, [0] получаем 0 элемент
    const value = search.split('=')[1];
    if (prop === 's') {
      getData.search(value, (data) => console.log(data));
    } else if (prop === 'wishlist') {
      getData.wishList(wishList, (data) => console.dir({
        wishlist: data
      })); //callback функция
    } else if (prop === 'cat' || prop === 'subcat') {
      getData.category(prop, value, (data) => console.log(data))
    }

  }

  if (location.hash) {
    getData.item(location.hash.substring(1), (data) => console.log(data)); //.substring(1) обрезаем вначале имени #
  }

  if (location.pathname.includes('cart')) { // если локайшин pathname содержит cart
    getData.cart(cardList, (data) => console.log(data));
  }

  getData.catalog((data) => console.log(data));
  getData.subCatalog((data) => console.log(data));

};