/*

Clue has three different card types: suspects, rooms, and weapons.

Let's create an array for every card type. These arrays should be named suspectsArray, weaponsArray, roomsArray. Each array will contain objects, where each object represents one card.

All of the information you need about suspects, rooms, and weapons can be found on the DATA.md file.

Suggestion: Copy this data into the clue.js file and model it into objects nested inside your cards arrays. This is a great chance for you to experiment with IDE shortcuts, multiple-line selection, find and replace, and other great features that VS Code provides.
*/
// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image:
      'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green'
  },
  {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image:
      'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple'
  },
  {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description:
      'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description:
      'He is a former football player who tries to get by on his former glory',
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
  }
];

console.log(suspectsArray);
// Rooms Array

const roomsArray = [
  { name: 'Dining Room' },
  { name: 'Conservatory' },
  { name: 'Kitchen' },
  { name: 'Study' },
  { name: 'Library' },
  { name: 'Billiard Room' },
  { name: 'Lounge' },
  { name: 'Ballroom' },
  { name: 'Hall' },
  { name: 'Spa' },
  { name: 'Living Room' },
  { name: 'Observatory' },
  { name: 'Theater' },
  { name: 'Guest House' },
  { name: 'Patio' }
];
console.log(roomsArray);

// Weapons Array

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

console.log(weaponsArray);
// ITERATION 2

function selectRandom(array) {
  if (array.length === 0) {
    return undefined;
  }
  let i = Math.floor(Math.random() * array.length);
  return array[i];
}

const randomWeapon = selectRandom(weaponsArray);
const randomSuspect = selectRandom(suspectsArray);
const randomRoom = selectRandom(roomsArray);
console.log(randomRoom, randomSuspect, randomWeapon);

function pickMystery() {
  let mysteryObject = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
  };
  return mysteryObject;
}

const mysteryObject = pickMystery();
// console.log(mystery);

// ITERATION 3

function revealMystery(object) {
  let revealMessage;
  for (const key in object) {
    console.log(object['suspect']);
    // console.log(object[key].firstName, object[key].lastName, object[key].name);
    revealMessage = `${object['suspect'].firstName} ${object['suspect'].lastName} killed Mr. Boddy using the ${object['weapon'].name} in the ${object['room'].name}!`;
  }
  return revealMessage;
}

const muderMystery = revealMystery(pickMystery());
console.log(muderMystery);

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
