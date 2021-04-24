console.log('hello');
// ZADACHA 3
// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки
//     if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//        }  
//   if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//     }
//     return 'Заказ оформлен, с вами свяжется менеджер';   
//   // Пиши код выше этой строки
// };

// console.log(checkStorage(5, 0));

// Z-4
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин']
// console.log(fruits);

// Z-5
// Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// z - 6
// Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
// fruits[1] ='персик';
// fruits[3] ='банан';

// z-7
// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// z-8
// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
// const lastElementIndex = fruits.length - 1;

// const lastElement = fruits[lastElementIndex];

// z-9

// function getExtremeElements(array) {
    // Пиши код ниже этой строки
//   const first = array[0];
//   const last = array[array.length-1];
  
    // return [first, last];
    
    // Пиши код выше этой строки
// }
// getExtremeElements([1, 2, 3, 4, 5]);


// Z-10
// function splitMessage(message, delimeter) {
//   let words;
  // Пиши код ниже этой строки
    // words = message.split(delimeter);
  // Пиши код выше этой строки
    
    // return words; 
// }
// splitMessage[console.log(splitMessage('Манго спешит на поезд',' '))];


// z-11
// function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
// return message.split(' ').length * pricePerWord;

  // Пиши код выше этой строки
// }
// calculateEngravingPrice[console.log(calculateEngravingPrice('JavaScript у меня в крови', 20))];


// z-12
// function makeStringFromArray(array, delimeter) {
  // let string;
  // Пиши код ниже этой строки
 
  // string = array.join(delimeter);
 
  // Пиши код выше этой строки
  // return string;
  
// }
// makeStringFromArray[console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '))];


// z-13
// function slugify(title) {
  // Пиши код ниже этой строки

  // let lowerTitle = title.toLowerCase();
  // let titleSplit = lowerTitle.split(' ');
  // let titleSlug = titleSplit.join('-');
  
  // return titleSlug;

  // or
//  return title.split(' ').join('-').toLowerCase();
 
  // Пиши код выше этой строки
// }
// slugify[console.log(slugify("Десять секретов JavaScript"))];


// z-14
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(2);

// console.log(fruits.slice(0,2));


// z -15
// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients);
// Дополни эту строку


// z-16

// function makeArray(firstArray, secondArray, maxLength) {
// Пиши код ниже этой строки
  
// let allArray = firstArray.concat(secondArray);

// return allArray.slice(0,maxLength);
  
  
  // or
// return firstArray.concat(secondArray).slice(0,maxLength);
  
// Пиши код выше этой строки
// }
// makeArray[console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4))];


// z-17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
  // Дополни эту строку
  // console.log(i);
// }


// z-18
// function calculateTotal(number) {
  // Пиши код ниже этой строки
// let total = 0;
  
//  for (let i = 0; i<= number; i+=1){
//   total+=i;
//  };
  
// return total;
  // Пиши код выше этой строки
// }

// proverka
// let total = 0;
// let number = 3;
// for (let i = 0; i<= number; i+=1){
//   total+=i;
// };
// console.log(total);


// z-19
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i< fruits.length; i+=1) { 
  // const fruit = fruits[i]; 
//   console.log(fruit);
// }


// z-20
// function calculateTotalPrice(order) {
//   let total = 0;
  
  // Пиши код ниже этой строки
// for (const ord of order) {
// total+=ord;
// }
  // Пиши код выше этой строки
//   return total;
// }


// z-21
// function findLongestWord(string) {
  // Пиши код ниже этой строки
 
//   string = string.split(' ');
//   let longes = string[0];
  
//   for (const word of string){
//   if (word.length>=longes.length) {
//   longes = word;
//   	}
//   }
// return longes;
  // Пиши код выше этой строки
// }


// z-22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  // Пиши код ниже этой строки
  // for (let i = min; i <= max; i+=1){
  // numbers.push(i);
  // }

  // Пиши код выше этой строки
  // return numbers;
// }


// z-23
// function filterArray(numbers, value) {
  // Пиши код ниже этой строки
// const bignumbers = [];
//   for (const number of numbers){
//   if (number>value) {
//   bignumbers.push(number);}
//   }

// return bignumbers;
  // Пиши код выше этой строки
// }


// z-24
// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); 
// }


// z-25
// function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  // const array3 = [];

  // for (const el of array1) {
  //   if (array2.includes(el)) {
  //     array3.push(el)
  //     }
  // }

  // return array3;
  // Пиши код выше этой строки
// }


// z-26
// function calculateTotalPrice(order) {
//   let total = 0;
  // Пиши код ниже этой строки

  // for (const el of order){
  //   total +=el;
  // }
  // Пиши код выше этой строки
//   return total;
// }


// z-27
// function filterArray(numbers, value) {
  // Пиши код ниже этой строки

  // const filteredNumbers = [];

  // for (let number of numbers) {
  //   if (number > value) {
  //     filteredNumbers.push(number);
  //   }
  // }

  // return filteredNumbers;
  // Пиши код выше этой строки
// }


// z-28
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8 ;
// const d = 12 % 7;
// const e = 8 % 3;


// z-29
// function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
// const isEven = [];
  
//   for(let i = start; i<=end; i+=1) {
    
//     if (i%2===0){
      
//       isEven.push(i);
//        }
//   }

//     return isEven;
    // Пиши код выше этой строки
  // }


  // z-30
//   const start = 6;
//   const end = 27;
//   let number;

//   for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }


// z-31
// function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки

  // for (let i = start; i < end; i += 1) {
  //   if (i % divisor === 0) {
  //     return i;
  //   }
  // }

  // Пиши код выше этой строки
// }


// z-32
// function includes(array, value) {
  // Пиши код ниже этой строки

// for (const el of array){
  
// 	if (el===value) {
      
// 		return true;
// 	}
// }
// return false;
  
  // Пиши код выше этой строки
// }