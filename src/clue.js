// ITERATION 1

// Suspects Array

const suspectsArray = [
  {

   firstName: 'Jacob',
   lastName: 'Green',
   occupation: 'Entrepreneur',
   age: 24,
   description: 'Old-fashion Gentleman',
   image: 'Monocle',
   color: 'Green',
   },
   {

    firstName: 'Rose',
    lastName: 'Black',
    occupation: 'Cashier in Alcampo',
    age: 43,
    description: 'Steampunk lady',
    image: 'Old clock',
    color: 'Red',
    },
    {

   firstName: 'James',
   lastName: 'Bond',
   occupation: '00 agent',
   age: 34,
   description: 'Man in a tux',
   image: 'Pistol',
   color: 'White',
   },
   {

    firstName: 'Bruce',
    lastName: 'Wayne',
    occupation: 'Hero',
    age: 38,
    description: 'Wears a bat costume',
    image: 'Bat',
    color: 'Black',
    },
    {

   firstName: 'Teo',
   lastName: 'López',
   occupation: 'Professor',
   age: 31,
   description: 'Nice guy',
   image: 'Laptop',
   color: 'Orange',
   },
   {

   firstName: 'Victor',
   lastName: 'Plum',
   occupation: 'Rob jewelers',
   age: 51,
   description: 'Very thin man',
   image: 'Brain',
   color: 'Pink',
   },
   
  
];
 

/* class Suspects {
    constructor(firstName, lastName, occupation, age, description, image, color){
      this.firstname = firstName
      this.lastName = lastName
      this.occupation = occupation
      this.age = age
      this.description = description
      this.image = image
      this.color = color
    }
      
  }

  class Player extends Suspects {
    constructor(firstName, lastName, occupation, age, description, image, color) {
      super(firstName, lastName, occupation, age, description, image, color)
    }
  }

  const player1 = new Player("Jacob", "Green", "Entrepreneur", 24, "Old-fashion Gentleman", "Monocle", "Black" )
  console.log(player1)
 */

  
// Rooms Array

const roomsArray = [
  {
    name: 'Hall',
    },
 {
    name: 'Garden',
    },
 {
    name: 'Living-Room',
    },
 {
    name: 'Garage',
    },
 {
    name: 'Main-bedrom',
    },
 {
    name: 'Kitchen',
    },
 {
    name: 'Fireplace',
    },
 {
    name: 'Bathroom',
    },
 {
    name: 'Penthouse',
    },
 {
    name: 'Batcave',
    },
 {
    name: 'Inside a closet',
    },
 {
    name: 'Maids bedroom',
    },
 {
    name: 'Laundry-room',
    },
 {
    name: 'Billiard Room',
    },
 {
    name: 'Courtyard',
    },

];

// Weapons Array

const weaponsArray = [
{
    name: 'Knife',
    weight: 1,
},
{
  name: 'Shuriken',
  weight: 1,
},
{
  name: 'Pistol',
  weight: 2,
},
{
  name: 'Ashtray',
  weight: 1,
},
{
  name: 'Headphones',
  weight: 1,
},
{
  name: 'A huge pendrive',
  weight: 4,
},
{
  name: 'A laptop',
  weight: 3,
},
{
  name: '12 hours of Javascript',
  weight: 10000,
},
{
  name: 'poison',
  weight: 1,
},

];


// ITERATION 2

function selectRandom(array) {
  if (array.length === 0) {return undefined}
 return array[Math.floor(Math.random()*array.length)]


/*   let suspect = suspectsArray[Math.floor(Math.random()*suspectsArray.length)]
  let room = roomsArray[Math.floor(Math.random()*roomsArray.length)]
  let weapon = weaponsArray[Math.floor(Math.random()*weaponsArray.length)]

  return {suspect, room, weapon} */
}


function pickMystery() {
  let suspect = suspectsArray[Math.floor(Math.random()*suspectsArray.length)]
  let room = roomsArray[Math.floor(Math.random()*roomsArray.length)]
  let weapon = weaponsArray[Math.floor(Math.random()*weaponsArray.length)]

  return {suspect, room, weapon}
}


// ITERATION 3

function revealMystery() {
  let envelope = pickMystery()


  return (`${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`)
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
