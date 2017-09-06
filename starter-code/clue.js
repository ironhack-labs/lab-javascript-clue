var c1 = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  occupation: 'Entrepreneur',
};

var c2 = {
  firstName: 'Doctor',
  lastName: 'Orchid',
  color: 'white',
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age: 26,
  occupation: 'Scientist',
};

var c3 = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'Billionare video game designer',
  age: 22,
  occupation: 'Designer',
};

var c4 = {
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is an A-list movie star with a dark past',
  age: 31,
  occupation: 'Actor',
};

var c5 = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description:
    'She is from a wealthy family and uses her status and money to earn popularity',
  age: 36,
  occupation: 'Socialite',
};

var c6 = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description:
    'He is a former football player who tries to get by on his former glory',
  age: 62,
  occupation: 'Retired Football player',
};

var w1 = {
  name: 'Rope',
  weight: 10,
  color: 'yellow',
  damages: 2,
};

var w2 = {
  name: 'knife',
  weight: 8,
  color: 'silver',
  damages: 7,
};

var w3 = {
  name: 'candlestick',
  weight: 2,
  color: 'white',
  damages: 3,
};

var w4 = {
  name: 'dumbell',
  weight: 30,
  color: 'blue',
  damages: 5,
};

var w5 = {
  name: 'poison',
  weight: 2,
  color: 'red',
  damages: 9,
};

var w6 = {
  name: 'axe',
  weight: 15,
  color: 'green',
  damages: 8,
};

var w7 = {
  name: 'bat',
  weight: 13,
  color: 'wood',
  damages: 6,
};

var w8 = {
  name: 'trophy',
  weight: 25,
  color: 'gold',
  damages: 4,
};

var w9 = {
  name: 'pistol',
  weight: 20,
  color: 'black',
  damages: 10,
};

var r1 = {
  name: 'Dinning Room',
  square: '23m2',
};

var r2 = {
  name: 'Conservatory',
  square: '8m2',
};

var r3 = {
  name: 'Kitchen',
  square: '15m2',
};

var r4 = {
  name: 'Study',
  square: '65m2',
};

var r5 = {
  name: 'Library',
  square: '46m2',
};

var r6 = {
  name: 'Billiard Room',
  square: '18m2',
};

var r7 = {
  name: 'Lounge',
  square: '25m2',
};

var r8 = {
  name: 'Ballroom',
  square: '165m2',
};

var r9 = {
  name: 'Hall',
  square: '36m2',
};

var r10 = {
  name: 'Spa',
  square: '58m2',
};

var r11 = {
  name: 'Living Room',
  square: '65m2',
};

var r12 = {
  name: 'Observatory',
  square: '5m2',
};

var r13 = {
  name: 'Theater',
  square: '76m2',
};

var r14 = {
  name: 'Guest House',
  square: '265m2',
};

var r15 = {
  name: 'Patio',
  square: '25m2',
};

var characters = [c1, c2, c3, c4, c5, c6];
var weapons = [w1, w2, w3, w4, w5, w6, w7, w8, w9];
var rooms = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15];

function random_selector(array) {
  var i = '';
  i = Math.floor(Math.random() * array.length);
  return array[i];
}

//console.log (random_selector(characters));

function pick_mistery() {
  var mistery = {
    character: random_selector(characters),
    weapon: random_selector(weapons),
    room: random_selector(rooms),
  };
  return mistery;
}

function reveal_mistery(mistery) {
  console.log(
    mistery.character.firstName +
      ' ' +
      mistery.character.lastName +
      ' killed M.Boddy with the ' +
      mistery.weapon.color +
      ' ' +
      mistery.weapon.name +
      ' in the ' +
      mistery.room.name
  );
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
