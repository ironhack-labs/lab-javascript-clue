// Characters Collection
const charactersArray = [];

// Rooms Collection
const roomsArray = [];

// Weapons Collection
const weaponsArray = [];


const mrGreen = {
  first_name:   'Jacob',
  last_name:    'Green',
  color:        'green',
  description:  'He has a lot of connections',
  age:          '45',
  image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation:   'Entrepreneur'
};

const drOrchid = {
  first_name:   'Doctor',
  last_name:    'Orchid',
  color:        'white',
  description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age:          '26',
  image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  occupation:   'Scientist'
};

const profPlum = {
  first_name:   'Victor',
  last_name:    'Plum',
  color:        'purple',
  description:  'Billionaire video game designer',
  age:          '22',
  image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation:   'Designer'
};

const missScarlet = {
  first_name:   'Kasandra',
  last_name:    'Scarlet',
  color:        'red',
  description:  'She is an A-list movie star with a dark past',
  age:          '31',
  image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation:   'Actor'
};

const mrsPeacock = {
  first_name:   'Eleanor',
  last_name:    'Peacock',
  color:        'blue',
  description:  'She is from a wealthy family and uses her status and money to earn popularity',
  age:          '36',
  image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation:   'Socialité'
};

const jack = {
  first_name:   'Jack',
  last_name:    'Mustard',
  color:        'yellow',
  description:  'He is a former football player who tries to get by on his former glory',
  age:          '62',
  image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation:   'Retired Football player'
};

// =================================== WEAPONS =========================================

const rope = {
  name: 'rope',
  weight: '10'
};

const knife = {
  name: 'knife',
  weight: '8'
};

const candlestick = {
  name: 'candlestick',
  weight: 2
};

const dumbbell = {
  name: 'dumbbell',
  weight: 30
};

const poison = {
  name: 'poison',
  weight: 2
};

const axe = {
  name: 'axe',
  weight: 15
};

const bat = {
  name: 'bat',
  weight: 13
};

const trophy = {
  name: 'trophy',
  weight: 25
};

const pistol = {
  name: 'pistol',
  weight: 20
};

// ================================== ROOMS ==========================================

const diningRoom = {
  name: 'Dining Room'
};

const conservatory = {
  name: 'Conservatory'
};

const kitchen = {
  name: 'Kitchen'
};

const study = {
  name: 'Study'
};

const library = {
  name: 'Library'
};

const billiardRoom = {
  name: 'Billiard Room'
};

const louge = {
  name: 'Louge'
};

const ballroom = {
  name: 'Ballroom'
};

const hall = {
  name: 'Hall'
};

const spa = {
  name: 'Spa'
};

const livingRoom = {
  name: 'Living Room'
};

const observatory = {
  name: 'Observatory'
};

const theater = {
  name: 'Theater'
};

const guestHouse = {
  name: 'Guest House'
};

const patio = {
  name: 'Patio'
};

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet,mrsPeacock, jack);

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

roomsArray.push(diningRoom, conservatory, kitchen, study, library, billiardRoom, louge, ballroom, 
hall, spa, livingRoom, observatory, theater, guestHouse, patio);

const randomSelector = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const pickMystery = () => {
  let mistery = {
    suspect: randomSelector(charactersArray),
    weapon: randomSelector(weaponsArray),
    room: randomSelector(roomsArray)
  }
  return mistery;
};

const revealMystery = (obj) => {
  return `${obj.suspect.first_name} ${obj.suspect.last_name} killed Mr. Boddy using the ${obj.weapon.name} in the ${obj.room.name}!!!!`;
};

let mysteryEnvelope = pickMystery();

revealMystery(mysteryEnvelope);