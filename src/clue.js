// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 55,
    description: 'Descrip1',
    image: 'img1.web',
    color: 'rosa'
  },
  {
    firstName: 'Juan',
    lastName: 'García',
    occupation: 'Arquitecto',
    age: 32,
    description: 'Descrip2',
    image: 'img2.web',
    color: 'azul'
  },
  {
    firstName: 'Carlos',
    lastName: 'Sanchez',
    occupation: 'Vendedor',
    age: 42,
    description: 'Descrip3',
    image: 'img3.web',
    color: 'blanco'
  },
  {
    firstName: 'Enrique',
    lastName: 'Martínez',
    occupation: 'Fontanero',
    age: 26,
    description: 'Descrip4',
    image: 'img4.web',
    color: 'amarillo'
  },
  {
    firstName: 'Ivan',
    lastName: 'Martín',
    occupation: 'Mecánico',
    age: 30,
    description: 'Descrip5',
    image: 'img5.web',
    color: 'negro'
  },
  {
    firstName: 'Diego',
    lastName: 'Salas',
    occupation: 'Comercial',
    age: 58,
    description: '6',
    image: 'img6.web',
    color: 'verde'
  }
];

// Rooms Array

const roomsArray = [
  {
    name: 'room1'
  },
  {
    name: 'room2'
  },
  {
    name: 'room3'
  },
  {
    name: 'room4'
  },
  {
    name: 'room5'
  },
  {
    name: 'room6'
  },
  {
    name: 'room7'
  },
  {
    name: 'room8'
  },
  {
    name: 'room9'
  },
  {
    name: 'room10'
  },
  {
    name: 'room11'
  },
  {
    name: 'room12'
  },
  {
    name: 'room13'
  },
  {
    name: 'room14'
  },
  {
    name: 'room15'
  }
];

// Weapons Array

const weaponsArray = [
  {
    name: 'cuchillo',
    weight: 1
  },
  {
    name: 'pistola',
    weight: 2.6
  },
  {
    name: 'pala',
    weight: 3
  },
  {
    name: 'maceta',
    weight: 2.5
  },
  {
    name: 'tijeras',
    weight: 0.8
  },
  {
    name: 'sartén',
    weight: 1.2
  },
  {
    name: 'veneno',
    weight: 0.2
  },
  {
    name: 'piedra',
    weight: 0.5
  },
  {
    name: 'bate',
    weight: 2.3
  }
];

// ITERATION 2

function selectRandom(arrayOfCards) {
  const random = Math.floor(Math.random() * arrayOfCards.length);
  const randomElement = arrayOfCards[random];

  return randomElement;
}

function pickMystery() {
  const randomSuspect = selectRandom(suspectsArray);
  const randomWeapon = selectRandom(weaponsArray);
  const randomRoom = selectRandom(roomsArray);

  const mystery = {};
  mystery.suspect = randomSuspect;
  mystery.weapon = randomWeapon;
  mystery.room = randomRoom;
  //console.log(mystery);

  return mystery;
}

// ITERATION 3

function revealMystery(envelope) {
  const message = `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
  //console.log(message);

  return message;
}

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
