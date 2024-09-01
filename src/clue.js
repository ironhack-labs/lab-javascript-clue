// ITERATION 1

// Suspects Array **first name**, **last name**, **occupation**, **age**, **description**, **image** and **color**.

const suspectsArray = [
    {
        firstName: 'Alex',
        lastName: 'Lastra',
        occupation: 'Coder',
        age: 33,
        description: 'He has a lot of connections and is always willing to help people out.',
        image: 'https://sl.bing.net/fcrVJwR2G1Q',
        color: 'green'  
    },
    {
        firstName: 'Veronica',
        lastName: 'Green',
        occupation: 'Assasin',
        age: 45,
        description: 'She willing to solve people problems out -- for a price.',
        image: 'https://sl.bing.net/klN17nJ0jts',
        color: 'violet'
      },
      {
        firstName: 'Vero clone',
        lastName: 'Green',
        occupation: 'Assasin',
        age: 45,
        description: 'She willing to solve people problems out -- without a price.',
        image: 'https://sl.bing.net/faAXaEZg13A',
        color: 'purple'
      },
      {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A-list movie star whose past haunts her.',
        image: 'https://sl.bing.net/fy89qwRbN5U',
        color: 'red'
      },

];


// Rooms Array will only have a **name**.

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

// Weapons Array There are a total of nine _weapons_. Each of them has a different **name** and **weight**.

const weaponsArray = [
    {
        name: 'Bat',
          weight: 1.5 ,
    },
    {
        name: 'pistol',
          weight: 1.5 ,
    },
    {
        name: 'chair',
          weight: 4 ,
    },
    { name: 'rope', weight: 10 },
    { name: 'knife', weight: 8 },
    { name: 'candlestick', weight: 2 },
    { name: 'dumbbell', weight: 30 },
    { name: 'poison', weight: 2 },
    { name: 'axe', weight: 15 },
];


// ITERATION 2

function selectRandom(array) {
    const randomIndex = Math.floor(Math.random()* array.length);
    return array[randomIndex] 
}


function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
      };
}



// ITERATION 3

function revealMystery(envelope) {
return `${envelope.du}`
}

function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name}
     in the ${envelope.room.name}!`;
  }
  
  const mysteryEnvelope = pickMystery();
  console.log(revealMystery(mysteryEnvelope));