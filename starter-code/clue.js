var Characters = {

  mrGreen: {
  character: 'Mr Green',
  firstName: 'Jacob',
  lastName:  'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation: 'Entrepreneur',
  },

  drOrchid: {
  character: 'Dr Orchid',
  firstName: 'Doctor',
  lastName: 'Orchid',
  color: 'white',
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age: 26,
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  occupation: 'Scientist',
  },

  profPlum: {
  character: 'Prof Plum',
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'Billionare video game designer',
  age: 22,
  image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation: 'Designer',
  },

  missScarlet: {
  character: 'Miss Scarlet',
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is an A-list movie star with a dark past',
  age: 31,
  image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation: 'Actor',
  },

  mrsPeacock: {
  character: 'Mrs Peacock',
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  age: 36,
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation: 'Socialité',
  },

  mrMustard: {
  character: 'Mr Mustard',
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a former football player who tries to get by on his former glory',
  age: 62,
  image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation: 'Retired Football player',
  },
};
var Weapons = {

  rope: {type: 'Rope', Weight: 10, dmg: 1},

  knife: {type: 'Knife', Weight: 8, dmg: 7},

  candleStick: {type: 'Candlestick', Weight: 2, dmg: 3},

  dumbBell: {type: 'Dumbbell', Weight: 30, dmg: 6},

  poison: {type: 'Poison', Weight: 2, dmg: 5},

  axe: {type: 'Axe', Weight: 15, dmg: 9},

  bat: {type: 'Bat', Weight: 13, dmg: 8},

  trophy: {type: 'Trophy', Weight: 25, dmg: 2},

  pistol: {type: 'Pistol', Weight: 20, dmg: 10}
};

var Rooms = {
room1: 'Dinning Room',
room2: 'Conservatory',
room3: 'Kitchen',
room4: 'Study',
room5: 'Library',
room6: 'Billiard Room',
room7: 'Lounge',
room8: 'Ballroom',
room9: 'Hall',
room10: 'Spa',
room11: 'Living Room',
room12: 'Observatory',
room13: 'Theater',
room14: 'Guest House',
room15: 'Patio',
};



function random_selector(array) {

}

function pick_mistery() {

}

function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);



function chooseYourDestiny()  {

}


console.log(Math.floor(Math.random() * 6));

var char = Object.keys(Characters);
var weap = Object.keys(Weapons);
var room = Object.keys(Rooms);
