const PARAM = {
  cat: "category",
  subcat: "subcategory",
  search: ["name", "description", "category", "subcategory"],
};
export const getData = {
  url: "database/dataBase.json",
  get(process) {
    fetch(this.url) //запрос на сервер с помощью fetch по url
      .then((response) => response.json()) // с помощью then обрабатываем response
      .then(process); //отдаем в функцию process
  },
  wishList(list, callback) {
    this.get((data) => {
      const result = data.filter((item) => list.includes(item.id));
      callback(result);
    });
  },
  item(value, callback) {
    this.get((data) => {
      const result = data.find((item) => item.id === value);
      callback(result);
    });
  },
  cart(list, callback) {
    this.get((data) => {
      const result = data.filter((item) =>
        list.some((obj) => obj.id === item.id)
      );
      callback(result);
    });
  },
  category(prop, value, callback) {
    this.get((data) => {
      const result = data.filter(
        (item) => item[PARAM[prop]].toLowerCase() === value.toLowerCase()
      );
      callback(result);
    });
  },

  search(value, callback) {
    this.get((data) => {
      const result = data.filter((item) => {
        for (const prop in item) {
          if (
            PARAM.search.includes(prop) &&
            item[prop].toLowerCase().includes(value.toLowerCase())
          ) {
            return true;
          }
        }
      });
      callback(result);
    });
  },

  catalog(callback) {
    this.get((data) => {
      /*Получаем данные data от сервера и помещаем их в arr[] */
      const result = data.reduce((arr, item) => {
        if (!arr.includes(item.category)) { //если массив не содержит 
          arr.push(item.category);

        }
        return arr;
      }, [])
      callback(result)
    })
  },

  subCatalog(value, callback) {
    this.get((data) => {
      /*фильтруем данные по value  */
      const result = data
        .filter(item => item.category === value)
        /*колбек функция кладем в arr перебираем item*/
        .reduce((arr, item) => {
          /*проверяем содержит ли он ту подкатегорию которую мы выбираем и если нет то запушить */
          if (!arr.includes(item.subcategory)) {
            arr.push(item.subcategory);
          }
          return arr;
        }, []);
      callback(result)
    })
  },
};