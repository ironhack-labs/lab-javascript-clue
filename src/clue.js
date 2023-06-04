// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Peter",
    lastName: "Park",
    occupation: "Student",
    age: 20,
    description: "With great power comes great responsibility",
    image: "https://...",
    color: "Red",
  },
  {
    firstName: "Tony",
    lastName: "Stark",
    occupation: "Engineer",
    age: 40,
    description: "Genius, billionaire, playboy, philanthropist",
    image: "https://...",
    color: "Blue",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    occupation: "Soldier",
    age: 100,
    description: "Super soldier and leader of the Avengers",
    image: "https://...",
    color: "Red and Blue",
  },
  {
    firstName: "Natasha",
    lastName: "Romanoff",
    occupation: "Spy",
    age: 35,
    description: "Master spy and skilled assassin",
    image: "https://...",
    color: "Black",
  },
  {
    firstName: "Bruce",
    lastName: "Banner",
    occupation: "Scientist",
    age: 45,
    description: "Scientist with a big green alter ego",
    image: "https://...",
    color: "Green",
  },
  {
    firstName: "Thor",
    lastName: "Odinson",
    occupation: "God of Thunder",
    age: 1000,
    description: "Mighty Avenger with a magical hammer",
    image: "https://...",
    color: "Yellow",
  },
];

// Rooms Array

const roomsArray = [
  {
    name: "Room1",
  },
  {
    name: "Room2",
  },
  {
    name: "Room3",
  },
  {
    name: "Room4",
  },
  {
    name: "Room5",
  },
  {
    name: "Room6",
  },
  {
    name: "Room7",
  },
  {
    name: "Room8",
  },
  {
    name: "Room9",
  },
  {
    name: "Room10",
  },
  {
    name: "Room11",
  },
  {
    name: "Room12",
  },
  {
    name: "Room13",
  },
  {
    name: "Room14",
  },
  {
    name: "Room15",
  },
];

// Weapons Array

const weaponsArray = [
  {
    name: "Arc Reactor",
    weight: 2,
  },
  {
    name: "Mjolnir",
    weight: 10,
  },
  {
    name: "Captain America's Shield",
    weight: 8,
  },
  {
    name: "Black Widow's Widow's Bite",
    weight: 1,
  },
  {
    name: "Iron Man's Repulsor Gauntlet",
    weight: 6,
  },
  {
    name: "Hawkeye's Bow and Arrows",
    weight: 4,
  },
  {
    name: "Black Panther's Vibranium Claws",
    weight: 3,
  },
  {
    name: "Ant-Man's Pym Particles",
    weight: 1,
  },
  {
    name: "Doctor Strange's Eye of Agamotto",
    weight: 2,
  },
];

// ITERATION 2

function selectRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function pickMystery() {
  const suspect = selectRandom(suspectsArray);
  const weapon = selectRandom(weaponsArray);
  const room = selectRandom(roomsArray);

  return {
    suspect: suspect,
    weapon: weapon,
    room: room,
  };
}

// ITERATION 3

function revealMystery(envelope) {
  const suspect = envelope.suspect;
  const weapon = envelope.weapon;
  const room = envelope.room;

  return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
}
