// We have an array of *OBJECTS* listing key details *PER* character
var characters = [
  {firstName: "Jacob", lastName: "Green", color: "Green"},
  {firstName: "Doctor", lastName: "Orchid", color: "White"},
  {firstName: "Victor", lastName: "Plum", color: "Purple"},
  {firstName: "Kassandra", lastName: "Scarlet", color: "Red"},
  {firstName: "Eleanor", lastName: "Peacock", color: "Blue"},
  {firstName: "Jack", lastName: "Mustard", color: "Yellow"}
];

// We have an array of weapons available
var weapons = [
  {weapon: "Rope", damage: 30},
  {weapon: "Knife", damage: 40},
  {weapon: "Candle Stick", damage: 5},
  {weapon: "Dumbbell", damage: 50},
  {weapon: "Posion", damage: 100},
  {weapon: "Axe", damage: 80},
  {weapon: "Trophy", damage: 60},
  {weapon: "Pistol", damage: 100}
];

var rooms = [
  "Dining Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Libary",
  "Billiard Room",
  "Lounge",
  "Ball Room",
  "Hall",
  "A spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "A Patio",
];


// Creating a function to randomly select a property in our Arrary
// Element is describing our Arrary
function randomize(element){
// Creating a Variable to store random number, flooring it whole 0-5
 var randomNumber = Math.floor(Math.random() * element.length)
 return element[randomNumber];
}

console.log(randomize(characters));
console.log(randomize(weapons));
console.log(randomize(rooms));
