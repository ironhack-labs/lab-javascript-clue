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
  // array.length --> set the max number to do the random math
  // Math.floor --> without decimals 
  // floor(length_of_the_array * random_value_between_0_and_1)
  let randomPosition = Math.floor(array.length * Math.random());
  let randomElement =  array[randomPosition]; // find the random position
  return randomElement;
}

function pickMystery() {
  const pickSuspect = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  }
  return pickSuspect
}


// ITERATION 3

function revealMystery() {}





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
