// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: ',entrepeneur',
    age: 45,
    description: 'Rich and deceptif',
    image:
      'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'Red'
  },
  {
    firstName: 'Bart',
    lastName: 'Rider',
    occupation: 'Hacker',
    age: 31,
    description: 'Master of Code',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'Blue'
  },
  {
    firstName: 'Lisa',
    lastName: 'Hickup',
    occupation: 'Singer',
    age: 55,
    description: 'Slime and gracefull',
    image:
      'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'Green'
  },
  {
    firstName: 'James',
    lastName: 'minigun',
    occupation: 'Train Magnet',
    age: 85,
    description: 'old and slow',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'Brown'
  },
  {
    firstName: 'Mr.Clean',
    lastName: 'Scrubber',
    occupation: 'Cleaning company',
    age: 23,
    description: 'Looks ugly, Smells very Nice and clean',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'White'
  },
  {
    firstName: 'busineston',
    lastName: 'MacAndCheese',
    occupation: 'Baron',
    age: 77,
    description: 'Rich and famous',
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'Purple'
  }
];

// Rooms Array
// 15 rooms and a name
const roomsArray = [
  { name: 'Kitchen' },
  { name: 'Garden' },
  { name: 'Living Room' },
  { name: 'Bedroom' },
  { name: 'Bathroom' },
  { name: 'Dinnerroom' },
  { name: 'Study' },
  { name: 'Cellar' },
  { name: 'Addice' },
  { name: 'lounge' },
  { name: 'Hall' },
  { name: 'Libray' },
  { name: 'Ballroom' },
  { name: 'Questroom' },
  { name: 'Sauna' }
];

// Weapons Array
// Need 9 weapons
const weaponsArray = [
  { name: 'Butter Knive', weight: 5 },
  { name: 'Chamber pot', weight: 30 },
  { name: 'Poison', weight: 2 },
  { name: 'Revolver', weight: 25 },
  { name: 'Hammer', weight: 4 },
  { name: 'Throphy', weight: 7 },
  { name: 'Axe', weight: 16 },
  { name: 'Garden Hoe', weight: 13 },
  { name: 'Rope', weight: 6 }
];

// ITERATION 2

function selectRandom(arr) {
  var result = arr[Math.floor(Math.random() * arr.length)];
  return result;
}
 

function pickMystery(Cards) {
  
      
     let suspect = selectRandom(suspectsArray);
     let room = selectRandom(roomsArray);
     let weapon = selectRandom(weaponsArray);
     let envelope = { suspect, room, weapon };
          return envelope;

  }

  


//    suspectsArray   const randomLetter = selectRandom(myArray);
//    roomsArray
//    weaponsArray
// ITERATION 3

function revealMystery(envelope) {
  let firstName = envelope.suspect.firstName;
  let lastName = envelope.suspect.lastName;
  let weapon = envelope.weapon.name;
  let room = envelope.room.name;

  return `${firstName} ${lastName} killed Mr. Boddy using the ${weapon} in the ${room}!`
 }

// Iteration 3: Reveal the mystery
// At last, we are ready to reveal the mystery.

// Declare a function named revealMystery that receives an envelope object
//  (with the shape of the object returned by pickMystery) 
// as the single argument, and returns a reveal message in the following format:

// <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!

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
