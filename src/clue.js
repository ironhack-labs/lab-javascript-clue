// ITERATION 1

// Suspects Array

const suspectsArray = [
  // mr green
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

  // Doctor Orchid
  {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
  },

  // profPlum
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

  //missScarlet
  {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
  },

  // mrsPeacock
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

  // mrMustard
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

// //TODO: selectRandom function
const suspects = suspectsArray; // declare a variable that holds the array of suspects to be used inside of the functions
const rooms = roomsArray; // declare a variable that holds the array of rooms to be used inside of the functions
const weapons = weaponsArray; // declare a variable that holds the array of weapons to be used inside of the functions

function selectRandom(arrayOfSuspects, arrayOfRooms, arrayOfWeapons) {
  let theSuspects =
    arrayOfSuspects[Math.floor(Math.random() * arrayOfSuspects.length)]; // made variable where we stored the data we get from the arrays called from inside the pickMystery function. We randomise all the elements of the array of suspects

  let theRooms = arrayOfRooms[Math.floor(Math.random() * arrayOfRooms.length)]; // made variable where we stored the data we get from the arrays called from inside the pickMystery function. We randomise all the elements of the array of rooms

  let theWeapons =
    arrayOfWeapons[Math.floor(Math.random() * arrayOfWeapons.length)]; // made variable where we stored the data we get from the arrays called from inside the pickMystery function. We randomise all the elements of the array of weapons

  const result = {
    theSuspects,
    theRooms,
    theWeapons
  }; // made one object where we store the results of the arrays so we can return it inside the selectRandom function.

  return result;
}

//TODO: pickMystery function

function pickMystery() {
  const getMystery = selectRandom(suspects, rooms, weapons); // defined a variable that stores the function selectRandom. The declared variables of the arrays are added as parameters to this function to be used inside of the selectRandom function.

  const giveMystery = {
    suspectFirstName: getMystery.theSuspects.firstName,
    suspectLastName: getMystery.theSuspects.lastName,
    murderRoom: getMystery.theRooms.name,
    murderWeapon: getMystery.theWeapons.name
  }; // made one object where all the data we need from the arrays to eventually be returned inside the pickMystery function.
  // console.log(giveMystery);
  return giveMystery;
}

// ITERATION 3
//TODO: revealMystery function
function revealMystery(suspect) {
  return console.log(
    `${suspect.suspectFirstName} ${suspect.suspectLastName} killed Mr.Boddy using the ${suspect.murderWeapon} in the ${suspect.murderRoom}!`
  ); // suspect is the parameter for accessing the giveMystery object of the pickMystery function.
}

revealMystery(pickMystery()); // added the pickMystery function as a parameter to the revealMystery function to get access to the giveMystery object from the pickMystery function.

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
