// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 25,
    description: "player",
    image: "img.jpg",
    color: "yellow",
  },
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 25,
    description: "player",
    image: "img.jpg",
    color: "yellow",
  },
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 25,
    description: "player",
    image: "img.jpg",
    color: "yellow",
  },
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 25,
    description: "player",
    image: "img.jpg",
    color: "yellow",
  },
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 25,
    description: "player",
    image: "img.jpg",
    color: "yellow",
  },
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 25,
    description: "player",
    image: "img.jpg",
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
console.log("hdsfhdsf");

function selectRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickMystery() {
  const randomObj = { suspect: "", weapon: "", room: "" };

  randomObj.suspect =
    suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
  randomObj.weapon =
    weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
  randomObj.room = roomsArray[Math.floor(Math.random() * roomsArray.length)];

  console.log("randomObj", randomObj);
  return randomObj;
}

// ITERATION 3
function revealMystery(mysteryFunction) {
  const mysteryObj = mysteryFunction;

  return `${mysteryObj.suspect.firstName} ${mysteryObj.suspect.lastName} killed Mr. Boddy using the ${mysteryObj.weapon.name} in the ${mysteryObj.room.name}!`;
}

console.log(revealMystery(pickMystery()));
