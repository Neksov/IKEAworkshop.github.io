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
    console.log(search);
    const prop = search.split('=')[0].substring(1); // split разбивает/разделяем строку на на символ =, [0] получаем 0 элемент
    console.log(prop);
    const value = search.split('=')[1];
    console.log(value);

    if (prop === 's') {
      console.log(value);
    } else if (prop === 'wishlist') {
      console.log(wishList);
    } else {
      console.log(prop, value);
    }

  }

  if (location.hash) {
    console.log(location.hash.substring(1)); //.substring(1) обрезаем вначале имени #
  }

  if (location.pathname.includes('cart')) { // если локайшин pathname содержит cart
    console.log(cardList);
  }

};