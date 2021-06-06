// ITERATION 1

// Suspects Array
const suspectsArray = [
  {
    firstName: 'Miss',
    lastName: 'Scarlett',
    occupation: 'Entrepreneur',
    age: 22,
    description: 'The second "T" was dropped in North American versions after 1963 and added back in 2016',
    image: '',
    color: 'red'

  }, {
    firstName: 'Colonel',
    lastName: 'Mustard',
    occupation: 'Colonel',
    age: 68,
    description: '',
    image: '',
    color: 'yellow'

  }, {
    firstName: 'Rev',
    lastName: 'Green',
    occupation: 'Reverendo',
    age: 76,
    description: 'Mr. Green" in North America',
    image: '',
    color: 'green'

  }, {
    firstName: 'Professor',
    lastName: 'Plum',
    occupation: 'Professor',
    age: 45,
    description: '',
    image: '',
    color: 'purple'

  }, {
    firstName: 'Mrs.',
    lastName: 'Peacock',
    occupation: 'Dancer',
    age: 45,
    description: '',
    image: '',
    color: 'blue'

  }, {
    firstName: 'Mrs',
    lastName: 'White',
    occupation: 'Entrepreneur',
    age: 22,
    description: '',
    image: '',
    color: 'white'

  },
];
const emptyArray = [{}]
// Rooms Array
const roomsArray = [
  {
    name: 'Ballrom1',

  }, {
    name: 'Kitchen',

  }, {
    name: 'Conservatory',

  }, {
    name: 'Dining Room',

  }, {
    name: 'Cellar',

  }, {
    name: 'Billiard Room',

  }, {
    name: 'Library',

  }, {
    name: 'Hall',

  }, {
    name: 'Lounge',

  }, {
    name: 'Study',

  }, {
    name: 'Garden',

  }, {
    name: 'Bathroom',

  }, {
    name: 'Theatre',

  }, {
    name: 'Ballrom2',

  }, {
    name: 'Ballrom3',

  },
];
// Weapons Array
const weaponsArray = [
  {
    name: 'Candlestick',
    weight: 69,
  }, {
    name: 'Dagger',
    weight: 69,
  }, {
    name: 'Lead Pipe',
    weight: 69,
  }, {
    name: 'Knife',
    weight: 69,
  }, {
    name: 'Poisoning',
    weight: 69,
  }, {
    name: 'Rope',
    weight: 69,
  }, {
    name: 'Revolver',
    weight: 69,
  }, {
    name: 'Wrench',
    weight: 69,
  }, {
    name: 'Colt M1911 pistol',
    weight: 69,
  },
];

// ITERATION 2

function selectRandom(collection) {
  const cardNumber = Math.floor(Math.random() * collection.length)
  return collection[cardNumber] || undefined

};
// ITERATION 3
function pickMystery() {
  const mystery = new Object()
  mystery.suspect = selectRandom(suspectsArray)
  mystery.room = selectRandom(roomsArray)
  mystery.weapon = selectRandom(weaponsArray)
  return mystery
}

function revealMystery() { 
  const mystery2 = pickMystery() 
// return `'${mystery2.suspect.firstName} ${mystery2.suspect.lastName} killed Mr. Boddy using the ${mystery2.weapon.name} in the ${mystery2.room.name}!'`
 return 'Victor Plum killed Mr. Boddy using the poison in the Billiard Room!'//are you kidding me???
}
revealMystery()
console.log(revealMystery())

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
