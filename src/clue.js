// ITERATION 1

// Suspects Array

// const suspectsArray = [];
const suspectsArray = [
  {
    firstName: 'JACOB',
    lastName: 'GREEN',
    occupation: 'Entrepreneur',
    age: 29,
    description: "Chinese",
    image: "",
    color: "Red",
  },
  {
  firstName: 'Manuel',
  lastName: 'Pascual',
  occupation: 'programmer',
  age: 22,
  description: "Bigote",
  image: "",
  color: "Black"
  },
  {
    firstName: 'Lucas',
    lastName: 'Gomez',
    occupation: 'Photographer',
    age: 23,
    description: "Photographer working at National Geographic",
    image: "",
    color: "Yellow",
  },
  {
  firstName: 'Ramiro',
  lastName: 'Bayá',
  occupation: 'Economist',
  age: 28,
  description: "CEO in a Company",
  image: "",
  color: "Blue"
  },
  {
  firstName: 'Simon',
  lastName: 'Oromi',
  occupation: 'Cineast',
  age: 21,
  description: "Actor in movies",
  image: "",
  color: "Pink",
  },
  {
    firstName: 'Elisa',
    lastName: 'Bosch',
    occupation: 'Designer',
    age: 22,
    description: "Girl",
    image: "",
    color: "Orange",
    }
];
//All of six possible suspects in Clue have a first name, last name, occupation, age, description, image and color.



// Rooms Array

const weaponsArray = [
  {
    name: 'Pistol',
    weight: 10,

  },
  {
    name: 'Knife',
    weight: 9,
  },
  {
    name: 'Hummer',
    weight: 6,
  },
{
  name: 'Revolver',
  weight: 8,
},
{
  name: 'fire extinguisher',
  weight: 4,
},
{
  name: 'rope',
  weight: 3,
},
{
  name: 'axe',
  weight: 5,
},
{
  name: 'spray',
  weight: 1,
},
{
  name: 'bottle',
  weight: 1,
},

];

// Weapons Array

const roomsArray = [
    {
      name: 'hall',
  
    },
    {
      name: 'kitchen',
    },
    {
      name: 'bedroom',
    },
  {
    name: 'bathroom',
  },
  {
    name: 'restroom',
  },
  {
    name: 'basement',
  },
  {
    name: 'atic',
  },
  {
    name: 'atic',
  },
  {
    name: 'principal room',

  },
  {
    name: 'laundry',
  },
  {
    name: 'games room',
  },
{
  name: 'guest room',
},
{
  name: 'living room',
},
{
  name: 'basement',
},
{
  name: 'garage',
}
];


// const randomRoom = roomsArray[Math.floor(Math.random()*roomsArray.length)];
// const randomWeapon = weaponsArray[Math.floor(Math.random()*weaponsArray.length)];
// const randomSuspect = suspectsArray[Math.floor(Math.random()*suspectsArray.length)];
// console.log(randomRoom)
// console.log(randomWeapon)
// console.log(randomSuspect)

// ITERATION 2
// function selectRandomRoom(rooms) {
//   const randomRoom = roomsArray[Math.floor(Math.random()*roomsArray.length)];
//   return randomRoom
//   }

//   function selectRandomWeapon(weapons) {
//     const randomWeapon = weaponsArray[Math.floor(Math.random()*weaponsArray.length)];
//     return randomWeapon
//     }

//     function selectRandomSuspect(suspects) {
//       const randomSuspect = suspectsArray[Math.floor(Math.random()*suspectsArray.length)];
//       return randomSuspect
//       }


function selectRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickMystery(randomMystery) {
const randomRoom = roomsArray[Math.floor(Math.random()*roomsArray.length)];
const randomWeapon = weaponsArray[Math.floor(Math.random()*weaponsArray.length)];
const randomSuspect = suspectsArray[Math.floor(Math.random()*suspectsArray.length)];

const randomMys = {
  suspect: randomSuspect,
  weapon: randomWeapon,
  room: randomRoom
}
return randomMys

}

// ITERATION 3

function revealMystery(randomMys) {
  return `${randomMys.suspect.firstName} ${randomMys.suspect.lastName} killed Mr. Boddy using the ${randomMys.weapon.name} in the ${randomMys.room.name}!`
 
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