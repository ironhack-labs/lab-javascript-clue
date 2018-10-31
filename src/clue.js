// Characters

let mrGreen = {
  first_name: 'Jacob',
  last_name: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation: 'Entrepreneur'
};

let drOrchid = {
  first_name: 'Doctor',
  last_name: 'Orchid',
  color: 'white',
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age: 26,
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  ocupation: 'Scientist'
};

let profPlum = {
  first_name: 'Victor',
  last_name: 'Plum',
  color: 'purple',
  description: 'Bllionare video game designer',
  age: 22,
  image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation: 'Designer'
};

let missScarlet = {
  first_name: 'Kasandra',
  last_name: 'Scarlet',
  color: 'red',
  description: 'She is an A-list movie star with a dark past',
  age: 31,
  image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation: 'Actor'
};

let mrsPeacock = {
  first_name: 'Eleanor',
  last_name: 'Peacock',
  color: 'blue',
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  age: 36,
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation: 'Socialité'
};

let mrMustard = {
  first_name: 'Jack',
  last_name: 'Mustard',
  color: 'yellow',
  description: 'He is a former football player who tries to get by on his former glory',
  age: 62,
  image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation: 'Retired Football player'
};

// Weapons
let weapons = [
  { weapon_name: 'rope', weight: 10 },
  { weapon_name: 'knife', weight: 8 },
  { weapon_name: 'candlestick', weight: 2 },
  { weapon_name: 'dumbbell', weight: 30 },
  { weapon_name: 'poison', weight: 2 },
  { weapon_name: 'axe', weight: 15 },
  { weapon_name: 'bat', weight: 13 },
  { weapon_name: 'trophy', weight: 25 },
  { weapon_name: 'pistol', weight: 20 }
];

let rooms = [
  { room_name: 'Dinning Room' },
  { room_name: 'Conservatory' },
  { room_name: 'Kitchen' },
  { room_name: 'Study' },
  { room_name: 'Library' },
  { room_name: 'Billiard Room' },
  { room_name: 'Lounge' },
  { room_name: 'Ballroom' },
  { room_name: 'Hall' },
  { room_name: 'Spa' },
  { room_name: 'Living Room' },
  { room_name: 'Observatory' },
  { room_name: 'Theater' },
  { room_name: 'Guest House' },
  { room_name: 'Patio' }
];
// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
var roomsArray = rooms.map(element => element);

// Weapons Collection
var weaponsArray = weapons.map(element => element);

// random
function randomSelector(array) {
  let random = Math.floor(Math.random() * array.length);
  return array[random];
}

function pickMistery() {
  return [randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray)];
}

function revealMistery() {
  // string builder...
  let mistery = '';
  // loop through pickMistery ..
  // loop through each element in object and extract what you looking for!
  // append to string

  pickMistery().map(element => {
    for (let prop in element) {
      switch (prop) {
        case 'first_name':
          mistery += `${element[prop]} `;
          break;
        case 'last_name':
          mistery += `${element[prop]} killed Mr.Boddy using the `;
          break;
        case 'weapon_name':
          mistery += `${element[prop]} in the `;
          break;
        case 'room_name':
          mistery += `${element[prop]}!!!`;
          break;
        default:
          break;
      }
    }
  });
  console.log(mistery);
  return mistery;
}
