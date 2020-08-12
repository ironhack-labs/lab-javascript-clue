
// ITERATION 2
// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        color: 'green'
    },
    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        color: 'white'
    },
    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        color: 'purple'
    },
    {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        color: 'red'
    },
    {
        
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        color: 'blue'
    },
    {
        firstName: 'Jack,',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        color: 'yellow'
    }
];

// Rooms Collection
const weaponsArray = [
    {
        name: 'rope',
        weight: 10,
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
        name: 'dumbbell',
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
        name: 'bat',
        weight: 13
    },
    {
        name: 'trophy',
        weight: 25
    },
    {
        name: 'pistol',
        weight: 20
    }
];

// Rooms Collection
const roomsArray = [
  {
      name: 'Dining Room'
  },
  {
    name: 'Conservatory'
},
{
    name: 'Kitchen'
},
{
    name: 'Study'
},
{
    name: 'Library'
},
{
    name: 'Billiard'
},
{
    name: 'Lounge'
},
{
    name: 'Ballroo'
},
{
    name: 'Hall'
},
{
    name: 'Spa'
},
{
    name: 'Living Room'
},
{
    name: 'Observatory'
},
{
    name: 'Theater'
},
{
    name: 'Guest House'
},
{
    name: 'Patio'
}
];


function selectRandom(array) {
    if(array.length === 0) {
        return undefined;
    }

    return array[Math.floor(Math.random() * array.length)];
};

function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
};

let envelope = pickMystery();
// console.log(envelope);

function revealMystery(envelopObject) {
  
  return `${envelopObject.suspect.firstName} ${envelopObject.suspect.lastName} killed Mr. Boddy using the ${envelopObject.weapon.name} in the ${envelopObject.room.name}!`;
};

revealMystery(envelope);