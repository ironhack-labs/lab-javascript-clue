// ITERATION 1

// Suspects Collection
const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 22,
    description: "Blond",
    image: "Bodybuilder",
    color: "Red"
  },
  {
    firstName: "Lionel",
    lastName: "Messi",
    occupation: "Football",
    age: 25,
    description: "Tanned",
    image: "Weak",
    color: "Purple"
  },
  {
    firstName: "Arnold",
    lastName: "schwarzenegger",
    occupation: "Actor",
    age: 28,
    description: "Brown",
    image: "Movie star",
    color: "Blue"
  },
  {
    firstName: "Mark",
    lastName: "Zuckerberg",
    occupation: "Founder",
    age: 30,
    description: "Blond",
    image: "Casual",
    color: "Blue"
  },
  {
    firstName: "Alberto",
    lastName: "Chicote",
    occupation: "Chef",
    age: 40,
    description: "Redhead",
    image: "Fat",
    color: "White"
  },
  {
    firstName: "Pedro",
    lastName: "Sanchez",
    occupation: "Politician",
    age: 45,
    description: "Brown",
    image: "Suite",
    color: "Red"
  }
];

// Rooms Collection
const roomsArray = [
  { name: "room1" },
  { name: "room2" },
  { name: "room3" },
  { name: "room4" },
  { name: "room5" },
  { name: "room6" },
  { name: "room7" },
  { name: "room8" },
  { name: "room9" },
  { name: "room10" },
  { name: "room11" },
  { name: "room12" },
  { name: "room13" },
  { name: "room14" },
  { name: "room15" }
];

// Weapons Collection
const weaponsArray = [
  { name: "Sniper", weight: 6 },
  { name: "AK47", weight: 8 },
  { name: "Bazooka", weight: 9 },
  { name: "Machinegun", weight: 6 },
  { name: "M-16", weight: 4 },
  { name: "Machete", weight: 1 },
  { name: "Knife", weight: 2 },
  { name: "Poison", weight: 6 },
  { name: "Axe", weight: 7 }
];

// ITERATION 2

function selectRandom(array) {
  return (random = array[Math.floor(Math.random() * array.length)]);
}

// ITERATION 3

function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
  };
}

function revealMystery(pickMystery) {
  return (
    pickMystery.suspect.firstName +" "+
    pickMystery.suspect.lastName +
    " killed Mr. Boddy using the " +
    pickMystery.weapon.name +
    " in the " +
    pickMystery.room.name+"!"
  );
}
