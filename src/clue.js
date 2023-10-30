// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Anzhelika",
    lastName: "Mykhailenko",
    occupation: "Genius",
    age: 23,
    description: "blonde with bombastic eyes",
    image: "thunder.jpg",
    color: "red",
  },
  {
    firstName: "Michelangelo",
    lastName: "Turtle",
    occupation: "fighter for truth",
    age: 15,
    description: "charismatic turtle with dual nunchaku",
    image: "ninja.jpg",
    color: "orange",
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    occupation: "Genius but no such as Anzhelika",
    age: 70,
    description: "guy with start instead of hair with portal gun",
    image: "ricky.jpg",
    color: "blue",
  },
  {
    firstName: "Benedict",
    lastName: "Cumberbatch",
    occupation: "Sherlock Holmes/Doctor Strange",
    age: 47,
    description: "weird detective with powers to change TIME",
    image: "whateva.jpg",
    color: "black",
  },
  {
    firstName: "Dragon",
    lastName: "Steel",
    occupation: "fireman",
    age: 100,
    description: "killing breath",
    image: "angiespet.jpg",
    color: "golden with dark blue",
  },
  {
    firstName: "Zeus",
    lastName: "not sure if he had one",
    occupation: "God",
    age: 10000,
    description: "makes electricity",
    image: "lighting.jpg",
    color: "white",
  },
];

// Rooms Array

const roomsArray = [
  {
    name: "room1 of miracle",
  },
  {
    name: "room2 of card games",
  },
  {
    name: "room3 of jiu jitsu",
  },
  {
    name: "room4 of bass guitar music",
  },
  {
    name: "room5 of grapes",
  },
  {
    name: "room6 of cats of all sizes",
  },
  {
    name: "room7 of detective books",
  },
  {
    name: "room8 of java script",
  },
  {
    name: "room9 with ocean11",
  },
  {
    name: "room10 of masons",
  },
  {
    name: "room11 to another planet",
  },
  {
    name: "room12 of justice",
  },
  {
    name: "room13 of alghoritms",
  },
  {
    name: "room14 of idk",
  },
  {
    name: "room15 of memes",
  },
];

// Weapons Array

const weaponsArray = [
  {
    name: "leopard tank",
    weight: 100,
  },
  {
    name: "challanger tank",
    weight: 200,
  },
  {
    name: "patriot missle system",
    weight: 300,
  },
  {
    name: "atacms system",
    weight: 400,
  },
  {
    name: "himars",
    weight: 500,
  },
  {
    name: "M270 MLRS",
    weight: 600,
  },
  {
    name: "Bayraktar TB2 drone",
    weight: 700,
  },
  {
    name: "Bayraktar TB2 drone",
    weight: 800,
  },
  {
    name: "Bayraktar TB2 drone, can not be too much",
    weight: 900,
  },
];

// ITERATION 2

function selectRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  if (array.length === 0) {
    return undefined;
  }
  if (array.length === 1) {
    return array[0];
  }

  return array[randomIndex];
}

function pickMystery(suspect, weapon, room) {
  const randomSuspect = selectRandom(suspectsArray);
  const randomWeapon = selectRandom(weaponsArray);
  const randomRoom = selectRandom(roomsArray);
  const mystery = {
    suspect: randomSuspect,
    weapon: randomWeapon,
    room: randomRoom,
  };

  return mystery;
}

// ITERATION 3

function revealMystery(mystery) {
  const { suspect, weapon, room } = mystery;
  return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
}
