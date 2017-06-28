//Declare the characters with objects, store the objects in an array: characterStack--
//Declare the weapons with objects, store the objects in an array: weaponStack--
//Declare the rooms with objects store the rooms in an array: roomStack --
//Push All those things to an object 'Game' --
//Iterate through object
//create function that randomly selects card from stack
//create function that iterates the above function for each stack
//store elements randomly selected into 'Virtual Confidential Envelope'
//Create a method to reveal the mystery

var suspects = [];

var character1 = {
firstname: "Jacob",
secondname: "Green",
Age: 35,
occupation: "Middle Man"};

var character2 = {
firstname: "Doctor",
secondname: "Orchid",
Age: 30,
occupation: "Doctor"};

var character3 = {
firstname: "Victor",
secondname: "Plum",
Age: 25,
occupation: "Billionaire Video Game Designer"};

var character4 = {
firstname: "Kasandra",
secondname: "Scarlet",
Age: 38,
occupation: "Movie Star"};

var character5 = {
firstname: "Eleanor ",
secondname: "Peacock",
Age: 48,
occupation: "Trust-Fund Baby"};

var character6 = {
firstname: "Jack",
secondname: "Mustard",
Age: 29,
occupation: "Former Pro-Athlete"};

suspects.push(character1, character2, character3, character4, character5, character6);

console.log(suspects);


var weapons = [];

weapon1 = {
  item: "rope",
  method: "quiet",
};

weapon2 = {
  item: "knife",
  method: "up close and personal",
};

weapon3 = {
  item: "candlestick",
  method: "creative",
};

weapon4 = {
  item: "Dumbbell",
  method: "brutal",
};

weapon5 = {
  item: "poison",
  method: "sneaky",
};

weapon6 = {
  item: "axe",
  method: "messy",
};

weapon7 = {
  item: "bat",
  method: "0 fucks",
};

weapon8 = {
  item: "trophy",
  method: "sporadic",
};

weapon9 = {
  item: "Pistol",
  method: "quick and easy",
};

weapons.push(weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9);

console.log(weapons);


var mansion = [];

room1 = {
  roomName: "Dining Room"
};

room2 = {
  roomName: "Conservatory"
};

room3 = {
  roomName: "Kitchen"
};

room4 = {
  roomName: "Study"
};

room5 = {
  roomName: "Library"
};

room6 = {
  roomName: "Billiard Room"
};

room7 = {
  roomName: "Lounge"
};

room8 = {
  roomName: "Ballroom"
};

room9 = {
  roomName: "Hall"
};

room10 = {
  roomName: "Spa"
};

room11 = {roomName: "Living Room"};
room12 = {roomName: "Observatory"};
room13 = {roomName: "Theater"};
room14 = {roomName: "Guest House"};
room15 = {roomName: "Patio"};

mansion.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15);

console.log(mansion);

var game = {

characters: [suspects],
weapons: [weapons],
rooms: [mansion]
};

console.log(game);

characterStack = suspects;
weaponStack = weapons;
roomStack = mansion;

function getRandom(){
getSuspect = characterStack[Math.floor(Math.random()*characterStack.length)];
console.log("Aha! it was " + getSuspect.firstname + " " + getSuspect.secondname +  "!");
}
getRandom();

var caseFileConfidential = " ";

function solveMystery(){
  getSuspect = characterStack[Math.floor(Math.random()*characterStack.length)];
  getWeapon = weaponStack[Math.floor(Math.random()* weaponStack.length)];
  getRoom = roomStack[Math.floor(Math.random()* roomStack.length)];
  caseFileConfidential = console.log("AHA! It Was " + getSuspect.firstname + " " + getSuspect.secondname + ", with a " + getWeapon.item + ", in the " + getRoom.roomName + "!!!");
}

solveMystery();
