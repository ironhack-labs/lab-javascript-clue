// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "",
    color: "green",
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "",
    color: "white",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "",
    color: "purple",
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "",
    color: "red",
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialite",
    age: 36,
    description:
      "She is a wealthy and influential woman with a keen interest in art",
    image: "",
    color: "blue",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football Player",
    age: 62,
    description: "He is a former football player with a shady past",
    image: "",
    color: "yellow",
  },
];

// Rooms Array

const roomsArray = [
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
  { name: "Patio" },
];

// Weapons Array

const weaponsArray = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 },
];

// ITERATION 2

function selectRandom(arr) {
  let result = arr[Math.floor(Math.random() * arr.length)];

  return result;
}

function pickMystery() {
  let result = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };

  return result;
}

// ITERATION 3

function revealMystery(envelope) {
  let result = `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;

  return result;
}

console.log(revealMystery(pickMystery()));
