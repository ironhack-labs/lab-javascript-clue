
//--------------------//
// Cluedo
// there is a smalle frontend, see the index.html
//--------------------//

// Characters Collection
var charactersArray = [

  {
    character: "mrGreen",
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://casinoslegaal.com/wp-content/uploads/2017/03/mrg.png",
    occupation: "Entrepreneur"
  },
  {
    character: "drOrchid",
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation: "Scientist"
  },
  {
    character: "profPlum",
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  },
  {
    character: "missScarlet",
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
  },
  {
    character: "mrsPeacock",
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
  },
  {
    character: "mrMustard",
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
  }
];

// Rooms' Collection
var roomsArray = [
  { name: "Dining Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" }
];

// Weapons Collection
var weaponsArray = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 }
];

//--------------------//
// Random selector
//--------------------//
function randomSelector(array) {
  // random number 0 till length - 1 (floor). random number is 0 till 0.99
  return array[Math.floor(Math.random() * array.length)];
};

 
//--------------------//
// Create a mystery (the object way)
// This was version 1. As an object. Though Jasmine demanded an array :) see below.
//--------------------//
// function pickMistery() {
//   var envelop = {};
//   envelop.character = randomSelector(charactersArray);
//   envelop.weapon = randomSelector(weaponsArray);
//   envelop.room = randomSelector(roomsArray);
//   return envelop;
// };

// var misteryEnvelop = pickMistery();
// console.log(misteryEnvelop);

// // Reveal the mystery
// console.log(misteryEnvelop.character.first_name + " " + misteryEnvelop.character.last_name +
//   " killed Mr.Boddy using the " + misteryEnvelop.weapon.name + " in the " + misteryEnvelop.room.name + "!!!!");


//--------------------//
// Create a mystery (the array way)
//--------------------//
function pickMistery() {
  var envelop = [];
  envelop.push(randomSelector(charactersArray));
  envelop.push(randomSelector(weaponsArray));
  envelop.push(randomSelector(roomsArray));
  return envelop;
};

var misteryEnvelop = pickMistery();
console.log(misteryEnvelop);

//--------------------//
// Reveal the mystery
//--------------------//
function revealMistery(misteryEnvelop) {
  return (misteryEnvelop[0].first_name + " " + misteryEnvelop[0].last_name +
    " killed Mr.Boddy using the " + misteryEnvelop[1].name + " in the " + misteryEnvelop[2].name + "!!!!");
};

console.log(revealMistery(misteryEnvelop));

 
 
//--------------------//
// js to HTML
//--------------------//
// Character
document.getElementById("character").src = misteryEnvelop[0].image;
// document.getElementById("character-name").innerHTML = (misteryEnvelop[0].first_name + " " + misteryEnvelop[0].last_name); 
document.getElementById("character-firstname").innerHTML = "First name: " + misteryEnvelop[0].first_name;
document.getElementById("character-lastname").innerHTML = "Last name: " + misteryEnvelop[0].last_name;
document.getElementById("character-age").innerHTML = "Age: " + misteryEnvelop[0].age;
document.getElementById("character-profession").innerHTML = "Profession: " + misteryEnvelop[0].profession;
document.getElementById("character-description").innerHTML = "Description: " + misteryEnvelop[0].description;
// Weapon
document.getElementById("weapon-name").innerHTML = "Name: " + misteryEnvelop[1].name; 
document.getElementById("weapon-weight").innerHTML = "Weight: " + misteryEnvelop[1].weight;
// Room
document.getElementById("room-name").innerHTML = misteryEnvelop[2].name;
 