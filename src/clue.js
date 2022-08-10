// ITERATION 1

// Suspects Array

const suspectsArray = [];

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

const weaponsArray = [];

// ITERATION 2

function selectRandom(Arr) {
  let randomNumber = Arr[Math.floor(Math.random() * Arr.length)];
}
return randomNumber;

function pickMystery() {
  const pickMystery = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };

  return pickMystery;
}

// ITERATION 3

function revealMystery() {}
