// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 36,
    description: 'Greedy and smart',
    image: '',
    color: 'Blue',
  },
  {
    firstName: 'Wesley',
    lastName: 'Oswaldo',
    occupation: 'Farmer',
    age: 56,
    description: 'Have strong hands and wake up early',
    image: '',
    color: 'Red',
  },
  {
    firstName: 'Carlos',
    lastName: 'Daniel',
    occupation: 'Web developer',
    age: 34,
    description: 'Quiet and observer',
    image: '',
    color: 'Green',
  },
  {
    firstName: 'Silmara',
    lastName: 'Franco',
    occupation: 'Barista',
    age: 37,
    description: 'Small but fast',
    image: '',
    color: 'Magenta',
  },
  {
    firstName: 'Malu',
    lastName: 'Amaral',
    occupation: 'Student',
    age: 10,
    description: 'Have solid connections with people around the world',
    image: '',
    color: 'Pink',
  },
  {
    firstName: 'Paula',
    lastName: 'Muniz',
    occupation: 'Hair Dresser',
    age: 52,
    description: 'Kind but can be annoying some times',
    image: '',
    color: 'Orange',
  }
];

// Rooms Array

const roomsArray = [
  {
    name: 'Bathroom',
  },
  {
    name: 'Library',
  },
  {
    name: 'Dinning Room',
  },
  {
    name: 'Game Room',
  },
  {
    name: 'Garage',
  },
  {
    name: 'Bedroom',
  },
  {
    name: 'Living Room',
  },
  {
    name: 'Kitchen',
  },
  {
    name: 'Courtyard',
  },
  {
    name: 'Guesthouse',
  },
  {
    name: 'Theater',
  },
  {
    name: 'Observatory',
  },
  {
    name: 'Spa',
  },
  {
    name: 'Hall',
  },
  {
    name: 'Study',
  },
];

// Weapons Array

const weaponsArray = [
  {
    name: 'Revolver',
    weight: 2.5,
  },
  {
    name: 'Dagger',
    weight: 1,
  },
  {
    name: 'Lead Pipe',
    weight: 2,
  },
  {
    name: 'Rope',
    weight: 0.3,
  },
  {
    name: 'Candlestick',
    weight: 7,
  },
  {
    name: 'Wrench',
    weight: 4,
  },
  {
    name: 'Spoon',
    weight: 0.2,
  },
  {
    name: 'Poison',
    weight: 0.25,
  },
  {
    name: 'Broken Glass',
    weight: 0.4,
  },
  
];


// ITERATION 2

function selectRandom(array) {
  let randomItem;
  for (i = 0; i < array.length; i++){
    randomItem = array[Math.floor(Math.random() * array.length)];
  };
  return randomItem;
};



function pickMystery() {
  const obj = {
    suspect:  selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  }
    return obj;
}


// ITERATION 3

function revealMystery(envelopeObj) {
  const suspectFirstName = envelopeObj.suspect.firstName;
  const suspectLastName = envelopeObj.suspect.lastName;
  const weaponName = envelopeObj.weapon.name;
  const roomName = envelopeObj.room.name;
  
  return `${suspectFirstName} ${suspectLastName} killed Mr. Boddy using the ${weaponName} in the ${roomName}!`
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
