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
// ];


// z-16
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book=> book.genres);
// console.table(allGenres);

// const uniqueGenres = allGenres.filter((genre, index, arr) => arr.indexOf(genre) === index);

// console.table(uniqueGenres);


// z-17
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);


// z-18
// // Пиши код ниже этой строки

// const getUsersWithEyeColor = (users, color) => {
// const colorEyes = users.filter((user) => user.eyeColor === color);
// return colorEyes;
// };

// // Пиши код выше этой строки




const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]

// z-19
// // Пиши код ниже этой строки

// const getUsersWithAge = (users, minAge, maxAge) => {
//     const ageUser = users.filter((user) => user.age > minAge && user.age < maxAge);
   
//     // console.log(ageUser);
// return ageUser;
// };
// // console.table(getUsersWithAge(users,20,30));
// // getUsersWithAge(users,30,40);
// // Пиши код выше этой строки


// z-20
// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   const friend = users.filter(user =>
//     user.friends.includes(friendName)
//     );
//     //2
//      console.log(friend);
    
//     return friend;
//     //1
     
// };
// // Пиши код выше этой строки

// //2
//  getUsersWithFriend(users, 'Briana Decker')

// //1
// console.log(getUsersWithFriend(users, 'Briana Decker'));


// z-21
// // Пиши код ниже этой строки
// const getFriends = (users) => {

//     const allFriens = users.flatMap(user => user.friends);
    
//     const unicFriends = allFriens.filter((friend, index, arr) => arr.indexOf(friend) === index);
    
//   return unicFriends;
// };
// // Пиши код выше этой строки
// console.log(getFriends(users));


// z-22
// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//    const activ = users.filter(user=> user.isActive===true)
//    return activ;
// };
// // Пиши код выше этой строки


// z-23
// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//   const activOff = users.filter(user=> user.isActive!==true)
//     return activOff; 
// };
// // Пиши код выше этой строки


// z-24
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book=> book.title===BOOK_TITLE);
// const bookByAuthor = books.find(book=> book.author===AUTHOR);


// console.log(bookWithTitle);
// console.log(bookByAuthor);


// z-25
// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//   const userEmail = users.find((user)=> user.email===email);
//   return userEmail;
// };
// // Пиши код выше этой строки


// z-26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((value)=> value = value % 2===0);
// const eachElementInFirstIsOdd = firstArray.every((value)=> value = value % 2!==0);

// const eachElementInSecondIsEven = secondArray.every(value=> value =value % 2===0);
// const eachElementInSecondIsOdd = secondArray.every((value)=>value =value %2 !==0);

// const eachElementInThirdIsEven = thirdArray.every(value=> value =value % 2===0);
// const eachElementInThirdIsOdd = thirdArray.every((value)=>value =value %2 !==0);


// z-27
// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//  const userIsactiv = users.every((user)=> user.isActive===true);
//   return userIsactiv;
// };
// // Пиши код выше этой строки


// z-28
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(value=> value=value %2===0);
// const anyElementInFirstIsOdd = firstArray.some(value=>value=value%2!==0);

// const anyElementInSecondIsEven = secondArray.some(value=> value=value %2===0);
// const anyElementInSecondIsOdd = secondArray.some(value=>value=value%2!==0);

// const anyElementInThirdIsEven = thirdArray.some(value=> value=value %2===0);
// const anyElementInThirdIsOdd = thirdArray.some(value=>value=value%2!==0);


// z-29
// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//   const activUsers = users.some((user)=> user.isActive===true);
//   return activUsers;
// };
// // Пиши код выше этой строки


// z-30
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acum, playtime)=> {
// 	return acum + playtime;
// }, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;


// z-31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total,player)=> {
// return total + player.playtime/player.gamesPlayed;
// },0);


// z-32
// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//    const summBalance = users.reduce((total,user)=>{
//    	return total = total + user.balance;
//    },0);
//   return summBalance;
// };
// // Пиши код выше этой строки
// // 2
// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//    const summBalance = users.reduce((total,user)=>
//    	 total = total + user.balance,0);
//   return summBalance;
// };
// // Пиши код выше этой строки



// z-33
// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//    const friendsOrder = users.reduce((total,user)=>
//    total= total + user.friends.length,0);
//   return friendsOrder;
// };
// // Пиши код выше этой строки


// z-34
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();


// z-35
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);


// z-36
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


// z-37
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstAuthor,secondAuthor)=>
// firstAuthor.author.localeCompare(secondAuthor.author));

// const sortedByReversedAuthorName = [...books].sort((firstAuthor,secondAuthor)=>
// secondAuthor.author.localeCompare(firstAuthor.author));

// const sortedByAscendingRating = [...books].sort(
// (firstAuthor,secondAuthor)=>
//   firstAuthor.rating-secondAuthor.rating
// );

// const sortedByDescentingRating = [...books].sort(
// (firstAuthor,secondAuthor)=>
//   secondAuthor.rating-firstAuthor.rating
// );


// z-38
// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//     const balansUsers = [...users].sort((firstUser, secondUser) =>
//         firstUser.balance - secondUser.balance);
  
//   return balansUsers;
// };
// // Пиши код выше этой строки