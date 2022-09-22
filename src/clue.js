// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: `Jacob`,
    lastName: `Green`,
    occupation: `Entrepreneur`,
    age: 45,
    description: `He has a lot of connections`,
    image: `<a href="https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg">mrGreen<a/>`,
    color: `green`,
  },

  {
    firstName: `Doctor`,
    lastName: `Orchid`,
    occupation: `Scientist`,
    age: 26,
    description: `PhD in plant toxicology. Adopted daughter of Mr. Boddy`,
    image: `<a href="http://www.radiotimes.com/uploads/images/Original/111967.jpg">drOrchid<a/>`,
    color: `white`,
  },

  {
    firstName: `Victor`,
    lastName: `Plum`,
    occupation: `Designer`,
    age: 22,
    description: `Billionaire video game designer`,
    image: `<a href="https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg">profPlum<a/>`,
    color: `purple`,
  },

  {
    firstName: `Kasandra`,
    lastName: `Scarlet`,
    occupation: `Actor`,
    age: 31,
    description: `She is an A-list movie star with a dark past`,
    image: `<a href="https://www.radiotimes.com/uploads/images/Original/111967.jpg">missScarlet<a/>`,
    color: `red`,
  },

  {
    firstName: `Eleanor`,
    lastName: `Peacock`,
    occupation: `Socialité`,
    age: 36,
    description: `She is from a wealthy family and uses her status and money to earn popularity`,
    image: `<a href="https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg">mrsPeacock<a/>`,
    color: `blue`,
  },

  {
    firstName: `Jack`,
    lastName: `Mustard`,
    occupation: `Retired Football player`,
    age: 62,
    description: `He is a former football player who tries to get by on his former glory`,
    image: `<a href="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg">mrMustard<a/>`,
    color: `yellow`,
  },
];

// The suspects
const mrGreen = suspectsArray[0];
const drOrchid = suspectsArray[1];
const profPlum = suspectsArray[2];
const missScarlet = suspectsArray[3];
const mrsPeacock = suspectsArray[4];
const mrMustard = suspectsArray[5];

// Rooms Array

const roomsArray = [
  { name: `Dining Room` },
  { name: `Conservatory` },
  { name: `Kitchen` },
  { name: `Study` },
  { name: `Library` },
  { name: `Billiard Room` },
  { name: `Lounge` },
  { name: `Ballroomm` },
  { name: `Hall` },
  { name: `Spa` },
  { name: `Living Room` },
  { name: `Observatory` },
  { name: `Theater` },
  { name: `Guest House` },
  { name: `Patio` },
];

// Weapons Array

const weaponsArray = [
  { name: `rope`, weight: 10 },
  { name: `knife`, weight: 8 },
  { name: `candlestick`, weight: 2 },
  { name: `dumbbell`, weight: 30 },
  { name: `poison`, weight: 2 },
  { name: `axe`, weight: 15 },
  { name: `bat`, weight: 13 },
  { name: `trophy`, weight: 25 },
  { name: `pistol`, weight: 20 },
];

// ITERATION 2

function selectRandom() {}

// ITERATION 2
// Select Random Suspect
function selectRandomSuspect(suspectsArray) {
  return suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
}
// console.log(selectRandomSuspect(suspectsArray));

// Select Random Room
function selectRandomRoom(roomsArray) {
  return roomsArray[Math.floor(Math.random() * roomsArray.length)];
}
//console.log(selectRandomRoom(roomsArray));

// Select Random Weapon
function selectRandomWeapon(weaponsArray) {
  return weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
}
// console.log(selectRandomWeapon(weaponsArray));

function pickMystery() {}

// ITERATION 3

function revealMystery() {}
