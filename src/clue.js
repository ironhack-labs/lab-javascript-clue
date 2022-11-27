// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Cloud",
    lastName: "Strife",
    occupation: "mercenary",
    age: 25,
    description: "Former Soldier",
    image: "Image",
    color: "blue",
  },
  {
    firstName: "Tifa",
    lastName: "Lockhart",
    occupation: "Barmaid",
    age: 22,
    description: "liar",
    image: "Image",
    color: "red",
  },
  {
    firstName: "Yuffie",
    lastName: "Kisaragi",
    occupation: "Thief",
    age: 16,
    description: "single white rose of Wutai",
    image: "Image",
    color: "green",
  },
  {
    firstName: "Cid",
    lastName: "Highwind",
    occupation: "Pilot",
    age: 35,
    description:
      "Forget about gettin a description, shut up and drink your goddamn tea!",
    image: "Image",
    color: "gray",
  },
  {
    firstName: "Barret",
    lastName: "Wallace",
    occupation: "Leader of AVALANCHE",
    age: 37,
    description: "Dedicated father",
    image: "Image",
    color: "Black",
  },
  {
    firstName: "Aerith",
    lastName: "Gainsborough",
    occupation: "Flower-girl",
    age: 20,
    description: "Saviour",
    image: "Image",
    color: "Pink",
  },
];

// Rooms Array

const roomsArray = [
  {
    name: "Shinra Mansion",
  },
  {
    name: "Hojos lab",
  },
  {
    name: "Church",
  },
  {
    name: "Don Corneos Room",
  },
  {
    name: "Hideout",
  },
  {
    name: "Seventh Heaven",
  },
  {
    name: "Tifas Room",
  },
  {
    name: "Bone Villiage",
  },
  {
    name: "WallMarket",
  },
  {
    name: "Honey Bee Inn",
  },
  {
    name: "Rocket Town",
  },
  {
    name: "Bone Villlage",
  },
  {
    name: "The Forgotten City",
  },
  {
    name: "The Gold saucer",
  },
  {
    name: " The Nothern Crater",
  },
];

// Weapons Array

const weaponsArray = [
  {
    name: "Buster Sword",
    weight: 200,
  },
  {
    name: "Gattling Gun",
    weight: 250,
  },
  {
    name: "Leather Gloves",
    weight: 20,
  },
  {
    name: "Gaurd Stick",
    weight: 50,
  },
  {
    name: "Iron Blade",
    weight: 150,
  },
  {
    name: "Light Machine Gun",
    weight: 175,
  },
  {
    name: "Metal Knuckles",
    weight: 30,
  },
  {
    name: "Silver Staff",
    weight: 40,
  },
  {
    name: "Masamune",
    weight: 100,
  },
];

// ITERATION 2

function selectRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
  const mystery = {};
  const randomNumber1 = Math.random();
  const randomNumber2 = Math.random();
  const randomNumber3 = Math.random();

  mystery.suspect =
    suspectsArray[Math.floor(randomNumber1 * suspectsArray.length)];
  mystery.weapon =
    weaponsArray[Math.floor(randomNumber2 * weaponsArray.length)];
  mystery.room = roomsArray[Math.floor(randomNumber3 * roomsArray.length)];

  return mystery;
}
// ITERATION 3

function revealMystery() {
  return `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon} in the ${mystery.room}!`;
}
