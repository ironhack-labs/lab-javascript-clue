// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Gabriel',
    lastName: 'Delgado',
    occupation: 'student',
    age: 24,
    description: 'student in ironhack class',
    image: 'image?',
    color: 'red'
  },
  {
    firstName: 'Maia',
    lastName: 'Duek',
    occupation: 'student',
    age: 24,
    description: 'student in ironhack class',
    image: 'image?',
    color: 'blue'
  },
  {
    firstName: 'Niko',
    lastName: 'Badiola',
    occupation: 'student',
    age: 24,
    description: 'student in ironhack class',
    image: 'image?',
    color: 'yellow'
  },
  {
    firstName: 'Mike',
    lastName: 'Troianello',
    occupation: 'instructor',
    age: 26,
    description: 'instructor in ironhack class',
    image: 'image?',
    color: 'teal'
  },
  {
    firstName: 'Michael',
    lastName: 'Scott',
    occupation: 'Regional Manager',
    age: 40,
    description: 'manager at dunder mifflin',
    image: 'image?',
    color: 'pink'
  },
  {
    firstName: 'Dwight',
    lastName: 'Schrute',
    occupation: 'Assistant Regional Manager',
    age: 42,
    description: 'bears beets battlestar galactica',
    image: 'image?',
    color: 'purple'
  }
];

// Rooms Array

const roomsArray = [
  {
    name: 'kitchen'
  },
  {
    name: 'bathroom'
  },
  {
    name: 'living room'
  },
  {
    name: 'dining room'
  },
  {
    name: 'guest room'
  },
  {
    name: 'den'
  },
  {
    name: 'entry way'
  },
  {
    name: 'master bedroom'
  },
  {
    name: 'sun room'
  },
  {
    name: 'formal dining room'
  },
  {
    name: 'foyer'
  },
  {
    name: 'patio'
  },
  {
    name: 'basement'
  },
  {
    name: 'attic'
  },
  {
    name: 'closet'
  }
];

// Weapons Array

const weaponsArray = [
  {
    name: 'hammer',
    weight: 1
  },
  {
    name: 'axe',
    weight: 4
  },
  {
    name: 'gun',
    weight: 3
  },
  {
    name: 'bow and arrow',
    weight: 2
  },
  {
    name: 'bat',
    weight: 2
  },
  {
    name: 'blunt object',
    weight: 2
  },
  {
    name: 'bomb',
    weight: 1
  },
  {
    name: 'rock',
    weight: 1
  },
  {
    name: 'rope',
    weight: 1
  }
];

// ITERATION 2

let selectRandom = (cardArray) => {
  const randomIndex = Math.floor(Math.random() * cardArray.length);
  return cardArray[randomIndex];
};

let pickMystery = () => {
  const weapon = selectRandom(weaponsArray);
  const suspect = selectRandom(suspectsArray);
  const room = selectRandom(roomsArray);

  return { suspect, weapon, room };
};

// ITERATION 3

let revealMystery = (envelope) => {
  const name = envelope.suspect.firstName + ' ' + envelope.suspect.lastName;
  const weapon = envelope.weapon.name;
  const room = envelope.room.name;
  return `${name} killed Mr. Boddy using the ${weapon} in the ${room}!`;
};

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
