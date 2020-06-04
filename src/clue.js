// ITERATION 1

// Suspects Collection
const suspectsArray = [
  (mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    color: "green",
  }),
  (drOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    color: "white",
  }),
  (profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    color: "purple",
  }),
  (missScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    color: "red",
  }),
  (mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    color: "blue",
  }),
  (mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    color: "yellow",
  }),
];

// Rooms Collection
const roomsArray = [
  "Dining Room",
  "Conservatory",
  "Kitcheny",
  "Studyy",
  "Library",
  "Billiard Roor",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio",
];

// Weapons Collection
const weaponsArray = [
  "rope",
  "knife",
  "candlestic",
  "dumbbell",
  "poison",
  "axe",
  "bat",
  "trophy",
  "pistol",
];

// ITERATION 2
function selectRandom(miArray) {
  if (miArray.length === 0) {
    return undefined;
  }

  return Math.floor(Math.random(miArray) * miArray.length);
}

function pickMystery() {
  return selectRandom(suspectsArray, weaponsArray, roomsArray);
}

function pickMystery() {
  let suspect = selectRandom(suspectsArray);
  let weapon = selectRandom(weaponsArray);
  let room = selectRandom(roomsArray);
  const juego = { suspect, weapon, room };

  return juego;
}

pickMystery();

// ITERATION 3
function revealMystery(suspect, weapon, room) {
  let mistery = `${suspectsArray[suspect].firstName} ${suspectsArray[suscpect].lastName} killed Mr. Boddy using the ${weaponsArray[weapon]} in the ${roomsArray[room]}`;

  return mistery;
}



revealMystery(5, 2, 1);
