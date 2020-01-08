// ITERATION 1

// Suspects Collection
const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: '',
    description: '',
    image: '',
    color: '',
    // ...
  },
  {
    firstName: 'John',
    lastName: 'Green',
  },
];

// Rooms Collection
const roomsArray = [
  { name: 'Dining Room' },
  { name: 'Conservatory' },

  'room2',
  'room3',
  'room4',
  'room5',
  'room6',
  'room7',
  'room8',
  'room9',
  'room10',
  'room11',
  'room12',
  'room13',
  'room14',
  'room15',
  'room16',
];

// Weapons Collection
const weaponsArray = [
  {
    rope: {
      weight: 1,
    },
  },
  {
    knife: 10,
  },
  {
    name3: 'weight3',
  },
  {
    name4: 'weight4',
  },
  {
    name5: 'weight5',
  },
  {
    name6: 'weight6',
  },
  {
    name7: 'weight7',
  },

  {
    name: 'weight8',
  },
  {
    name: 'weight9',
  },
];
const cardTypes = [suspectsArray, roomsArray, weaponsArray];
// ITERATION 2
/*function selectRandom(randomElement) {
  return randomElement[Math.floor(Math.random() * randomElement.length)];
}
*/
function selectRandom(randomArr) {
  let randomElement = randomArr[Math.floor(Math.random() * randomArr.length)];

  return randomElement;
}

function pickMystery() {
  let suspect = selectRandom(suspectsArray);
  let room = selectRandom(roomsArray);
  let weapon = selectRandom(weaponsArray);

  let mystery = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };

  return mystery;
}

function revealMystery(mystery) {
  return `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!`;

  //  return __\<FIRST NAME\> \<LAST NAME\> killed Mr. Boddy using the \<WEAPON\> in the \<ROOM\>!__
}
// ITERATION 3

/*
name: rope --- weight: 10<br>
name: knife --- weight: 8<br>
name: candlestick --- weight: 2<br>
name: dumbbell --- weight: 30<br>
name: poison --- weight: 2<br>
name: axe --- weight: 15<br>
name: bat --- weight: 13<br>
name: trophy --- weight: 25<br>
name: pistol --- weight: 20<br>
*/
