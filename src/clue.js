// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 34,
    description: "grey",
    image: "exists",
    color: "white",
  },
  {
    firstName: "Heena",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 34,
    description: "grey",
    image: "exists",
    color: "white",
  },
  {
    firstName: "Randel",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 34,
    description: "grey",
    image: "exists",
    color: "white",
  },
  {
    firstName: "Madolf",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 34,
    description: "grey",
    image: "exists",
    color: "white",
  },
  {
    firstName: "Ramola",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 34,
    description: "grey",
    image: "exists",
    color: "white",
  },
  {
    firstName: "Kajol",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 34,
    description: "grey",
    image: "exists",
    color: "white",
  },

  // ...
];

// Rooms Array

const roomsArray = [{ name: "ballroom" }, { name: "patio" }, { name: "garden" }, { name: "pool" }, { name: "dining" }, { name: "casio" }, { name: "restroom" }, { name: "porche" }, { name: "roof" }, { name: "balcony" }, { name: "washroom" }, { name: "lounge" }, { name: "forest" }, { name: "jungle" }, { name: "room" }];

// Weapons Array

const weaponsArray = [
  { name: "AK47", weight: 48 },
  { name: "rope", weight: 30 },
  { name: "bat", weight: 26 },
  { name: "stone", weight: 28 },
  { name: "rod", weight: 25 },
  { name: "brick", weight: 80 },
  { name: "poison", weight: 20 },
  { name: "log", weight: 12 },
  { name: "needle", weight: 10 },
];

// ITERATION 2

function selectRandom(array) {
  let randomNumber = Math.floor(Math.random() * array.length);

  return array[randomNumber];
}
let suspectList = selectRandom(suspectsArray);
let weaponList = selectRandom(weaponsArray);
let roomList = selectRandom(roomsArray);
//let selectedMystery = {};
let pickMystery = function () {
  let envelope = {
    suspect: suspectList,
    weapon: weaponList,
    room: roomList,
  };
  return envelope;
};

// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}
