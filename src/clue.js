// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 30,
    description: 'Long hair',
    image: 'Yes',
    color: 'Black'
  },
  {
    firstName: 'Alice',
    lastName: 'Muller',
    occupation: 'Killer',
    age: 30,
    description: 'Short hair',
    image: 'Yes',
    color: 'Black'
  },
  {
    firstName: 'Lucas',
    lastName: 'Wk',
    occupation: 'arbeitlos',
    age: 88,
    description: 'Ugly',
    image: 'No',
    color: 'White'
  },
  {
    firstName: 'Olive',
    lastName: 'Pil',
    occupation: 'Architect',
    age: 44,
    description: 'Very tall',
    image: 'Yes',
    color: 'Black'
  },
  {
    firstName: 'Wen',
    lastName: 'Liao',
    occupation: 'Secret',
    age: 534,
    description: 'Golden hair',
    image: 'Yes',
    color: 'Red'
  },
  {
    firstName: 'Udi',
    lastName: 'Karenama',
    occupation: 'Lawyer',
    age: 23,
    description: 'Thin and short',
    image: 'Yes',
    color: 'Blue'
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
    name: 'Knife',
    weight: 23,
  },
  {
    name: 'Spoon',
    weight: 44,
  },
  {
    name: 'Fork',
    weight: 333,
  },
  {
    name: 'Pen',
    weight: 2422,
  },
  {
    name: 'Sword',
    weight: 1241,
  },
  {
    name: 'Trident',
    weight: 5983,
  },
  {
    name: 'Gun',
    weight: 2004,
  },
  {
    name: 'Tear Gas',
    weight: 11,
  },
  {
    name: 'Bomb',
    weight: 42081,
  }
];


// ITERATION 2

function selectRandom() {
 
var i = Math.floor(Math.random() * suspectsArray.length)
suspectsArray[i]

var i = Math.floor(Math.random() * roomsArray.length)
roomsArray[i]

var i = Math.floor(Math.random() * weaponsArray.length)
weaponsArray[i]

}

function pickMystery() {}


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





function x(arr){
  const filtered = []
  for(let i=0; i<arr.length; i++){
    if(arr[i].length < 4)
    filtered.push(arr[i])
  }
}