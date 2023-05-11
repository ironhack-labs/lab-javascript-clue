// ITERATION 1

// Suspects Array

const suspectsArray = [{
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 50,
    description: 'This is a description',
    image:'an url',
    color: 'yellow'
  },
  {
    firstName: 'Emanuel',
    lastName: 'Macron',
    occupation: 'President',
    age: 50,
    description: 'This is a description',
    image:'an url',
    color: 'green'
  },
  {
    firstName: 'Bruno',
    lastName: 'Lemaire',
    occupation: 'Minister of Economic',
    age: 50,
    description: 'This is a description',
    image:'an url',
    color: 'purple'
  },
  {
    firstName: 'Christine',
    lastName: 'Lagarde',
    occupation: '1st minister',
    age: 50,
    description: 'This is a description',
    image:'an url',
    color: 'black'
  },
  {
    firstName: 'Arnaud',
    lastName: 'Lagardere',
    occupation: 'Entrepreneur',
    age: 50,
    description: 'This is a description',
    image:'an url',
    color: 'white'
  },
  {
    firstName: 'Bill',
    lastName: 'Gates',
    occupation: 'Entrepreneur',
    age: 50,
    description: 'This is a description',
    image:'an url',
    color: 'blue'
  }  
];

// Rooms Array

const roomsArray = [
    {
        name: 'Kitchen',
      },
      {
        name: 'Ballroom',
      },
      {
        name: 'Conservatory',
      },
      {
        name: 'Dinning room',
      },
      {
        name: 'Lounge',
      },
      {
        name: 'Hall',
      },
      {
        name: 'Study',
      },
      {
        name: 'Library',
      },
      {
        name: 'Billard room',
      },
      {
        name: 'Garden',
      },
      {
        name: 'Basement',
      },
      {
        name: 'Upstairs',
      },
      {
        name: 'Cellar',
      },
      {
        name: '1st floor',
      },
      {
        name: '2nd floor',
      },
    ];

// Weapons Array

const weaponsArray = [
    {
      name: 'revolver',
      weight: 500,
    },
    {
      name: 'Candlestick',
      weight: 3_000,
    },
    {
      name: 'Dagger',
      weight: 700,
    },
    {
      name: 'Rope',
      weight: 1_500,
    },
    {
      name: 'Wrench',
      weight: 1000,
    },
    {
      name: 'Lead Pipe',
      weight: 5000,
    },
    {
      name: 'Javascript',
      weight: 1000000,
    },
    {
      name: 'Html',
      weight: 6000,
    },
    {
      name: 'Css',
      weight: 7_500,
    },
];


// ITERATION 2

function selectRandom(arr) {
  const getRandomIndexInRange = (max) => Math.floor(Math.random() * max); 
  return arr[getRandomIndexInRange(arr.length)];
}

function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
  }
}


// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

