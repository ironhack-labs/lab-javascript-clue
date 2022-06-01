// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName:'Jacob',
    lastName:'Green',
    occupation: 'Enterpreneur' ,
    age: 40,
    description: 'Well-known in certain circles',
    image: 'who?',
    color: 'green'
  },
  {
    firstName:'Doctor',
    lastName:'Orchid',
    occupation: 'Scientist',
    age: 38,
    description: 'She really girlbossed her way to her PhD',
    image: 'who?',
    color: 'violet'
  },
  {
    firstName:'Mrs',
    lastName: 'Peacock',
    occupation: 'Designer',
    age: 31,
    description: 'Quite... Niche',
    image: 'who?',
    color: 'yellow'
  },
  {
    firstName: 'Professor',
    lastName: 'Plum' ,
    occupation: 'Professor',
    age: 44,
    description: 'She may or may not own twenty-five cats all named after her ex-lovers',
    image: 'who?',
    color: 'purple'
  },
  {
    firstName: 'Colonel',
    lastName: 'Mustard',
    occupation: 'Colonel',
    age: 59,
    description: 'Has an attic and doesn\'t let anyone see what\'s inside of it...',
    image: 'who?',
    color: 'mustard'
  },
  {
    firstName: 'Miss',
    lastName: 'Scarlett',
    occupation: 'Actress' ,
    age: 28,
    description: 'Slays the hardest',
    image: 'who?',
    color: 'red'
  },
];

// Rooms Array

const roomsArray = [
  {
    name: 'Ballroom'
  },
  {
    name: 'Billiard Room'
  },
  {
    name: 'Conservatory'
  },
  {
    name: 'Dining Room'
  },
  {
    name: 'Hall'
  },
  {
    name: 'Kitchen'
  },
  {
    name: 'Library'
  },
  {
    name: 'Lounge'
  },
  {
    name: 'Study'
  },
  {
    name: 'Patio'
  },
  {
    name: 'Observatory'
  },
  {
    name: 'Theater'
  },
  {
    name: 'Bathroom'
  },
  {
    name: 'Study hall'
  },
  {
    name: 'Bedroom'
  }
  
];

// Weapons Array

const weaponsArray = [
  {
   name: 'Candlestick' ,
   weight: 5
  },
  {
    name: 'Dagger' ,
    weight: 3
   },
   {
    name: 'Lead Pipe',
    weight: 4.5
   },
   {
    name: 'Revolver',
    weight: 2.5
   },
   {
    name: 'Rope',
    weight: 2
   },
   {
    name: 'Wrench',
    weight: 1.5 
   },
   {
     name: 'El Gato',
     weight: 5.5
   },
   {
     name: 'Yo mama',
     weight: 9999999
   },
   {
     name: 'Axe',
     weight: 8
   }
];


// ITERATION 2

function selectRandom(Arr) {
  return Arr[Math.floor(Math.random() * Arr.length)];
}

function pickMystery() {
  let mystery = {
    suspect: selectRandom(suspectsArray),
    room: selectRandom(roomsArray),
    weapon: selectRandom(weaponsArray)
  }
  return mystery
}


// ITERATION 3

function revealMystery(mystery) {
  return `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!`
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
