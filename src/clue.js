// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 30,
    description: 'Green has a lot of connections and is always willing to help people out - for a price.',
    image:'https://cf.ltkcdn.net/family/images/std/314246-800x800-mr-green-clue-characters.webp' ,
    color: 'green',
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Football player',
    age: 40,
    description: 'Mustard is a former football player who tries to get by on his former glory.',
    image: 'https://cf.ltkcdn.net/family/images/std/314242-800x800-clonel-mustard-clue-character.web' ,
    color:'yellow',
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'video game designer',
    age: 35,
    description: 'Plum is a billionaire video game designer who is embracing his new popularity.',
    image: 'https://cf.ltkcdn.net/family/images/std/314244-800x800-professor-plum-clue-characters.webp',
    color: 'purple',
  },
  {
    firstName: 'Diane',
    lastName: 'White',
    occupation: 'ex-child star',
    age: 50,
    description: 'White is a former child star desperate to find fame again.',
    image: 'https://cf.ltkcdn.net/family/images/std/314243-800x800-mrs-white-clue-characters.webp',
    color: 'white',
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'rich',
    age: 20,
    description: 'Peacock is from a wealthy family and uses her status and money to earn popularity.',
    image: 'https://cf.ltkcdn.net/family/images/std/314245-800x800-mrs-peacock-clue-characters.webp',
    color: 'blue',
  },
  {
    firstName: 'Kassandra',
    lastName: 'Scarlet',
    occupation: 'actress',
    age: 25,
    description: 'Scarlet is an A-list movie star whose past haunts her.',
    image: 'https://cf.ltkcdn.net/family/images/std/314247-800x800-ms-scarlett-clue-characters.webp',
    color: 'red',
  }
];

// Rooms Array

const roomsArray = [
  {
    name: 'billiard room'
  },
  {
    name: 'conservatory'
  },
  {
    name: 'hall'
  },
  {
    name: 'fountain'
  },
  {
    name: 'drawing room'
  },
  {
    name: 'dining room'
  },
  {
    name: 'kitchen'
  },
  {
    name: 'lounge'
  },
  {
    name: 'carriage house'
  },
  {
    name: 'library'
  },
  {
    name: 'ballroom'
  },
  {
    name: 'study'
  },
  {
    name: 'courtyard'
  },
  {
    name: 'garden'
  },
  {
    name: 'bedroom'
  },
];

// Weapons Array

const weaponsArray = [
  {
    name: 'rope',
    weight: 250,
  },
  {
    name:'candlestick',
    weight: 500,
  },
  {
    name: 'knife',
    weight: 100,
  },
  {
    name: 'pistol',
    weight: 600,
  },
  {
    name:'bat',
    weight: 1000,
  },
  {
    name: 'dumbbell',
    weight: 600,
  },
  {
    name:'trophy',
    weight: 1000,
  },
  {
    name: 'poison',
    weight: 10,
  },
  {
    name: 'axe',
    weight: 2000,
  },
];


// ITERATION 2

function selectRandom(cardArray) {
  const randomNum = Math.floor(Math.random() * cardArray.length);
  return cardArray[randomNum];
}
console.log(suspectsArray.length);

function pickMystery() {
 const envelope= {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };
  return envelope;
}


// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}