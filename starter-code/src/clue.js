// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
frst_name:   Doctor
lst_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters Collection
var charactersArray = [
  {
    mrGreen: {
      first_name:   'Jacob',
      last_name:    'Green',
      color:        'green',
      description:  'He has a lot of connections',
      age:          45,
      image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
      occupation:   'Entrepreneur'
    }
  },
  {
    drOrchid: {
      first_name:   'Doctor',
      last_name:    'Orchid',
      color:        'white',
      description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
      age:          26,
      image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
      ocupation:   'Scientist'
    }
  },
  {
    rofPlum: {
      first_name:   'Victor',
      last_name:    'Plum',
      color:        'purple',
      description:  'Billionare video game designer',
      age:          22,
      image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
      occupation:   'Designer'
    }
  },
  {
    missScarlet: {
      first_name:   'Kasandra',
      last_name:    'Scarlet',
      color:        'red',
      description:  'She is an A-list movie star with a dark past',
      age:          31,
      image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
      occupation:   'Actor'
    }
  },
  {
    mrsPeacock: {
      first_name:   'Eleanor',
      last_name:    'Peacock',
      color:        'blue',
      description:  'She is from a wealthy family and uses her status and money to earn popularity',
      age:          36,
      image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
      occupation:   'Socialité'
    }
  },
  {
    mrMustard: {
      first_name:   'Jack',
      last_name:    'Mustard',
      color:        'yellow',
      description:  'He is a former football player who tries to get by on his former glory',
      age:          62,
      image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
      occupation:   'Retired Football player'
    }
  }
];

// charactersArray.push(mrGreen, drOrchid, rofPlum, missScarlet, mrsPeacock, mrMustard);

// Rooms' Collection
var roomsArray = [
  'Dinning Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Guest House',
  'Patio'
];

// Weapons Collection
var weaponsArray = [
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

// Random Selector
function randomSelector(arr) {
  var randomNumber = Math.floor((Math.random() * arr.length));
  return arr[randomNumber];
}

// Create the mistery
function pickMistery() {
  var misteryEnvelope = [];
  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsArray));
  misteryEnvelope.push(randomSelector(roomsArray));  
  return misteryEnvelope;
}

function formater() {
  var first_n = (Object.values(randomSelector(charactersArray)))[0].first_name;
  var last_n = (Object.values(randomSelector(charactersArray)))[0].last_name;
  var room = randomSelector(roomsArray);
  var weapon = randomSelector(weaponsArray).name;
  var misteryEnvelope = [{first_name: first_n, last_name: last_n}, {name: weapon}, {name: room}];
  return misteryEnvelope;
}

// Revealing the mistery
var a = formater();

function revealMistery (arrMisteryEnvelope) {
  var result = arrMisteryEnvelope[0].first_name + ' ' + arrMisteryEnvelope[0].last_name + ' killed Mr.Boddy using the ' + arrMisteryEnvelope[1].name + ' in the ' + arrMisteryEnvelope[2].name + '!!!!';
  return result;
}

