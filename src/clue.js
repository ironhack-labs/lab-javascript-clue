// ITERATION 1

// Suspects Array

const suspectsArray = [
  { 
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 30,
    image: '',
    description: '',
    color: 'Black'
  },
  {
    firstName: 'Amy',
    lastName: 'Dower',
    occupation: 'Designer',
    age: 18,
    image: "",
    description: '',
    color: 'Orange'
  },
  { 
    firstName: 'Sammy',
    lastName: 'Fletcher',
    occupation: 'Developer',
    age: 35,
    image: "",
    description: '',
    color: 'Green'
  },
  {
    firstName: 'Loren',
    lastName: 'Planas',
    occupation: 'Hacker',
    age: 35,
    image: "",
    description: '',
    color: 'Purple'
  },
  {
    firstName: 'Julie',
    lastName: 'Phill',
    occupation: 'Scientist',
    age: 24,
    image: "",
    description: '',
    color: 'Blue'
  },
  {
    firstName: 'Tom',
    lastName: 'Vila',
    occupation: 'Pilot',
    age: 42,
    image: "",
    description: '',
    color: 'Indigo'
  },
];

// Rooms Array

const roomsArray = [
  {
    name: 'Living room',
  },
  {
    name: 'Patio',
  },
  {
    name: 'Bedroom',
  },
  {
    name: 'Swimming pool',
  },
  {
    name: 'School',
  },
  {
    name: 'Bathroom',
  },
  {
    name: 'Backyard',
  },
  {
    name: 'Restaurant',
  },
  {
    name: 'Gym',
  },
  {
    name: 'Toilet',
  },
  {
    name: 'Kitchen',
  },
  {
    name: 'Pub',
  },
  {
    name: 'Office',
  },
  {
    name: 'Coffee shop',
  },
  {
    name: 'Attic',
  },
];

// Weapons Array

const weaponsArray = [
  {
    name: 'knife',
    weight: 2,
  },
  {
    name: 'poison',
    weight: 1,
  },
  {
    name: 'bat',
    weight: 1,
  },
  {
    name: 'pistol',
    weight: 3,
  },
  {
    name: 'fork',
    weight: 1,
  },
  {
    name: 'axe',
    weight: 3,
  },
  {
    name: 'sword',
    weight: 2,
  },
  {
    name: 'pillow',
    weight: 1,
  },
  {
    name: 'riffle',
    weight: 5,
  }
];


// ITERATION 2
//Declare a function named selectRandom to randomly select one element from a card stack. 
//The function should expect an array as an argument, and should return a random element from the array.
function selectRandom(array) {
  // array.length --> to set the range to do the random math
  // if the array.length is 10, it will calculate a random number from [0 to 10) 
  // Math.random --> calculates random between [0 to 10) --> 0 included, 10 not included or excluded
  // so the last index of the array is included --> array.length - 1
  // Math.floor --> rounds the number
  let randomPosition = Math.floor(array.length * Math.random());
  let randomElement =  array[randomPosition]; // find the random position
  return randomElement;
}

// Create the mystery
//Declare a function named pickMystery that takes no arguments and returns 
// an object with three properties: suspect, weapon and room, 
//each holding as a value a card of that specific type. 
//You can get a random card of each type by calling selectRandom on each card stack.
function pickMystery() {
  const pickValues = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  }
  return pickValues;
}
// Run pickMistery and assign the object to a variable
const envelopeObject = pickMystery();

// ITERATION 3
// Declare a function named revealMystery that receives an envelope object 
// (with the shape of the object returned by pickMystery) as the single argument
function revealMystery(envelope) {
  const revealMessage = `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
  return revealMessage;
}
// Reveal the mystery- passing as an argument the object returned by pickMystery
revealMystery(envelopeObject);

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
