// z-1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
  
//   orderedItems.forEach(function(orderedItem, index){
//   totalPrice += orderedItem;
//   });

//   //for (let i = 0; i < orderedItems.length; i += 1) {
//   //  totalPrice += orderedItems[i];
//   //}

//   // Пиши код выше этой строки
//   return totalPrice;
// }


// z-2
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//   numbers.forEach(function(number,index){
//   if (number>value) {
//   filteredNumbers.push(number)}
//   });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }


// z-3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

//     firstArray.forEach(function (fa) {
//         if (secondArray.includes(fa)) {
//             commonElements.push(fa);
//         }
//     });
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }


// z-4
// // Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) =>{
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }


// z-5
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Пиши код выше этой строки


// z-6
// // Пиши код ниже этой строки
// const calculateTotalPrice =(orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach ( (item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Пиши код выше этой строки


// z-7
// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach( (number) =>{
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }


// z-8
// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach( (number) =>{
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }


// z-9
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки 
//    const newArray = [];
  
//   numbers.forEach(number => {
//     if (number % 2 ===0) {
//       number=number+value;
//     }
//     newArray.push(number);
    
//   });
//   return newArray;
   
//     // Пиши код выше этой строки
//   }


// z-10
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);
// //console.log(planetsLengths);


// z-11
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
// const titles = books.map(book => book.title);
// // console.log(titles);


// z-12
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap((book) =>book.genres);


// z-13
// // Пиши код ниже этой строки
// const getUserNames = users => {
//     const names = users.map(user => user.name);
// return names;
//   };
//   // Пиши код выше этой строки


// z-14
// // Пиши код ниже этой строки
// const getUserEmails = users => {
//   const emails = users.map(user => user.email);  
// return emails;
//   };
//   // Пиши код выше этой строки


// z-15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number= number % 2===0);
// const oddNumbers = numbers.filter(number => number= number % 2!==0);


// z-16
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book=> book.genres);
// console.table(allGenres);

// const uniqueGenres = allGenres.filter((genre, index, arr) => arr.indexOf(genre) === index);

// console.table(uniqueGenres);