// ITERATION 1

// List of Suspects

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  occupation: 'Entrepreneur',
  age: 45,
  description: 'He has a lot of connections',
  image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  color: 'green'
};

const drOrchid = {
  firstName: 'Doctor',
  lastName: 'Orchid',
  occupation: 'Scientist',
  age: 26,
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  color: 'white'
};

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  occupation: 'Designer',
  age: 22,
  description: 'Billionaire video game designer',
  image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
  color: 'purple'
};

const missScarlet = {
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  occupation: 'Actor',
  age: 31,
  description: 'She is an A-list movie star with a dark past',
  image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
  color: 'red'
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  occupation: 'Socialité',
  age: 36,
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  color: 'blue',
};

const mrMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  occupation: 'Retired Football player',
  age: 62,
  description: 'He is a former football player who tries to get by on his former glory',
  image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
  color: 'yellow'
};

// Suspects Array

const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// List of Rooms

const diningRoom = {name: 'Dining Room'};
const conservatory = {name: 'Conservatory'};
const kitchen = {name: 'Kitchen'};
const study = {name: 'Study'};
const library = {name: 'Library'};
const billiardRoom = {name: 'Billiard Room'};
const lounge = {name: 'Lounge'};
const ballroom = {name: 'Ballroom'};
const hall = {name: 'Hall'};
const spa = {name: 'Spa'};
const livingRoom = {name: 'Living Room'};
const observatory = {name: 'Observatory'};
const theater = {name: 'Theater'};
const guestHouse = {name: 'Guest House'};
const patio = {name: 'Patio'};

// Rooms Array

const roomsArray = [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

// List of Weapons 

const rope = {name: 'rope', weight: 10};
const knife = {name: 'knife', weight: 8};
const  candlestick = {name: 'candlestick', weight: 2};
const dumbbel = {name: 'dumbbell', weight: 30};
const poison = {name: 'poison', weight: 2};
const axe = {name: 'axe', weight: 15};
const bat = {name: 'bat', weight: 13};
const trophy = {name: 'trophy', weight: 25};
const pistol = {name: 'pistol', weight: 20};

//Weapons Array

const weaponsArray = [rope, knife, candlestick, dumbbel, poison, axe, bat, trophy, pistol];

// ITERATION 2

function selectRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

function pickMystery() {
  let suspect = selectRandom(suspectsArray);
  let room = selectRandom(roomsArray);
  let weapon = selectRandom(weaponsArray);

  const object3 = {suspect, weapon, room}

  return object3;
};

// ITERATION 3

function revealMystery(object) {
  return `${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`
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
