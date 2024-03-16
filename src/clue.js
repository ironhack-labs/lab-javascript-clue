// ITERATION 1

// Suspects array
const suspectsArray = [
    {
      firstName: 'Jacob',
      lastName: 'Green',
      occupation: 'Entrepreneur',
      age: 45,
      description: 'He has a lot of connections and is always willing to help people out -- for a price.',
      image: 'jacob_green.jpg',
      color: 'green'
    },
    {
      firstName: 'Doctor',
      lastName: 'Orchid',
      occupation: 'Biologist',
      age: 32,
      description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy.',
      image: 'doctor_orchid.jpg',
      color: 'white'
    },
    {
      firstName: 'Victor',
      lastName: 'Plum',
      occupation: 'Video Game Designer',
      age: 36,
      description: 'Billionaire video game designer who is embracing his new popularity.',
      image: 'victor_plum.jpg',
      color: 'purple'
    },
    {
      firstName: 'Kasandra',
      lastName: 'Scarlet',
      occupation: 'Movie Star',
      age: 30,
      description: 'She is an A-list movie star with a dark past.',
      image: 'kasandra_scarlet.jpg',
      color: 'red'
    },
    {
      firstName: 'Eleanor',
      lastName: 'Peacock',
      occupation: 'Socialite',
      age: 55,
      description: 'She is from a wealthy family and uses her status and money to earn popularity.',
      image: 'eleanor_peacock.jpg',
      color: 'blue'
    },
    {
      firstName: 'Jack',
      lastName: 'Mustard',
      occupation: 'Retired Colonel',
      age: 60,
      description: 'He is a retired Colonel. He is accustomed to being in charge and is respected by his peers.',
      image: 'jack_mustard.jpg',
      color: 'yellow'
    }
  ];
  
  
  // Weapons array
const weaponsArray = [
    { name: 'Rope', weight: 10 },
    { name: 'Knife', weight: 8 },
    { name: 'Candlestick', weight: 2 },
    { name: 'Dumbbell', weight: 30 },
    { name: 'Poison', weight: 2 },
    { name: 'Axe', weight: 15 },
    { name: 'Bat', weight: 13 },
    { name: 'Trophy', weight: 25 },
    { name: 'Pistol', weight: 20 }
  ];
  
// Rooms array
const roomsArray = [
    { name: 'Kitchen' },
    { name: 'Ballroom' },
    { name: 'Conservatory' },
    { name: 'Dining Room' },
    { name: 'Cellar' },
    { name: 'Billiard Room' },
    { name: 'Library' },
    { name: 'Lounge' },
    { name: 'Hall' },
    { name: 'Study' },
    { name: 'Observatory' },
    { name: 'Theater' },
    { name: 'Guest House' },
    { name: 'Patio' },
    { name: 'Spa' }
  ];

// ITERATION 2

function selectRandom(array) {

  return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
    const suspect = selectRandom(suspectsArray);
    const weapon = selectRandom(weaponsArray);
    const room = selectRandom(roomsArray);

    return {
        suspect: suspect,
        weapon: weapon,
        room: room
    }
}

// ITERATION 3

function revealMystery(mistery) {
    const message = `${mistery.suspect.firstName} ${mistery.suspect.lastName} killed Mr. Boddy using the ${mistery.weapon.name} in the ${mistery.room.name}!`;
    return message
}

