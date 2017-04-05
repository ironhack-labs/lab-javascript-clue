// Iteration 1 - Creating the cards

var gameCharacters = [
  { firstName: 'Jacob', lastName: 'Green', color: 'green', occupation: 'anglican priest', age: 30, description: 'In North America, he is Mr. Green, who has taken many money-oriented roles from mobster to businessman.' },
  { firstName: 'Doctor', lastName: 'Orchid', color: 'white', occupation: 'biologist', age: 40, description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning" },
  { firstName: 'Victor', lastName: 'Plum', color: 'purple', occupation: 'video game developer', age: 50, description: 'He is a billionaire video game designer who is embracing his new popularity.' },
  { firstName: 'Kasandra', lastName: 'Scarlet', color: 'red', occupation: 'movie star', age: 55, description: 'She is an A-list movie star whose past haunts her.' },
  { firstName: 'Eleanor', lastName: 'Peacock', color: 'blue', occupation: 'ritch woman', age: 60, description: 'She is from a wealthy family and uses her status and money to earn popularity.' },
  { firstName: 'Jack', lastName: 'Mustard', color: 'yellow', occupation: 'former fotball player', age: 51, description: 'He is a former football player who tries to get by on his former glory.' },
];

//console.log(gameCharacters[0].firstName + ' ' + gameCharacters[0].lastName);

var availableWeapons = [
    { name: "Knife" },
    { name: "Candlestick" },
    { name: "Dumbbell" },
    { name: "Axe" },
    { name: "Bat" },
    { name: "Trophy" },
    { name: "Pistol" }
];

//console.log(availableWeapons.length);
// console.log(availableWeapons[0].name);

var houseRooms = [
  "Dining room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard room",
  "Lounge",
  "Ballroom",
  "Hall",
  "A spa",
  "Living room",
  "Observatory",
  "Theater",
  "Guest house",
  "A patio"
];

// console.log(houseRooms);

// console.log(houseRooms[0]);

// Iteration 2 - Creating and revealing the mystery

// Create a method to randomly select one element from a card stack.
/*gameCharacters.randomCharacter  = function () {
    var random = Math.floor(Math.random() * gameCharacters.length);
    return gameCharacters[random].firstName + ' ' + gameCharacters[random].lastName
}*/

function pickUpRadomly(array){
    var random = Math.floor(Math.random() * array.length);
    return array[random]
}

/*availableWeapons.randomWeapon = function () {
    var random = Math.floor(Math.random() * availableWeapons.length);
    return availableWeapons[random].name;
}

houseRooms.randomRoom = function () {
    var random = Math.floor(Math.random() * houseRooms.length);
    return houseRooms[random];
}
*/
/*console.log("hello", gameCharacters.randomCharacter());*/

/*console.log(availableWeapons.randomWeapon());
console.log(houseRooms.randomRoom());*/

// Create another function that calls the method above once for each card stack.

/*var randCharWeapRoom = function() {
    console.log(gameCharacters.randomCharacter() + ' ' + availableWeapons.randomWeapon() + ' ' + houseRooms.randomRoom());
}
*/
/*randCharWeapRoom();*/

var char = pickUpRadomly(gameCharacters)
var weapon = pickUpRadomly(availableWeapons) 
var room = pickUpRadomly(houseRooms);
/*console.log("Print out Random Characters: ", char.firstName + ' ' + char.lastName);
console.log("Print out Random Weapon: ", weapon.name);
console.log("Print out Random Room:", room);*/

// Place the “Case File Confidential” in a virtual envelope. 

var virtualEnvelope = {
    firstname: char.firstName,
    lastName: char.lastName,
    weapon: weapon.name,
    room: room
}

// Create a method to reveal the mystery.

console.log(virtualEnvelope);
