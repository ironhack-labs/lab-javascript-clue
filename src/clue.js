// ITERATION 1

// Suspects Array

const suspectsArray = [{
  firstName: 'Jacob',
  lastName: 'Green',
  occupation: 'Entrepreuner',
  age: 52,
  description: 'Owns a liquor distribution company',
  image: 'https://tinyurl.com/2dc34jth',
  color: 'blue',
},

{
  firstName: 'Mary',
  lastName: 'Christmas',
  occupation: 'Royal Elf',
  age: 31,
  description: 'Handing out gifts at Christmas',
  image: 'tinyurl.com/2p82zj3w',
  color: 'green',

},

{
  firstName: 'Robert',
  lastName: 'Bobby',
  occupation: 'Delivery Man',
  age: 25,
  description: 'His job is to deliver packages',
  image: 'tinyurl.com/2s3bvtxk',
  color: 'red',
},

{
  firstName: 'Anna',
  lastName: 'Forest',
  occupation: 'Carpenter',
  age: 39,
  description: 'Makes custom-made furniture',
  image: 'tinyurl.com/4fkbehsf',
  color: 'yellow',
},

{
  firstName: 'Charles',
  lastName: 'Manson',
  occupation: 'Butcher',
  age: 53,
  description: 'Has a poultry store',
  image: 'tinyurl.com/3767jyu4',
  color: 'purple',
},

{
  firstName: 'Julia',
  lastName: 'Dreyfus',
  occupation: 'History professor',
  age: 61,
  description: 'Develops his career at the university',
  image: 'tinyurl.com/27n4zras',
  color: 'white',
}
]

// Rooms Array

const roomsArray = [
  { name: "Kitchen" },
  { name: "Bedroom" },
  { name: "Basement" },
  { name: "Bathroom" },
  { name: "Game Room" },
  { name: "Garage" },
  { name: "Hall" },
  { name: "Dining Room" },
  { name: "Living Room" },
  { name: "Troture Room" },
  { name: "Winery" },
  { name: "Darkroom" },
  { name: "Vice Room" },
  { name: "Guest Room" },
  { name: "Rooftop" },

]

// Weapons Array

const weaponsArray = [
  {
    name: "Knife",
    weight: 15,
  },

  {
    name: "Ice pick",
    weight: 4,
  },

  {
    name: "Scissors",
    weight: 5,
  },

  {
    name: "Corkscrew",
    weight: 3,
  },

  {
    name: "Crossbow",
    weight: 30,
  },

  {
    name: "Gun",
    weight: 20,
  },

  {
    name: "Screwdriver",
    weight: 6,
  },

  {
    name: "Chainsaw",
    weight: 35,
  },

  {
    name: "Corkscrew",
    weight: 3,
  },

]



// ITERATION 2

function selectRandom(array) {

  let randomCard = parseInt(Math.random() * array.length)
  let card = array[randomCard]
  return card
}


function pickMystery() {

  let mystery = []

  mystery.push(selectRandom(suspectsArray))
  mystery.push(selectRandom(weaponsArray))
  mystery.push(selectRandom(roomsArray))

  return mystery
}


// ITERATION 3

function revealMystery() {

  let mysteryArray = pickMystery()
  
  return (mysteryArray[1].firstName + " " + mysteryArray[1].lastName + "killed Mr.Boddy using the" + mysteryArray[2].name + "in the" + mysteryArray[3].name + "!!!!")
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
