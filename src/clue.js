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
      'https://carboncostume.com/wordpress/wp-content/uploads/2017/10/mrgreen3.jpg',
    color: 'green '
  }),
  (drOrchid = {
    firstName: 'Doctor ',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image:
      'https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_2000,x_0,y_50/v1560965041/shape/mentalfloss/586055-hasbro.jpg?itok=x4QQWTxa',
    color: 'white'
  }),
  (profPlum = {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image:
      'https://vignette.wikia.nocookie.net/cluedo/images/a/a4/2016C6.jpg/revision/latest?cb=20200927103539',
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
    occupation: 'SocialitÃ©',
    age: 36,
    description:
      'She is from a wealthy family and uses her status and money to earn popularity',
    image:
      'https://vignette.wikia.nocookie.net/cluedo/images/b/b0/2016C5.jpg/revision/latest?cb=20200927103538',
    color: 'blue'
  }),
  (mrMustard = {
    firstName: 'Jack ',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description:
      'He is a former football player who tries to get by on his former glory',
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
  })
];

// let suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
// Rooms Array

let DiningRoom = {
  name: 'DiningRoom'
};

let Kitchen = {
  name: 'Kitchen'
};
let Study = {
  name: 'Study'
};
let Library = {
  name: 'Library'
};

let BilliardRoom = {
  name: 'BilliardRoom'
};

let Hall = {
  name: 'Hall'
};

let Spa = {
  name: 'Spa'
};

let LivingRoom = {
  name: 'LivingRoom'
};

let Observatory = {
  name: 'Observatory'
};

let GuestHouse = {
  name: 'GuestHouse'
};

let Patio = {
  name: 'Patio'
};

let Lounge = {
  name: 'Lounge'
};

let Conservatory = {
  name: 'Conservatory'
};

let Ballroom = {
  name: 'Ballroom'
};

let Theater = {
  name: 'Theater'
};

const roomsArray = [
  DiningRoom,
  Conservatory,
  Ballroom,
  Lounge,
  Kitchen,
  Study,
  Library,
  BilliardRoom,
  Hall,
  Spa,
  LivingRoom,
  Observatory,
  GuestHouse,
  Patio,
  Theater
];

// Weapons Array

let rope = {
  name: 'rope',
  weight: 10
};

let knife = {
  name: 'knife',
  weight: 8
};

let candlestick = {
  name: 'candlestick',
  weight: 2
};

let dumbbell = {
  name: 'dumbbell',
  weight: 30
};

let poison = {
  name: 'poison',
  weight: 2
};

let axe = {
  name: 'axe',
  weight: 15
};

let bat = {
  name: 'bat',
  weight: 13
};

let pistol = {
  name: 'pistol',
  weight: 13
};

let trophy = {
  name: 'trophy ',
  weight: 13
};

const weaponsArray = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  pistol,
  trophy
];

// ITERATION 2
function selectRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickMystery() {
  let suspect = selectRandom(suspectsArray);
  let room = selectRandom(roomsArray);
  let weapon = selectRandom(weaponsArray);

  let mystery = { suspect, room, weapon };

  return mystery;
}

// ITERATION 3

function revealMystery(envelope) {
  let fraseRevelacion = `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;

  return fraseRevelacion;
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
