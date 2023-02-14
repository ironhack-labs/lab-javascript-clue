// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 30,
    description: " ",
    image: " ",
    color: "red",
  },
  {
    firstName: "Mary",
    lastName: "Iltis",
    occupation: "gardener",
    age: 27,
    description: " ",
    image: " ",
    color: "red",
  },
  {
    firstName: "Lutz",
    lastName: "Spencer",
    occupation: "Student",
    age: 18,
    description: " ",
    image: " ",
    color: "red",
  },
  {
    firstName: "Marcus",
    lastName: "Green",
    occupation: "rentner",
    age: 75,
    description: " ",
    image: " ",
    color: "red",
  },
  {
    firstName: "Lisa",
    lastName: "Marcus",
    occupation: "housewife",
    age: 55,
    description: " ",
    image: " ",
    color: "red",
  },
  {
    firstName: "Susanne",
    lastName: "Apple",
    occupation: "doctor",
    age: 46,
    description: " ",
    image: " ",
    color: "red",
  },
];

// Rooms Array

const roomsArray = [
  {
    name: "kitchen",
  },
  {
    name: "Livingroom",
  },
  {
    name: "cellar",
  },
  {
    name: "bathroom",
  },
  {
    name: "guestroom",
  },
  {
    name: "tv room",
  },
  {
    name: "closet",
  },
  {
    name: "childrens room",
  },
  {
    name: "attic",
  },
  {
    name: "room 1",
  },
  {
    name: "room 2",
  },
  {
    name: "room 3",
  },
  {
    name: "room 4",
  },
  {
    name: "room 5",
  },
  {
    name: "room 6",
  },
];

// Weapons Array

const weaponsArray = [
  {
    name: "knife",
    weight: 7,
  },
  {
    name: "bucket",
    weight: 15,
  },
  {
    name: "axt",
    weight: 10,
  },
  {
    name: "screw driver",
    weight: 4,
  },
  {
    name: "hands",
    weight: 1,
  },
  {
    name: "gun",
    weight: 7,
  },
  {
    name: "scissors",
    weight: 7,
  },
  {
    name: "pillow",
    weight: 7,
  },
  {
    name: "glas",
    weight: 7,
  },
];

// ITERATION 2

function selectRandom(card) {
  return card[Math.floor(Math.random() * card.length)];
}
console.log(selectRandom(suspectsArray));

function pickMystery() {}

// ITERATION 3

function revealMystery() {}
