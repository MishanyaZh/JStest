// z-1
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// //const child = {};
// const child = Object.create(parent);
// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;


// z-2
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки


// z-3
// function Car(brand,model,price){
// 	this.brand = brand;
//   	this.model = model;
//   	this.price = price;
// }


// z-4
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }


// z-5
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function() {
// 	return this.price;
// };

// Car.prototype.changePrice = function(newPrice) {
// 	this.price = newPrice;
// };


// z-6
// function Storage(items) {
// this.items = items;
// }

// Storage.prototype.getItems = function() {
// 	return this.items;
// };

// Storage.prototype.addItem = function(newItem) {
// 	this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//     const indexItem = this.items.indexOf(item);
//     //console.log(indexItem);
//     this.items.splice(indexItem, 1);
// };
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// z-7
// function StringBuilder(baseValue) {
// 	this.value = baseValue;
// };
// StringBuilder.prototype.getValue = function() {
//  	return this.value;
// };
// StringBuilder.prototype.padStart = function(str) {
//     this.value= str + this.value;
// };
// StringBuilder.prototype.padEnd = function(str) {
//     this.value+=str;
// };
// StringBuilder.prototype.padBoth = function(str) {
//     this.value=str+this.value+str;
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


// z-8
// class Car {
// }


// z-9
// class Car {
//   brand;
//   model; 
//   price;
  
//   constructor({ brand, model, price }) {
//   	this.brand = brand;
//   	this.model = model;
//   	this.price = price;
//   } 
// }


// z-10
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//   	return this.price;
//   }
//   changePrice(newPrice) {
//   	this.price = newPrice;
//   }
// }


// z-11
// class Car {
//   #brand;
  
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//   	return this.#brand;
//   }
//   changeBrand(newBrand) {
//   	this.#brand = newBrand;
//   }
// }


// z-12
// class Storage {
//  #items;
//   constructor (items) {
//   this.#items = items;
//   }
  
//   getItems () {
//   return this.#items;
// }

// addItem (newItem) {
//   this.#items.push(newItem);
// }

// removeItem (item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// }
// }
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// z-13
// class StringBuilder {
//   #value
  
//   constructor(baseValue) {
//   this.#value = baseValue;
// }

// getValue () {
//   return this.#value;
// }

// padEnd (str) {
//   this.#value += str;
// }

// padStart (str) {
//   this.#value = str + this.#value;
// }

// padBoth (str) {
//   this.padStart(str);
//   this.padEnd(str);
// }
// }
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


// z-14
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }


// z-15
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice>Car.MAX_PRICE) {
//     return;
//     }
    
//     this.#price = newPrice;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// z-16
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
// 	static checkPrice(price) {
//       if (price>Car.#MAX_PRICE) {
//         return 'Внимание! Цена превышает допустимую.';
//       }
// 	    return 'Всё хорошо, цена в порядке.';
// 	}
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


// z-17
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
// static AccessLevel = {BASIC: 'basic', SUPERUSER: 'superuser'}
// }


// z-18
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
    
//     accessLevel;

//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser'
//     };
    
//     constructor ({email, accessLevel}) {
//         super(email); 
//         this.accessLevel = accessLevel;
//     }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser


// z-19
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//     accessLevel;
//     blacklistedEmails;
    
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   constructor({ email, accessLevel, blacklistedEmails }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }
 
//     blacklist(email) {
//         this.blacklistedEmails = [];
//  	    this.blacklistedEmails.push(email);
//  }
  
//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//  }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 