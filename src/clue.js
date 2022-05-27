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
// function selectRandom(arrayOfSuspects, arrayOfRooms, arrayOfWeapons) {
//   let suspects =
//     arrayOfSuspects[Math.floor(Math.random() * arrayOfSuspects.length)]; // created a variable to store the result of the randomised suspect

//   let rooms = arrayOfRooms[Math.floor(Math.random() * arrayOfRooms.length)]; // created a variable to store the result of the randomised room
//   let weapons =
//     arrayOfWeapons[Math.floor(Math.random() * arrayOfWeapons.length)]; // created a variable to store the result of the randomised weapon

//   const result = {
//     suspects,
//     rooms,
//     weapons
//   }; // created a variable where I stored all the different variables that contains the randomised elements from the arrays above.

//   console.log(
//     result.suspects.firstName,
//     result.suspects.lastName,
//     result.rooms.name,
//     result.weapons.name
//   );
//   return result; // return the combined elements from arrays as one variable
// }

// when the function runs, return the arrayOf Suspects, round it to the largest integer less or equal to the specified number with Math.floor().
// randomise the elements with Math.random() everytime the pages refreshes
// multiply the elements of the array with the total length of th array and show a random murderer.

// selectRandom(suspectsArray, roomsArray, weaponsArray); // call the function and add the arrays to the function to be called/used inside of the function itself

//TODO: pickMystery function
const suspects = suspectsArray; // declare a variable that holds the array to be used inside of the functions
const rooms = roomsArray;
const weapons = weaponsArray;

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

function pickMystery() {
  const getMystery = selectRandom(suspects, rooms, weapons); // defined a variable that stores the function selectRandom. The declared variables of the arrays are added as parameters to this function to be used inside of the selectRandom function.

  const giveMystery = {
    suspectFirstName: getMystery.theSuspects.firstName,
    suspectLastName: getMystery.theSuspects.lastName,
    suspectImg: getMystery.theSuspects.image,
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
    `${suspect.suspectFirstName} ${suspect.suspectLastName} ${suspect.suspectImg} killed Mr.Boddy using the ${suspect.murderWeapon} in the ${suspect.murderRoom}!`
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
