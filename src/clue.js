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

// Rooms Array

const roomsArray = [
  {
    name: 'Attic'
  },
  {
    name: 'Master bedroom'
  },
  {
    name: 'Garage'
  },
  {
    name: 'Kitchen'
  },
  {
    name: 'Conservatory'
  },
  {
    name: 'Garden'
  },
  {
    name: 'Dining room'
  },
  {
    name: 'Guests bedroom'
  },
  {
    name: 'Balcony'
  },
  {
    name: 'Utility room'
  },
  {
    name: 'Wine cellar'
  },
  {
    name: 'Swimming pool'
  },
  {
    name: 'Panic room'
  },
  {
    name: 'Study'
  },
  {
    name: 'Patio'
  }
];

// Weapons Array

const weaponsArray = [
  {
    name: 'Flamethrower',
    weight: 31
  },
  {
    name: 'Poison',
    weight: 1
  },
  {
    name: 'Mace',
    weight: 5
  },
  {
    name: 'Crossbow',
    weight: 25
  },
  {
    name: 'Knife',
    weight: 1
  },
  {
    name: 'Bat',
    weight: 3
  },
  {
    name: 'Broken glass',
    weight: 1
  },
  {
    name: 'Stone',
    weight: 2
  },
  {
    name: 'Katana',
    weight: 3
  }
];

// ITERATION 2

function selectRandom(array) {
  if (array.length === 1) return array[0];
  else if (array == 0 || !array) return undefined;

  const randomArrPosition = Math.floor(Math.random() * array.length);

  return array[randomArrPosition];
}

function pickMystery() {
  const randomSuspect = selectRandom(suspectsArray);
  const randomWeapon = selectRandom(weaponsArray);
  const randomRoom = selectRandom(roomsArray);

  return {
    suspect: randomSuspect,
    weapon: randomWeapon,
    room: randomRoom
  };
}

// ITERATION 3

function revealMystery(misteryObj) {

  return`${misteryObj.suspect.firstName} ${misteryObj.suspect.lastName} killed Mr. Boddy using the ${misteryObj.weapon.name} in the ${misteryObj.room.name}!`
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
