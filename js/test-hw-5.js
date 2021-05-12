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