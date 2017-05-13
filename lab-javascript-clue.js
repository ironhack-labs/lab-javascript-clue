var suspects = [];
var rooms = [];
var weapons = [];

//Characters of game, 6 in total.
var characters = [{
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Butler",
    age: 25,
    description: "He has a lot of connections and is always willing to help people out -- for a price"
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "biologist",
    age: 20,
    description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning (Wonder what happened with Mrs. White?)."
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "video game designer",
    age: 29,
    description: "He has a lot of connections and is always willing to help people out -- for a price"
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "movie star",
    age: 28,
    description: "She is from a wealthy family and uses her status and money to earn popularity."
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "it-girl",
    age: 30,
    description: "She is from a wealthy family and uses her status and money to earn popularity."
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "former football",
    age: 39,
    description: "He is a former football player who tries to get by on his former glory."
  },
];

//Weapons of the game
weapons = [{
    name: "Rope",
    weight: 0.5,
    color: "brown",
    damage: 1
  },
  {
    name: "Knife",
    weight: 0.1,
    color: "grey",
    damage: 3
  },
  {
    name: "Candlestick",
    weight: 0.7,
    color: "silver",
    damage: 2
  },
  {
    name: "Dumbbell",
    weight: 5,
    color: "black",
    damage: 2
  },
  {
    name: "Poison",
    weight: 0.1,
    color: "purple",
    damage: 3
  },
  {
    name: "Axe",
    weight: 3,
    color: "red",
    damage: 3
  },
  {
    name: "Bat",
    weight: 2,
    color: "brown",
    damage: 2
  },
  {
    name: "Trophy",
    weight: 1.5,
    color: "golden",
    damage: 2
  },
  {
    name: "Pistol",
    weight: 1.2,
    color: "black",
    damage: 3
  }
];

//rooms
rooms = [
  "Dining room", "Conservatory", "Kitchen", "Study", "Library", "Billiard room", "Lounge", "Ballroom", "Hall", "A spa", "Living room",
  "Observatory", "Theater", "Guest house", "A patio"
];


createMystery();

/**
 * Create a new mystery between weapons, rooms and characters.
 * @return -
 */
function createMystery() {
  var mystery = [];
  mystery.push(weapons[Math.floor(Math.random() * (weapons.length))]); // [ 0 to weapons max length]
  mystery.push(rooms[Math.floor(Math.random() * (rooms.length))]);
  mystery.push(characters[Math.floor(Math.random() * (characters.length))]);

 console.log(mystery);
  console.log("WEAPON: "+mystery[0].name+"\nROOM: "+mystery[1]+"\nSUSPECT: "+mystery[2].firstName);
}
