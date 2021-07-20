// ITERATION 1

// Suspects Array
const suspectsArray = [
  mrGreen = {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green',
  },

  drOrchid = {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white',
  },

  profPlum = {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple',
  },

  missScarlet = {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red',
  },

  mrsPeacock = {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue',
  },

  mrMustard = {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow',
  },
];
//console.log(suspectsArray)

// Rooms Array


const roomsArray = [
  {name: 'Dining Room'},
  {name: 'Conservatory'},
  {name: 'Kitchen'},
  {name: 'Study'},
  {name: 'Library'},
  {name: 'Billiard Room'},
  {name: 'Lounge'},
  {name: 'Ballroom'},
  {name: 'Hall'},
  {name: 'Spa'},
  {name: 'Living Room'},
  {name: 'Observatory'},
  {name: 'Theater'},
  {name: 'Guest House'},
  {name: 'Patio'},
];


// Weapons Array
const weaponsArray = [  
  {name: 'rope', weight: 10},
  {name: 'knife', weight: 8},
  {name: 'candlestick', weight: 2},
  {name: 'dumbbell', weight: 30},
  {name: 'poison',  weight: 2},
  {name: 'axe', weight: 15},
  {name: 'bat', weight: 13},
  {name: 'trophy', weight: 25},
  {name: 'pistol', weight: 20},
];



// ITERATION 2
/* To select a randomElement from the array, use Math.floor -> it gets the index ranging from 0 ~ arrayLength-1.
    -> Syntax: const randomElement = array[Math.floor(Math.random() * array.length)];
    Note: Math.random gets a random number between(0 ~ 1, 1 exclusive).
*/

function selectRandom(arrayOfSus) { 
  const randomSus = arrayOfSus[Math.floor(Math.random() * arrayOfSus.length)];
  return randomSus;
}


function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray), 
    room: selectRandom(roomsArray),
    weapon: selectRandom(weaponsArray),
  };
} 
/*
Same as declaring variavelX, suspect X = selectRandom(suspectsArray); 
and declare 'return variavelX' to end the execution.
*/



// ITERATION 3
function revealMystery(surprise) {
  const randSuspect = [surprise.suspect.firstName , surprise.suspect.lastName];
  const randWeapon = [surprise.weapon.name];
  const randRoom = [surprise.room.name];

  const disclosure = `${randSuspect[0]} ${randSuspect[1]} killed Mr. Boddy using the ${randWeapon} in the ${randRoom}!`
  
  return disclosure;
};



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
