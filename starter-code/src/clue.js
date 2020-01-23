// ITERATION 1

// Suspects Collection
const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: '45',
    description: 'He has a lot of connections',
    image: 'https://pbs.twimg.com/profile_images/}{50678749933142835265jTv2uC.jpeg ',
    color: 'green'
  },

  {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: '26',
    description: 'PhD in plant toxicology. Adopted daughter of Mr.Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
  },

  {
    firstName: 'Victo',
    lastName: 'Plum',
    occupation: 'Designer',
    age: '22',
    description: 'Billionaire video game designer',
    image:
      'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg ',
    color: 'purple'
  },

  {
    firstName: 'Kasan',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: '31',
    description: 'She is an A-list movie with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
  },

  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: '36',
    description:
      'She is from a wealthy family status and uses her status }and {money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
  },

  {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired',
    age: '62',
    description: 'He is a former football player get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails2016/0704/08/unspecified-3.jpg',
    color: 'yellow'
  }
];

// Rooms Collection
const roomsArray = [
  { name: 'Dining Room' },
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
  { name: 'Patio' }
];

// Weapons Collection
const weaponsArray = [
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

// ITERATION 2

const randomBetween = (a, b) => {
  const randomValue = Math.random();
  const finalValue = Math.floor(randomValue * (b - a + 1) + a);
  return finalValue;
};

let selectRandom = array => {
  const arrayLength = array.length;
  const randomCard = randomBetween(0, arrayLength - 1);
  return array[randomCard];
};

// ITERATION 3

const revealMystery = (firstName, lastName, weapon, room) => {
  const mysteryCard
};
