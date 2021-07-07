// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 40,
    description: 'Brown Hair',
    color: 'red',
    image: 'url/aaaa'
  },
  {
    firstName: 'Miss',
    lastName: 'Scarlett',
    occupation: 'Nurse',
    age: 32,
    description: 'Green Hair',
    color: 'green',
    image: 'url/aaaa'
  },
  {
    firstName: 'Mrs. ',
    lastName: 'Peacock',
    occupation: 'Gardener',
    age: 48,
    description: 'Blonde Hair',
    color: 'blue',
    image: 'url/aaaa'
  },
  {
    firstName: 'Violett',
    lastName: 'Bloom',
    occupation: 'Professor',
    age: 62,
    description: 'Black Hair',
    color: 'brown',
    image: 'url/aaaa'
  },
  {
    firstName: 'Günther',
    lastName: 'Mustard',
    occupation: 'Colonel',
    age: 28,
    description: 'Brown Eyes',
    color: 'violet',
    image: 'url/aaaa'
  },
  {
    firstName: 'Julia',
    lastName: 'Orchid',
    occupation: 'Dr.',
    age: 37,
    description: 'Green Eyes',
    color: 'red',
    image: 'url/aaaa'
  }
];

// Rooms Array

const roomsArray = [
{
  name: 'Spa'
},
{
  name: 'Theatre'
},
{
  name: 'Living'
},
{
  name: 'Observatory'
},
{
  name: 'Patio'
},
{
  name: 'Pool'
},
{
  name: 'Kitchen'
},
{
  name: 'Hall'
},
{
  name: 'Guest'
},
{
  name: 'Lounge'
},
{
  name: 'Conservatory'
},
{
  name: 'Billiard Room'
},
{
  name: 'Libary'
},
{
  name: 'Study'
},
{
  name: 'Basement'
}
];

// Weapons Array

const weaponsArray = [
{
  name: 'Revolver',
  weight: 30
}, 
{
  name: 'Dagger',
  weight: 42
}, 
{
  name: 'Lead Pipe',
  weight: 50
}, 
{
  name: 'Rope',
  weight: 10
}, 
{
  name: 'Candlestick',
  weight: 12
}, 
{
  name: 'Wrench',
  weight: 26
}, 
{
  name: 'Saw',
  weight: 40
}, 
{
  name: 'Bomb',
  weight: 66
}, 
{
  name: 'Gun',
  weight: 39
}

];

function randomIntFromIntervalWithoutMax(min, max) {
  let random = Math.floor(Math.random() * max);
  return random;
}


// ITERATION 2
function selectRandom(array) {
  if (array.length === 0) {
    return undefined;
  }
  if (array.length === 1) {
    return array[0];
  }

  return array[randomIntFromIntervalWithoutMax(0, array.length)];
}

function pickMystery() {
  return [
    {
      suspect: selectRandom(suspectsArray),
      weapon : selectRandom(weaponsArray),
      room: selectRandom(roomsArray)
    }
  ][0];
}


// ITERATION 3
function revealMystery(mystery) {
  return `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!`;
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
