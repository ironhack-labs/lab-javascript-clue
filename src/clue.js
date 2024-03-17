// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections and is always willing to help people out -- for a price.',
        image: 'https://i.imgur.com/EWCLfPC.png',
        color: 'green'
      },
      {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Biologist',
        age: 26,
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'white'
      },
      {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Video Game Designer',
        age: 22,
        description: 'Billionaire video game designer',
        image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
        color: 'purple'
      },
      {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Movie Star',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
        color: 'red'
      },
      {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Heiress',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue'
      },
      {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Former Football Player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
        color: 'yellow'
      }
];

// Rooms Array

const roomsArray = [
    'Dining Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'A Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Guest House',
  'A Patio'
];

// Weapons Array

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

function selectRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function pickMystery() {
    const mystery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
};

return mystery;
}

const mystery = pickMystery();
console.log('Mystery:', mystery);


// ITERATION 3

function revealMystery(envelope) {
    const { suspect, weapon, room } = envelope;
    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room}!`;  
}

// Example usage:
const mysteryEnvelope = {
    suspect: {
      firstName: 'John',
      lastName: 'Doe'
    },
    weapon: {
      name: 'knife'
    },
    room: 'Study'
  };
  
  const revealMessage = revealMystery(mysteryEnvelope);
  console.log(revealMessage);

