// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 35,
    description: "smart",
    image: "",
    color: "green"
  },
  {
    firstName: "João",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 35,
    description: "smart",
    image: "",
    color: "green"
  },
  {
    firstName: "José",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 35,
    description: "smart",
    image: "",
    color: "green"
  },
  {
    firstName: "Maria",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 35,
    description: "smart",
    image: "",
    color: "green"
  },
  {
    firstName: "Luis",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 35,
    description: "smart",
    image: "",
    color: "green"
  },
  {
    firstName: "Paulo",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 35,
    description: "smart",
    image: "",
    color: "green"
  }
];

// Rooms Array

const roomsArray = [
  {
    name: "room1"
  },
  {
    name: "room2"
  },
  {
    name: "room3"
  },
  {
    name: "room4"
  },
  {
    name: "room5"
  },
  {
    name: "room6"
  },
  {
    name: "room7"
  },
  {
    name: "room8"
  },
  {
    name: "room9"
  },
  {
    name: "room10"
  },
  {
    name: "room11"
  },
  {
    name: "room12"
  },
  {
    name: "room13"
  },
  {
    name: "room14"
  },
  {
    name: "room15"
  },
];

// Weapons Array

const weaponsArray = [
  {
    name: "weapon1",
    weight: 1,
  },
  {
    name: "weapon2",
    weight: 2,
  },
  {
    name: "weapon3",
    weight: 3,
  },
  {
    name: "weapon4",
    weight: 4,
  },
  {
    name: "weapon5",
    weight: 5,
  },
  {
    name: "weapon6",
    weight: 6,
  },
  {
    name: "weapon7",
    weight: 7,
  },
  {
    name: "weapon8",
    weight: 8,
  },
  {
    name: "weapon9",
    weight: 9,
  },
];


// ITERATION 2

function selectRandom(array) {
  return array[Math.floor(Math.random() * (array.length))]
}

function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
  }
}


// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}
