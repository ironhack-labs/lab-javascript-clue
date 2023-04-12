// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName:    'Jacob',
    lastName:     'Green',
    occupation:   'Entrepreneur',
    age:           45,
    description:  'He has a lot of connections',
    image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color:        'green',
  },
  {
    firstName:    'Doctor',
    lastName:     'Orchid',
    occupation:   'Scientist',
    age:           26,
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color:        'white',
    
  },
  {
    firstName:    'Victor',
    lastName:     'Plum',
    occupation:   'Designer',
    age:           22,
    description:  'Billionare video game designer',
    image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    color:        'purple',
  },
  {
    firstName:    'Kasandra',
    lastName:     'Scarlet',
    occupation:   'Actor',
    age:           31,
    description:  'She is an A-list movie star with a dark past',
    image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    color:        'red',
  },
  {
    firstName:    'Eleanor',
    lastName:     'Peacock',
    occupation:   'Socialité',
    age:           36,
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color:        'blue',
  },
  {
    firstName:    'Jack',
    lastName:     'Mustard',
    occupation:   'Retired Football player',
    age:           62,
    description:  'He is a former football player who tries to get by on his former glory',
    image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    color:        'yellow',
  },
]


// Rooms Array

const roomsArray = [

{ name: 'Dinning Room' },
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
{ name: 'Patio' },
]

// Weapons Array

const weaponsArray = [
{ name: 'rope',         weight: 10 },
{ name: 'knife',        weight: 8 },
{ name: 'candlestick',  weight: 2 },
{ name: 'dumbbell',     weight: 30 },
{ name: 'poison',       weight: 2 },
{ name: 'axe',          weight: 15 },
{ name: 'bat',          weight: 13 },
{ name: 'trophy',       weight: 25 },
{ name: 'pistol',       weight: 20 },
];


// ITERATION 2

function selectRandom(array) {
    let random = Math.floor(Math.random() * array.length);
    return array[random];
  } 

function pickMystery(randomMistery) {
    let randomSuspect = selectRandom(suspectsArray)
    let randomWeapons = selectRandom(weaponsArray)
    let randomRooms = selectRandom(roomsArray)

    let mistery = {
        suspect: randomSuspect,
        weapon: randomWeapons,
        room: randomRooms,
    }
    return mistery
}

// ITERATION 3

function revealMystery(mistery) {
    return `${mistery.suspect.firstName} ${mistery.suspect.lastName} killed Mr. Boddy using the ${mistery.weapon.name} in the ${mistery.room.name}!`
}

