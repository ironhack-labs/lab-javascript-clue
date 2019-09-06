// Characters
const mrGreen = {
  first_name: 'Jacob',
  color: 'green',
  description: 'He has a lot of connections',
  last_name: 'Green',
  age: 45,
  image: 'https: //pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation: 'Entrepreneur'
};

const drOrchid = {
  first_name: 'Doctor',
  last_name: 'Orchid',
  color: 'white',
  description: 'PhD in plant toxicology.Adopted daughter of Mr.Boddy',
  age: 26,
  image: 'http: //www.radiotimes.com/uploads/images/Original/111967.jpg',
  occupation: 'Scientist'
};

const profPlum = {
  first_name: 'Victor',
  last_name: 'Plum',
  color: 'purple',
  description: 'Billionaire video game designer',
  age: 22,
  image: 'https: //metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation: 'Designer'
};

const missScarlet = {
  first_name: 'Kasandra',
  last_name: 'Scarlet',
  color: 'red',
  description: 'She is an A - list movie star with a dark past',
  age: 31,
  image: 'https: //metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation: 'Actor'
};

const mrsPeacock = {
  first_name: 'Eleanor',
  last_name: 'Peacock',
  color: 'blue',
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  age: 36,
  image: 'https: //metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation: 'Socialité'
};

const mrMustard = {
  first_name: 'Jack',
  last_name: 'Mustard',
  color: 'yellow',
  description: 'He is a former football player who tries to get by on his former glory',
  age: 62,
  image: 'https: //metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation: 'Retired Football player'
};

// Weapons
const weaponsArray = [{
    name: 'rope',
    weight: 10
  },

  {
    name: 'knife',
    weight: 8
  },
  {
    name: 'candlestick',
    weight: 2
  },
  {
    name: 'dumbbell',
    weight: 30
  },
  {
    name: 'poison',
    weight: 2
  },
  {
    name: 'axe',
    weight: 15
  },
  {
    name: 'bat',
    weight: 13
  },
  {
    name: 'trophy',
    weight: 25
  },
  {
    name: 'pistol',
    weight: 20
  }
];

const roomsArray = [{
    name: 'Dining Room'
  },
  {
    name: 'Conservatory'
  },
  {
    name: 'Kitchen'
  },
  {
    name: 'Study'
  },
  {
    name: 'Library'
  },
  {
    name: 'Billiard Room'
  },
  {
    name: 'Lounge'
  },
  {
    name: 'Ballroom'
  },
  {
    name: 'Hall'
  },
  {
    name: 'Spa'
  },
  {
    name: 'Living Room'
  },
  {
    name: 'Observatory'
  },
  {
    name: 'Theater'
  },
  {
    name: 'Guest House'
  },
  {
    name: 'Patio'
  }
];

// Characters Collection
const charactersArray = [];
charactersArray.push(mrGreen);
charactersArray.push(drOrchid);
charactersArray.push(profPlum);
charactersArray.push(missScarlet);
charactersArray.push(mrsPeacock);
charactersArray.push(mrMustard);

const randomSelector = arr => arr[Math.floor(Math.random() * arr.length)];

const pickMystery = () => {
  const mysteryEnvelope = {};
  mysteryEnvelope.suspect = randomSelector(charactersArray);
  mysteryEnvelope.weapon = randomSelector(weaponsArray);
  mysteryEnvelope.room = randomSelector(roomsArray);
  return mysteryEnvelope;
}

const revealMystery = crime => (`${crime.suspect.first_name} ${crime.suspect.last_name} killed Mr. Boddy using the ${crime.weapon.name} in the ${crime.room.name}!!!!`);

// console.log(revealMystery(pickMystery()));
