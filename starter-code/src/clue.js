// Characters
const characters = [
]

// //mrGreen
// //"first_name:   Jacob
// last_name:    Green
// color:        green
// description:  He has a lot of connections
// age:          45
// image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
// occupation:   Entrepreneur

// drOrchid
// first_name:   Doctor
// last_name:    Orchid
// color:        white
// description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
// age:          26
// image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
// ocupation:   Scientist

// profPlum
// first_name:   Victor
// last_name:    Plum
// color:        purple
// description:  Billionare video game designer
// age:          22
// image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
// occupation:   Designer

// missScarlet
// first_name:   Kasandra
// last_name:    Scarlet
// color:        red
// description:  She is an A-list movie star with a dark past
// age:          31
// image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
// occupation:   Actor

// mrsPeacock
// first_name:   Eleanor
// last_name:    Peacock
// color:        blue
// description:  She is from a wealthy family and uses her status and money to earn popularity
// age:          36
// image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
// occupation:   Socialité

// mrMustard
// first_name:   Jack
// last_name:    Mustard
// color:        yellow
// description:  He is a former football player who tries to get by on his former glory
// age:          62
// image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
// occupation:   Retired Football player

// // Weapons

// name: rope        ---   weight: 10
// name: knife       ---   weight: 8
// name: candlestick ---   weight: 2
// name: dumbbell    ---   weight: 30
// name: poison      ---   weight: 2
// name: axe         ---   weight: 15
// name: bat         ---   weight: 13
// name: trophy      ---   weight: 25
// name: pistol      ---   weight: 20

// // Rooms
// name: Dinning Room
// name: Conservatory
// name: Kitchen
// name: Study
// name: Library
// name: Billiard Room
// name: Lounge
// name: Ballroom
// name: Hall
// name: Spa
// name: Living Room
// name: Observatory
// name: Theater
// name: Guest House
// name: Patio
// */

// Characters Collection
//   let mrGreen = {
//     first_name:"Jacob",
//     last_name:"Green",
//     color: "green",
//     description:"He has a lot of connection",
//     age: 45,
//     image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
//     occupation:"Entrepreneur"
//     };
//     let drOrchid = {
//     first_name:   "Doctor",
//     last_name:    "Orchid",
//     color:        "white",
//     description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
//     age:           26,
//     image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
//     ocupation:   "Scientist"
//     };
//     let profPlum = {
//     first_name:   "Victor",
//     last_name:    "Plum",
//     color:        "purple",
//     description:  "Billionare video game designer",
//     age:          22,
//     image:        ",https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
//     occupation:   "Designer",
//     };
//     let missScarlet = {
//     first_name:   "Kasandra",
//     last_name:    "Scarlet",
//     color:        "red",
//     description:  "She is an A-list movie star with a dark past",
//     age:          31,
//     image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
//     occupation:   "Actor"
//     };
//     let mrsPeacock = {
//     first_name:   "Eleanor",
//     last_name:    "Peacock",
//     color:        "blue",
//     description:  "She is from a wealthy family and uses her status and money to earn popularity",
//     age:          36,
//     image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
//     occupation:   "Socialité"
//     };
//     let mrMustard = {
//     first_name:   "Jack",
//     last_name:    "Mustard",
//     color:        "yellow",
//     description:  "He is a former football player who tries to get by on his former glory",
//     age:          62,
//     image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
//     occupation:   "Retired Football player"
//     }

// var charactersArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard]

// //WEAPONS
//     let rope = {name: "rope", weight: 10};
//     let candlestick = {name: "candlestick", weight: 2};
//     let knife = {name: "knife", weight: 8};
//     let dumbbell = {name: "dumbbell", weight: 30};
//     let poison = {name: "poison", weight: 2};
//     let axe = {name: "axe", weight: 15};
//     let bat = {name: "bat", weight: 13};
//     let trophy = {name: "trophy", weight: 25};
//     let pistol = {name: "pistol",weight: 20};

// var weaponsArray = [rope,candlestick,knife,dumbbell,poison,axe,bat,trophy,pistol]

// //ROOMS
//     let diningRoom = {name: "Dining Room"};
//     let Conservatory = {name: "Conservatory"};
//     let Kitchen = {name: "Kitchen"};
//     let Study = {name: "Study"};
//     let Library = {name: "Library"};
//     let billiardRoom = {name: "Billiard Room"};
//     let Lounge = {name: "Lounge"};
//     let Ballroom = {name: "Ballroom"};
//     let Hall = {name: "Hall"};
//     let Spa = {name: "Spa"};
//     let livingRoom = {name: "Living Room"};
//     let Observatory = {name: "Observatory"};
//     let Theater = {name: "Theater"};
//     let guestHouse = {name: "Guest House"};
//     let Patio = {name: "Patio"};
  
// var roomsArray=[diningRoom,Conservatory,Kitchen,Study,Library,billiardRoom,lounge,
// Ballroom,Hall,Spa,livingRoom,Observatory,Theater,guestHouse,Patio]

// //Functions
// function randomSelector(array){
//   if (array === 0) return undefined;
//   let random = array[Math.floor(Math.random()* array.length)];
//   return random
// }


// function pickMistery(){
//   let random = [];

//   random.push(randomSelector(charactersArray));
//   random.push(randomSelector(weaponsArray));
//   random.push(randomSelector(roomsArray));

//   return random
// }

let mrGreen = {
  first_name: 'Jacob',
  last_name: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation: 'Entrepreneur'
};
let drOrchid = {
  first_name: 'Doctor',
  last_name: 'Orchid',
  color: 'white',
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age: 26,
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  ocupation: 'Scientist'
};
let profPlum = {
  first_name: 'Victor',
  last_name: 'Plum',
  color: 'purple',
  description: 'Billionare video game designer',
  age: 22,
  image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation: 'Designer'
};
let missScarlet = {
  first_name: 'Kasandra',
  last_name: 'Scarlet',
  color: 'red',
  description: 'She is an A-list movie star with a dark past',
  age: 31,
  image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation: 'Actor'
};
let mrsPeacock = {
  first_name: 'Eleanor',
  last_name: 'Peacock',
  color: 'blue',
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  age: 36,
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation: 'Socialité'
};
let mrMustard = {
  first_name: 'Jack',
  last_name: 'Mustard',
  color: 'yellow',
  description: 'He is a former football player who tries to get by on his former glory',
  age: 62,
  image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation: 'Retired Football player'
}

// Rooms' Collection
let DinningRoom = { name: 'Dinning Room' };
let Conservatory = { name: 'Conservatory' };
let Kitchen = { name: 'Kitchen' };
let Study = { name: 'Study' };
let Library = { name: 'Library' };
let billiardRoom = { name: 'Billiard Room' };
let Lounge = { name: 'Lounge' };
let Ballroom = { name: 'Ballroom' };
let Hall = { name: 'Hall' };
let Spa = { name: 'Spa' };
let livingRoom = { name: 'Living Room' };
let Observatory = { name: 'Observatory' };
let Theater = { name: 'Theater' };
let guestHouse = { name: 'Guest House' };
let Patio = { name: 'Patio' };

// Weapons Collection
let rope = { name: 'rope', weight: 10 };
let candlestick = { name: 'candlestick', weight: 2 };
let knife = { name: 'knife', weight: 8 };
let dumbbell = { name: 'dumbbell', weight: 30 };
let poison = { name: 'poison', weight: 2 };
let axe = { name: 'axe', weight: 15 };
let bat = { name: 'bat', weight: 13 };
let trophy = { name: 'trophy', weight: 25 };
let pistol = { name: 'pistol', weight: 20 };

//Array of Characters, rooms, and weapons
let charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
let roomsArray = [DinningRoom, Conservatory, Kitchen, Study, Library, billiardRoom, Lounge, Ballroom, Hall, Spa, livingRoom, Observatory, Theater, guestHouse, Patio];
let weaponsArray = [rope, candlestick, knife, dumbbell, poison, axe, bat, trophy, pistol];

// Functions
function randomSelector(array) {
  let random = array[Math.floor(Math.random() * array.length)];
  return random
}
function pickMistery() {
  let random = [];
  random.push(randomSelector(charactersArray));
  random.push(randomSelector(weaponsArray));
  random.push(randomSelector(roomsArray));
  return random
}
function revealMistery(){
 let mystery=pickMistery()

 let fName = mystery[0].first_name;
 let lName = mystery[0].last_name;
 let weapon= mystery[1].name;
 let place = mystery[2].name;

 return fName + " " + lName + " killed Mr.Boddy using the " + weapon + " in the " + place + "!!!!"

}