// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 31,
    description: "He has a lot of connections",
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: "brown"
  },
  {
    firstName: 'Johny',
    lastName: 'Red',
    occupation: 'Scientist',
    age: 21,
    description: "shPhD in plant toxicology. Adopted daughter of Mr. Boddyort nice person",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
  },
  {
    firstName: 'Sam',
    lastName: 'Yellow',
    occupation: 'Designer',
    age: 37,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "white"
  },
  {
    firstName: 'Kasandra',
    lastName: 'Purple',
    occupation: 'Actor',
    age: 51,
    description:  "She is an A-list movie star with a dark past",
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg ',
    color: "black"
  },
  {
    firstName: 'Sorrara',
    lastName: 'Binoma',
    occupation: 'Socialité',
    age: 33,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: "white"
  },
  {
    firstName: 'Jijimi',
    lastName: 'Kokora',
    occupation: 'Retired Football player',
    age: 41,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "black"
  }
];

// Rooms Array

const roomsArray = [
  {name: "Dining Room"},
  {name: "Kitchen"},
  {name: "Study"},
  {name: "Library"},
  {name: "Billiard Room"},
  {name: "Lounge"},
  {name: "Ballroom"},
  {name: "Hall"},
  {name: "Spa"},
  {name: "Living Room"},
  {name: "Observatory"},
  {name: "Theater"},
  {name: "Guest House"},
  {name: "Patio"},
];

// Weapons Array

const weaponsArray = [
  {
    name: "Response",
    weight: 10
  },
  {
    name: "knife",
    weight: 8
  },
  {
    name: "candlestick",
    weight: 2
  },
  {
    name: "dumbbell",
    weight: 30
  },
  {
    name: "poison",
    weight: 2
  },
  {
    name: "axe",
    weight: 2
  },
  {
    name: "bat",
    weight: 13
  },
  {
    name: "trophy",
    weight: 25
  },
  {
    name: "pistol",
    weight: 20
  },
];


// ITERATION 2

function selectRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

console.log(selectRandom(weaponsArray))

function pickMystery() {
  let obj = '';
  return obj = {
    randomWeapon: selectRandom(weaponsArray),
    randomPerson: selectRandom(suspectsArray),
    randomRoom: selectRandom(roomsArray),
  }
}

console.log(pickMystery())


// ITERATION 3


function revealMystery() {
  let weaponName = pickMystery().randomWeapon.name; 
  let killerName = pickMystery().randomPerson.firstName; 
  let killerSurname = pickMystery().randomPerson.lastName; 
  let roomName = pickMystery().randomRoom.name; 
  return `Killlers name is ${killerName} and he used ${weaponName}`
}

console.log(revealMystery())


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
