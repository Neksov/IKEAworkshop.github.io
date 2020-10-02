import {
  getData
} from './getData.js';

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


  if (location.hash) {
    getData.item(location.hash.substring(1), (data) => console.log(data)); //.substring(1) обрезаем вначале имени #
  }

  if (location.pathname.includes('cart')) { // если локайшин pathname содержит cart
    getData.cart(cardList, (data) => console.log(data));
  }

  // getData.catalog((data) => console.log(data));
  // getData.subCatalog("Декор", (data) => console.log(data));

};