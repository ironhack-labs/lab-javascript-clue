// ITERATION 1

//  Suspects Array
//  const person ={

// }
const suspectsArray = [
  {
    firstName: 'A',
    lastName: 'AA',
    occupation: 'AOcu',
    age: 1,
    description: 'Adesc',
    image: '',
    color: ''
  },
  {
    firstName: 'B',
    lastName: 'BB',
    occupation: 'BOcu',
    age: 2,
    description: 'Bdesc',
    image: '',
    color: ''
  },
  {
    firstName: 'C',
    lastName: 'CC',
    occupation: 'COcu',
    age: 3,
    description: 'CDesc',
    image: '',
    color: ''
  },
  {
    firstName: 'D',
    lastName: 'DD',
    occupation: 'DOcu',
    age: 4,
    description: 'DDesc',
    image: '',
    color: ''
  },
  {
    firstName: 'E',
    lastName: 'EE',
    occupation: 'EOcu',
    age: 5,
    description: 'EDesc',
    image: '',
    color: ''
  },
  {
    firstName: 'F',
    lastName: 'FF',
    occupation: 'FOcu',
    age: 6,
    description: 'Fdesc',
    image: '',
    color: ''
  }
];

// Rooms Array

const roomsArray = [
  { name: 'r1' },
  { name: 'r2' },
  { name: 'r3' },
  { name: 'r4' },
  { name: 'r5' },
  { name: 'r6' },
  { name: 'r7' },
  { name: 'r8' },
  { name: 'r9' },
  { name: 'r10' },
  { name: 'r11' },
  { name: 'r12' },
  { name: 'r13' },
  { name: 'r14' },
  { name: 'r15' }
];

// Weapons Array

const weaponsArray = [
  { name: 'knife', weight: 1 },
  { name: 'stick', weight: 3 },
  { name: 'gun', weight: 2 },
  { name: 'rope', weight: 1 },
  { name: 'stone', weight: 4 },
  { name: 'axe', weight: 5 },
  { name: 'shotgun', weight: 3 },
  { name: 'cable', weight: 1 },
  { name: 'hand', weight: 3 }
];

// ITERATION 2
let givemeRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

function selectRandom(arr) {
  return arr.length === 0 ? undefined : givemeRandom(arr);
}

function pickMystery() {
  const suspect = givemeRandom(suspectsArray);
  const weapon = givemeRandom(weaponsArray);
  const room = givemeRandom(roomsArray);
  return { suspect, weapon, room };
}

// ITERATION 3

function revealMystery({ suspect, weapon, room }) {
  return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
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
