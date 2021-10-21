// ITERATION 1

// Suspects Array

const suspectsArray = [
  (mrGreen = {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image:
      'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green'
  }),
  (drOrchid = {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
  }),
  (profPlum = {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billonaire video game designer',
    image:
      'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple'
  }),
  (missScarlet = {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
  }),
  (mrsPeacock = {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialite',
    age: 36,
    description:
      'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
  }),
  (mrMustard = {
    firstName: 'Jacl',
    lastName: 'Mustard',
    occupation: 'Retired Fotball player',
    age: 62,
    description:
      'He is a former football player who tries to get by on his former glory',
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
  })
];

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

// Weapons Array

const weaponsArray = [
  (Rope = { name: 'rope', weight: 10 }),
  (Knife = { name: 'knife', weight: 8 }),
  (Candelstick = { name: 'candlestick', weight: 2 }),
  (Dumbbell = { name: 'dumbbell', weight: 30 }),
  (Poison = { name: 'poison', weight: 2 }),
  (Axe = { name: 'axe', weight: 15 }),
  (Bat = { name: 'bat', weight: 13 }),
  (Trophy = { name: 'trophy', weight: 25 }),
  (Pistol = { name: 'pistol', weight: 20 })
];

// ITERATION 2

function selectRandom(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let randomNumber = Math.floor(Math.random(arr) * arr.length);
  return arr[randomNumber]
}

function pickMystery() {
  let suspect = selectRandom(suspectsArray);
  let room = selectRandom(roomsArray);
  let weapon = selectRandom(weaponsArray);
  return {suspect, weapon, room};
}

// ITERATION 3
let data = pickMystery();
function revealMystery() {
  return `${suspectsArray[2].firstName} ${suspectsArray[2].lastName} killed Mr. Boddy using the ${weaponsArray[4].name} in the ${roomsArray[5].name}!`;
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
