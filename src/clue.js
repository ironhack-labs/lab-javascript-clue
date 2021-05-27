// ITERATION 1

// Suspects Collection
const suspectsArray = [ 
  { 
    firstName: 'Jacob',
    lastName: 'Evergreen',
    occupaction: 'Enterpreneur',
    age: 45,
    description: 'He has a lot of connections.',
    image:'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color:'green' 
  },
  { 
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupaction: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupaction: 'Designer',
    age: 22,
    description: 'Billionaira video game designer',
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple'
  },
  {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupaction: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupaction: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupaction: 'Retired football player',
    age: 62,
    description: 'He is a former football player who tries get by own his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
  },

];

// Rooms Collection

const roomsArray = [
  'Dinning room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge',
  'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio'
];

// Weapons Collection
const weaponsArray = [
  { 
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
    name:'dumbell',
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
    name:'bat',
    weight: 13
  },
  {
    name: 'trophy',
    weight: 20 
  },
  {
    name: 'pistol',
    weight: 20
  },
];
// ITERATION 2 
function selectRandom(arr){
  const random = arr[Math.round(Math.random() * arr.length -1)];

  return random;
};

function pickMystery(){
  const suspect = selectRandom(suspectsArray);
  const room = selectRandom(roomsArray);
  const weapon = selectRandom(weaponsArray);

  return { 
    suspect, 
    room: { name: room }, 
    weapon 
  };
};

// ITERATION 3
const card = pickMystery();
function revealMystery(card){
  const suspect = `${card.suspect.firstName} ${card.suspect.lastName}`
  const weapon = card.weapon.name;
  const room = card.room.name;

  return `${suspect} killed Mr. Boddy using the ${weapon} in the ${room}!`;
};

