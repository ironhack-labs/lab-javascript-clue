// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Player1',
    lastName: 'Lastname1',
    occupation: 'occupation1',
    age: 11,
    description: '',
    image: '',
    color: '',
  },

  {
    firstName: 'Player2',
    lastName: 'Lastname2',
    occupation: 'occupation2',
    age: 22,
    description: '',
    image: '',
    color: '',
  },

  {
    firstName: 'Player3',
    lastName: 'Lastname3',
    occupation: 'occupation3',
    age: 33,
    description: '',
    image: '',
    color: '',
  },

  {
    firstName: 'Player4',
    lastName: 'Lastname4',
    occupation: 'occupation4',
    age: 44,
    description: '',
    image: '',
    color: '',
  },

  {
    firstName: 'Player5',
    lastName: 'Lastname5',
    occupation: 'occupation5',
    age: 55,
    description: '',
    image: '',
    color: '',
  },

  {
    firstName: 'Player6',
    lastName: 'Lastname6',
    occupation: 'occupation6',
    age: 66,
    description: '',
    image: '',
    color: '',
  }
]


// Rooms Array

const roomsArray = [
  {
    name: 'room1',
  },
  {
    name: 'room2',
  },
  {
    name: 'room3',
  },
  {
    name: 'room4',
  },
  {
    name: 'room5',
  },
  {
    name: 'room6',
  },
  {
    name: 'room7',
  },
  {
    name: 'room8',
  },
  {
    name: 'room9',
  },
  {
    name: 'room10',
  },
  {
    name: 'room11',
  },
  {
    name: 'room12',
  },
  {
    name: 'room13',
  },
  {
    name: 'room14',
  },
  {
    name: 'room15',
  }
]
  


// Weapons Array

const weaponsArray = [
  {
   name: 'weapon1',
   weight: 12,
  },
  {
    name: 'weapon2',
    weight: 152,
  },
  {
    name: 'weapon3',
    weight: 62,
  },
  {
    name: 'weapon4',
    weight: 85,
  },
  {
    name: 'weapon5',
    weight: 87,
  },
  {
    name: 'weapon6',
    weight: 187,
  },
  {
    name: 'weapon7',
    weight: 284,
  },
  {
    name: 'weapon8',
    weight: 58,
  },
  {
    name: 'weapon9',
    weight: 35,
  }
]



// ITERATION 2

function selectRandom(array) {
  const randomItem = array[Math.floor(Math.random() * array.length)]
  return randomItem
  }





function pickMystery() {

  const suspect = selectRandom(suspectsArray)
  const room = selectRandom(roomsArray)
  const weapon = selectRandom(weaponsArray)
  return { suspect: suspect, room: room, weapon: weapon }
}  


// ITERATION 3

function revealMystery(envelope) {

  const suspect = selectRandom(suspectsArray)
  const room = selectRandom(roomsArray)
  const weapon = selectRandom(weaponsArray)

  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`
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
