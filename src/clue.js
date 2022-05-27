// ITERATION 1

// Suspects Array

const suspectsArray = [
  { firstName: 'Jacob', lastName: 'Green', occupation: 'Entrepreneur', age: 45, color: 'green', description: 'He has a lot of connections', image:'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg'},
  { firstName: 'Doctor', lastName: 'Orchid', occupation: 'Scientist', age: 26, color: 'white', description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg'},
  { firstName: 'Victor', lastName: 'Plum', occupation: 'Designer', age: 22, color: 'purple', description: 'Billionaire video game designer', image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg'},
  { firstName: 'Kasandra', lastName: 'Scarlet', occupation: 'Actor', age: 31, color: 'red', description: 'She is an A-list movie star with a dark past', image: ' https://www.radiotimes.com/uploads/images/Original/111967.jpg'},
  { firstName: 'Eleanor', lastName: 'Peacock', occupation: 'Socialité', age: 36, color: 'blue', description:'She is from a wealthy family and uses her status and money to earn popularity', image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg'},
  { firstName: 'Jack', lastName: 'Mustard', occupation: 'Retired Football player', age: 62, color: 'yellow', description:'He is a former football player who tries to get by on his former glory', image:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg'}
];

// Rooms Array

const roomsArray = [
  { name: 'Dining Room' },
  { name: 'Conservatory' },
  { name: 'Kitchen' },
  { name: ' Study' },
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
  { name: 'rope ', weight: 10 },
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

function selectRandom(array) {
  if (array.length === 0) {
    return undefined;
  }
   return array[Math.floor(Math.random() * array.length)];
}


function pickMystery() {
  let suspect = selectRandom(suspectsArray);
  let room = selectRandom(roomsArray);
  let weapon = selectRandom(weaponsArray);
    return {suspect, weapon, room}

}

// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}


//should return "<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <PLACE>!"

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
