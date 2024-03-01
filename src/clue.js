// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Raphael",
    lastName: "Simon",
    occupation: "Business Analyst",
    age: 26,
    description: "Will give you the impression he does not like you at first",
    image: "1",
    color: "black",
  },
  {
    firstName: "Ivan",
    lastName: "Stoyanov",
    occupation: "Baker - Future Hacker",
    age: 26,
    description: "Puts too much salt in his food",
    image: "2",
    color: "multicolor",
  },
  {
    firstName: "Feryal",
    lastName: "Doubali",
    occupation: "Mother",
    age: 40,
    description: "Very generous with food",
    image: "3",
    color: "green",
  },
  {
    firstName: "Gwen",
    lastName: "Legrand",
    occupation: "Ruby Developer",
    age: 31,
    description: "Her personality changed after Covid",
    image: "4",
    color: "blue",
  },
  {
    firstName: "Alexis",
    lastName: "Moreau",
    occupation: "Professional juggler",
    age: 28,
    description: "Impresses grandmas on the train with his hacker skills",
    image: "5",
    color: "red",
  },
  {
    firstName: "Chris",
    lastName: "Miranda",
    occupation: "Anime enthusiast",
    age: 33,
    description: "Has saved the world from his nieces, but alas, not his house",
    image: "6",
    color: "purple",
  },
];

// Rooms Array

const roomsArray = [
  { name: "Kitchen" },
  { name: "Living Room" },
  { name: "Green Room" },
  { name: "Basement" },
  { name: "Toilets" },
  { name: "Bathroom" },
  { name: "Foyer" },
  { name: "Ballroom" },
  { name: "Bedroom" },
  { name: "Home Cinema" },
  { name: "Classroom" },
  { name: "Soundroom" },
  { name: "Garden" },
  { name: "Patio" },
  { name: "Playing room" },
];

// Weapons Array

const weaponsArray = [
  {
    name: "Toothbrush",
    weight: 2,
  },
  {
    name: "Ironhack bottle",
    weight: 2,
  },
  {
    name: "Bulk shaker",
    weight: 2,
  },
  {
    name: "Knife",
    weight: 2,
  },
  {
    name: "Fork",
    weight: 2,
  },
  {
    name: "Spoon",
    weight: 2,
  },
  {
    name: "Mug",
    weight: 2,
  },
  {
    name: "Lighter",
    weight: 2,
  },
  {
    name: "Shoe",
    weight: 2,
  },
];

// ITERATION 2

function selectRandom(arr) {
  if (arr == 0) {
    return undefined;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
  // select one element from the card stack randomly
}

function pickMystery() {
  let obj = {};
  obj.suspect = selectRandom(suspectsArray);
  obj.weapon = selectRandom(weaponsArray);
  obj.room = selectRandom(roomsArray);
  return obj;
  // returns an object with three properties: suspect, weapon, and room
}

console.log(pickMystery());

// ITERATION 3

function revealMystery(envelope) {
  //<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!

  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

console.log(revealMystery(pickMystery()));
