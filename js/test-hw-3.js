// z-1
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };


// z-2
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//    	owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     },
//   };


// z-3
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки


// z-4
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Пиши код выше этой строки


// z-5
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки


// z-6
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');


// z-7
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Ямайка';
// apartment.location.city = 'Кингстон';


// z-8
// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
//   name,
//   price,
//   image,
//   tags
//   // Пиши код выше этой строки
// };


// z-9
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]:'henry.carter@aptmail.com',
//   [passwordInputName]:'jqueryismyjam'
//   // Пиши код выше этой строки
// };


// z-10
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
// keys.push(key);
// }

// for (const key in apartment) {
// values.push(apartment[key]);
// }


// z-11
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
//   if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//   }

//   // Пиши код выше этой строки
// }


// z-12
// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки

//  const propCountKeys = Object.keys(object);
//  propCount = propCountKeys.length;
  
//   // Пиши код выше этой строки
//   return propCount;
// }


// z-13
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);

// for (const key of keys) {
// values.push(apartment[key]);
// }


// z-14
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

// 	const countPropKeys = Object.keys(object);
// 	propCount = countPropKeys.length;

//   return propCount;
//   // Пиши код выше этой строки
// }


// z-15
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


// Z-16
//  function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   const values = Object.values(salaries);
// 	for (const value of values) {
// 	totalSalary += value;
// 	}
//   // Пиши код выше этой строки
//   return totalSalary;
// }


// z-17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//  hexColors.push(color.hex);
//    rgbColors.push(color.rgb);
// }


// z-18
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
  
//   for (const product of products) 
//   if (productName===product.name){
//     return product.price;
//   }
//   return null;
  
//   // Пиши код выше этой строки
// }


// z-19
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//  const values = [];
//   for (const product of products) {
    
// if (product[propName]) {
//     values.push(product[propName]);
//     }
//   }
//     return values;
//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues('name'));


// z-20
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let price = 0;
  
// for (const product of products) {
//   if (productName === product.name) {
// price = product.price * product.quantity;
//   } 
// }

// return price;
//   // Пиши код выше этой строки
// }


// z-21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow}  = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// z-22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' }  = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// z - 23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const { yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon:highIcon  = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',} = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// z-24
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


// z-25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const {
//     today: { low: lowToday,
//     high:highToday, 
//     icon: todayIcon =
// 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',},
       
//     tomorrow: {
//     high: highTomorrow,
//     low:lowTomorrow,
//     icon:tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',},
//     } = forecast;


// z-26
// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const {today:{low:todayLow, high:todayHigh},tomorrow:{low:tomorrowLow, high:tomorrowHigh}} = forecast;
  
//   //const todayLow = forecast.today.low;
//  // const todayHigh = forecast.today.high;
//  // const tomorrowLow = forecast.tomorrow.low;
//   //const tomorrowHigh = forecast.tomorrow.high;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


// z-27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


// z-28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// z-29
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings,...overrideSettings};


// z-30
// const newtask = {category, priority, ...data, completed}
//     return newtask;


// z-31
// Пиши код ниже этой строки
// function add(...args) {
// let total = 0;
//   for (const arg of args)
//   {total += arg;}
//   return total;
//   // Пиши код выше этой строки
// }


// z-32
// Пиши код ниже этой строки
// function addOverNum(value, ...args) {
//   let total = 0;

//   for (const arg of args) 
//   if (value<arg){
    
//     total += arg;
//   }

//   return total;
//   // Пиши код выше этой строки
// }


// z-33
// Пиши код ниже этой строки
// function findMatches(args,...numbers) {
//     const matches = []; // Не изменяй эту строку

//     for (const number of numbers) {
//         //----1----
//         //console.log(number);

//         for (const arg of args) {
//             //----2-----
//            // console.log(arg);

//             if (arg===number) {
//             matches.push(number);
//             }
//         }
//     }
//   // Пиши код выше этой строки
//   return matches;
// }
//------------3----------------
//console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // возвращает [1, 2].
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // возвращает [17, 89, 2].
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // возвращает [24, 9, 41].
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // возвращает [].
// ---------------------------------------------------------------------------


// z-34
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//   	return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };


// z-35
// http://fecore.net.ua/books/m5ph3r-javascript/module-02/array-methods.html#замена-элементов-массива
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
// 	const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
  
//     // Пиши код выше этой строки
//   },
// };


// z-36
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: []
//   // Пиши код выше этой строки
// };


// z-37
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//   return this.potions;
//   },
//   // Пиши код выше этой строки
// };


// z-38
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };


// z-39
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//     // Пиши код выше этой строки
//   },
// };


// z-40
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//  const oldNameIndex = this.potions.indexOf(oldName);
//     this.potions.splice(oldNameIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };


// z-41
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Зелья ${potionName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Пиши код выше этой строки
};
console.log(atTheOldToad.getPotions());