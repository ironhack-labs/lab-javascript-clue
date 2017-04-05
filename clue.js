suspects = [];
weapons = [];
rooms = [];

// var suspect1 = {
//   "firstName": "Jacob",
//   "lastName": "Green",
//   "color": "green",
//   "occupation": "Corrupt Official",
//   "age": "42",
//   "description": "He has a lot of connections, and is always willing to help people out - for a price.",
//   "images": []
// };
// var suspect2 = {
//   "firstName": "Doctor",
//   "lastName": "Orchid",
//   "color": "white",
//   "occupation": "Experimental Biologist",
//   "age": "34",
//   "description": "",
//   "images": []
// };
// var suspect3 = {
//   "firstName": "Victor",
//   "lastName": "Plum",
//   "color": "purple",
//   "occupation": "Game Designer",
//   "age": "34",
//   "description": "",
//   "images": []
// };
// var suspect4 = {
//   "firstName": "Kasanadra",
//   "lastName": "Scarlet",
//   "color": "red",
//   "occupation": "Actress",
//   "age": "27",
//   "description": "",
//   "images": []
// };
// var suspect5 = {
//   "firstName": "Eleanor",
//   "lastName": "Peacock",
//   "color": "blue",
//   "occupation": "Socialite",
//   "age": "60",
//   "description": "",
//   "images": []
// };
// var suspect6 = {
//   "firstName": "Jack",
//   "lastName": "Mustard",
//   "color": "yellow",
//   "occupation": "Retired",
//   "age": "36",
//   "description": "",
//   "images": []
// };

function Suspect(firstName, lastName, color, occupation, age, description, images) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.color = color;
  this.occupation = occupation;
  this.age = age;
  this.description = description;
  this.images = images;
}

suspects.push(new Suspect("Jacob", "Green", "green", "Corrupt Official", 42, "He has a lot of connections, and is always willing to help people out - for a price.", []));
suspects.push(new Suspect("Jack", "Mustard", "yellow", "Retired", 36, "", []));


var weapon1 = {
  "name": "axe",
  "previousOwner": "Slash"
};
var weapon2 = {
  "name": "knife",
  "previousOwner": "OJ"
};
var weapon3 = {
  "name": "rope",
  "previousOwner": "Barney"
};
var weapon4 = {
  "name": "candlestick",
  "previousOwner": "Beast"
};
var weapon5 = {
  "name": "dumbbell",
  "previousOwner": "Dwayne Johnson"
};
var weapon6 = {
  "name": "poison",
  "previousOwner": "Venusaur"
};
var weapon7 = {
  "name": "bat",
  "previousOwner": "Babe Ruth"
};
var weapon8 = {
  "name": "trophy",
  "previousOwner": "Ophray"
};
var weapon9 = {
  "name": "pistol",
  "previousOwner": "John Wilkes Boothe"
};

var room1 = {
  "name" : "dining room"
};
var room2 = {
  "name" : "conservatory"
};
var room3 = {
  "name" : "kitchen"
};
var room4 = {
  "name" : "study"
};
var room5 = {
  "name" : "library"
};
var room6 = {
  "name" : "billiard room"
};
var room7 = {
  "name" : "lounge"
};
var room8 = {
  "name" : "ballroom"
};
var room9 = {
  "name" : "hall"
};
var room10 = {
  "name" : "spa"
};
var room11 = {
  "name" : "living room"
};
var room12 = {
  "name" : "observatory"
};
var room13 = {
  "name" : "theater"
};
var room14 = {
  "name" : "guest house"
};
var room15 = {
  "name" : "patio"
};

function fullName(character){
  return character.firstName + " " + character.lastName;
}

// suspects.push(suspect1,suspect2,suspect3,suspect4,suspect5,suspect6);
weapons.push(weapon1,weapon2,weapon3,weapon4,weapon5,weapon6,weapon7,weapon8,weapon9);
rooms.push(room1,room2,room3,room4,room5,room6,room7,room8,room9,room10,room11,room12,room13,room14,room15);

var victim        = suspects[Math.floor(Math.random() * (suspects.length - 0) + 0)];

var notASuicide = false;
var murderer;

while(!notASuicide){
  murderer = suspects[Math.floor(Math.random() * (suspects.length - 0) + 0)];
  if (murderer != victim){
    notASuicide = true;
  }
}

var envelope = {
  "victim"       : victim,
  "murderer"     : murderer,
  "murderWeapon" : weapons[Math.floor(Math.random() * (weapons.length - 0) + 0)],
  "crimeScene"   : rooms[Math.floor(Math.random() * (rooms.length - 0) + 0)]
};

function revealMystery(envelope) {

  var v  = envelope.victim;
  var m  = envelope.murderer;
  var mw = envelope.murderWeapon;
  var cs = envelope.crimeScene;

  var mystery = (fullName(m) + " murdered " +
  fullName(v) + " with " +
  mw.previousOwner + "'s " +
  mw.name + " " +
  "in the " + cs.name + ".");

  console.log(mystery);
}

revealMystery(envelope);
