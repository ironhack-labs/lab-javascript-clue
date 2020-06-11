// ITERATION 1

// Suspects Collection
const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image: JSON.stringify('https://pbs.twimg.com/aprofile_images/506787499331428352/65jTv2uC.jpeg'),
    color: 'green' 
  },
  {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: JSON.stringify('http://www.radiotimes.com/uploads/images/Original/111967.jpg'),
    color: 'white'
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image: JSON.stringify('https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg'),
    color: 'purple'
  },
  {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: JSON.stringify('https://www.radiotimes.com/uploads/images/Original/111967.jpg'),
    color: 'red'
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: JSON.stringify('https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg'),
    color: 'blue'
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: JSON.stringify('https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg'),
    color: 'yellow'
  }
];

// Rooms Collection
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
  {name: 'Patio'}
];

// Weapons Collection
const weaponsArray = [
  {name: 'rope', weight: 10},
  {name: 'knife', weight: 8},
  {name: 'candlestick', weight: 2},
  {name: 'dumbbell', weight: 30},
  {name: 'poison', weight: 2},
  {name: 'axe', weight: 15},
  {name: 'bat', weight: 13},
  {name: 'trophy', weight: 25},
  {name: 'pistol', weight: 20}
];

// ITERATION 2

// #1: create function `selectRandom` that returns random array element.

// ES5
// function selectRandom(arr) {
//   if(arr.lenght === 0) { // if array is empty
//     return undefined; // return undefined
//   }

//   const randomIndexNum = Math.floor(Math.random() * arr.length); // get random index number by random selection
//   const randomEl = arr[randomIndexNum]; // get random object element from array by passing in the random number
//   return randomEl // return this object element
// }


// ES6
const selectRandom = arr => {
  if(arr.lenght === 0) { // if array is empty
    return undefined; // return undefined
  }

  let randomIndexNum = Math.floor(Math.random() * arr.length); // get random index number by random selection
  let randomEl = arr[randomIndexNum]; // get random object element from array by passing in the random number
  return randomEl // return this object element
}

// #2: create function `pickMystery` that returns object with 3 properties( _suspect_, _weapon_ and _room_).

// ES5
// function pickMystery() {
//   let msyteryObj = { // create new object
//     suspect: selectRandom(suspectsArray), // pick a random suspect from suspectsArray by random selection using selectRandom function
//     weapon: selectRandom(weaponsArray), // same for random selection of a weapon
//     room: selectRandom(roomsArray) // same for random selection of a room
//   };

//   return msyteryObj; // return new object
// }

// ES6
const pickMystery = () => {
  let msyteryObj = { // create new object
    suspect: selectRandom(suspectsArray), // pick a random suspect from suspectsArray by random selection using selectRandom function
    weapon: selectRandom(weaponsArray), // same for random selection of a weapon
    room: selectRandom(roomsArray) // same for random selection of a room
  };

  return msyteryObj; // return new object
}

// ITERATION 3

// create function `revealMystery` that receives an _envelope_ `object` (such as the one returned by `pickMystery`) as the single argument, and returns a reveal message.

let envelope = pickMystery(); // get and store the random suspect, weapon and room from pickMystery function

// ES5
// function revealMystery(envelope) {
//   let message = `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`; // create string and store in message variable
//   return message; // return message
// };

// ES6
const revealMystery = envelope => {
  let message = `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`; // create string and store in message variable
  return message; // return message
}