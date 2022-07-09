// ITERATION 1

// Suspects Array

const suspectsArray = [];

let mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  occupation: 'Entrepreneur',
  age: 45,
  description: ' He has a lot of connections',
  image:
    'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  color: 'green'
};

let drOrchid = {
  firstName: 'Doctor',
  lastName: 'Orchid',
  occupation: 'Scientist',
  age: 26,
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  color: 'white'
};

let profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  occupation: 'Designer',
  age: 22,
  description: 'Billionaire video game designer',
  image:
    'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
  color: 'purple'
};

suspectsArray.push(drOrchid);
suspectsArray.push(profPlum);
suspectsArray.push(mrGreen);
// or: suspectsArray.push(drOrchid, profPlum, mrGreen);

let room1 = { name: 'Dining Room' };
let room2 = { name: 'Conservatory' };
let room3 = { name: 'Kitchen' };
let room4 = { name: 'Study' };
let room5 = { name: 'Library' };
let room6 = { name: 'Billiard Room' };
let room7 = { name: 'Lounge' };
let room8 = { name: 'Ballroom' };
let room9 = { name: 'Hall' };
let room10 = { name: 'Spa' };
let room11 = { name: 'Living Room' };
let room12 = { name: 'Observatory' };
let room13 = { name: 'Theater' };
let room14 = { name: 'Guest House' };
let room15 = { name: 'Patio' };

const roomsArray = [
  room1,
  room2,
  room3,
  room4,
  room5,
  room6,
  room7,
  room8,
  room9,
  room10,
  room11,
  room12,
  room13,
  room14,
  room15
];

const weaponsArray = [
  { name: 'rope', weight: 10 },
  { name: 'knife', weight: 8 },
  { name: 'candlestick', weight: 2 },
  { name: 'dumbbell', weight: 30 },
  { name: 'poison', weight: 2 },
  { name: 'axe', weight: 15 },
  { name: 'bat', weight: 13 },
  { name: 'trophy', weight: 25 },
  { name: 'pistol', weight: 20 }
];

// ITERATION 2

function selectRandom(theArray) {
  let randomNumber = Math.floor(Math.random() * theArray.length);
  return theArray[randomNumber];
}

function pickMystery() {
  let mystery = {};

  let theSuspect = selectRandom(suspectsArray);
  let theWeapon = selectRandom(weaponsArray);
  let theRoom = selectRandom(roomsArray);

  mystery.suspect = theSuspect;
  mystery.weapon = theWeapon;
  mystery.room = theRoom;

  return mystery;
}

function revealMystery(mys) {
  return `${mys.suspect.firstName} ${mys.suspect.lastName} killed Mr. Boddy using the ${mys.weapon.name} in the ${mys.room.name}!`;
}

// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
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
