// ITERATION 1

// Suspects Collection
const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: "26",
    description: "Tall",
    image: "./Image/Jacob",
    color: "red"
  },
  {
    firstName: "Paul",
    lastName: "Green",
    occupation: "doctor",
    age: "40",
    description: "Kinda tall",
    image: "./Image/Paul",
    color: "yellow"
  },
  {
    firstName: "Mark",
    lastName: "Bin",
    occupation: "Engineer",
    age: "32",
    description: "short",
    image: "./Image/Mark",
    color: "grey"
  },
  {
    firstName: "Yosra",
    lastName: "Yousfi",
    occupation: "Software engineer",
    age: "29",
    description: "Kinda tall",
    image: "./Image/Yosra",
    color: "Blue"
  },
  {
    firstName: "Lucas",
    lastName: "Deuker",
    occupation: "Student",
    age: "26",
    description: "Tall",
    image: "./Image/Lucas",
    color: "White"
  },
  {
    firstName: "Emily",
    lastName: "Geller",
    occupation: "Cheff",
    age: "34",
    description: "short",
    image: "./Image/Emily",
    color: "Black"
  }
];

// Rooms Collection
const roomsArray = [
  { name: "Room 1" },
  { name: "Room 2" },
  { name: "Room 3" },
  { name: "Room 4" },
  { name: "Room 5" },
  { name: "Room 6" },
  { name: "Room 7" },
  { name: "Room 8" },
  { name: "Room 9" },
  { name: "Room 10" },
  { name: "Room 11" },
  { name: "Room 12" },
  { name: "Room 13" },
  { name: "Room 14" },
  { name: "Room 15" }
];
// Weapons Collection
const weaponsArray = [
  {
    name: "car",
    weight: 2000
  },
  {
    name: "hammer",
    weight: 10
  },
  {
    name: "poison",
    weight: 1
  },
  {
    name: "scissors",
    weight: 5
  },
  {
    name: "candle",
    weight: 5
  },
  {
    name: "knife",
    weight: 10
  },
  {
    name: "gun",
    weight: 30
  },
  {
    name: "corona",
    weight: 2
  },
  {
    name: "pumpgun",
    weight: 50
  }
];

// ITERATION 2
function selectRandom(array) {
  let randomlySelected = 0;
  randomlySelected = array[Math.floor(Math.random() * array.length)];
  return randomlySelected;
}

//Method 1
function pickMystery() {
  const mystery = {};
  mystery.suspect = selectRandom(suspectsArray);
  mystery.weapon = selectRandom(weaponsArray);
  mystery.roomArray = selectRandom(roomArray);
  return mystery;
}

//Method 2 : using the arrow fct
// const pickMystery = () =>
// ({
//     suspect: selectRandom(suspectsArray),
//     weapon: selectRandom(weaponsArray),
//     room: selectRandom(roomArray)
//   })

// ITERATION 3
function revealMystery(envelope) {
  const revealMessage = `${envelope.suspect.firstName} ${envelope.suspect.lastName}  killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name} !`;
  return revealMessage;
}

const mystr = pickMystery();
console.log(revealMystery(mystr));
