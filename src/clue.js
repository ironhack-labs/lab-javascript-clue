// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Mouli',
    occupation: 'Entrepreneur',
    age: 32,
    description: 'big-nosed',
    image: './img1.png',
    color: 'green'
  },
  {
    firstName: 'Ludmila',
    lastName: 'Karamazova',
    occupation: 'gardener',
    age: 46,
    description: 'hairy',
    image: './img2.png',
    color: 'red'
  },
  {
    firstName: 'Kevin',
    lastName: 'Schmidt',
    occupation: 'plumber',
    age: 43,
    description: 'tall',
    image: './img3.png',
    color: 'purple'
  },
  {
    firstName: 'Magdi',
    lastName: 'Kora',
    occupation: 'Police Man',
    age: 89,
    description: 'Undercover',
    image: "./img044.png",
    color: 'Brown'
  },
  {
    firstName: 'Miko',
    lastName: 'Zoho',
    occupation: 'Gamer',
    age: 20,
    description: 'Blond',
    image: "./img0111.png",
    color: 'Pink'
  },
  {
    firstName: 'Noura',
    lastName: 'Khalaf',
    occupation: 'Clown',
    age: 18,
    description: 'Crazy person',
    image: "./img06.png",
    color: 'Lila'
  }
];

const roomsArray = [
  { name: 'Darkroom'},
  { name: 'Elevator'},
  { name: 'Classroom'},
  { name: 'Kitchen'},
  { name: 'onTheThrone'},
  { name: 'Office'},
  { name: 'U-Bahn'},
  { name: 'Berghain'},
  { name: 'Bunker'},
  { name: 'Plane'},
  { name: 'Kanal'},
  { name: 'TempelhoferFeld'},
  { name: 'Ironhack'},
  { name: 'KottbusserTor'},
  { name: 'Spati'},
];

// Weapons Array

const weaponsArray = [
  {name: 'Pistol',
  weight: 500
  },
  {name: 'Shotgun',
    weight: 3000
  },
  {
    name: 'AK-47',
    weight: 4000
  },
  {
    name: 'Poison',
    weight: 2
  },
  {
    name: 'Knife',
    weight: 100
  },
  {
    name: 'Rope',
    weight: 50
  },
  {
    name: 'Baseball bat',
    weight: 3000
  },
  {
    name: 'Molotov',
    weight: 500
  },
  {
    name: 'Corona',
    weight: 0
  },
];


// ITERATION 2

function selectRandom(arr) {
 
// generate random number "r" between (0 - last index)
let rand = Math.random() * arr.length
rand = Math.floor(rand)

  // return element from array
let randome = arr[rand];

return randome
}

function pickMystery() {

// each of the 3 properties hold a random value (card) // use selectRandom5
// let properties = [selectRandom(suspectsArray), selectRandom(weaponsArray), selectRandom(roomsArray)]
let properties = {
  suspect : selectRandom(suspectsArray),
  weapon : selectRandom(weaponsArray),
  room : selectRandom(roomsArray),
}

return properties // object with 3 properties (suspect / weapon / room)
}


// ITERATION 3
// {
//   suspect: {
//     firstName: 'Jacob',
//     lastName: 'Mouli',
//     occupation: 'Entrepreneur',
//     age: 32,
//     description: 'big-nosed',
//     image: './img1.png',
//     color: 'green'
//   },
//   weapon: { name: 'Baseball bat', weight: 3000 },
//   room: { name: 'Berghain' }
// }
function revealMystery(obj) {

  return `${obj.suspect.firstName} ${obj.suspect.lastName} killed Mr. Boddy using the ${obj.weapon.name} in the ${obj.room.name}!`
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
