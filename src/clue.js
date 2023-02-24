// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Cristian',
        lastName: 'Palao',
        occupation: 'Teacher',
        age: 35,
        description: 'Tall with brown hair and glasses',
        color: 'Yellow',
        image: 'none'
    },
    {
        firstName: 'Sarah',
        lastName: 'Jones',
        occupation: 'Lawyer',
        age: 42,
        description: 'Short with blond hair and a scar in her right hand',
        color: 'Green',
        image: 'none'
    },
    {
        firstName: 'David',
        lastName: 'Correia',
        occupation: 'Accountant',
        age: 28,
        description: 'Medium height with black hair and a tattoo in his right hand',
        color: 'Red',
        image: 'none'
    },
    {
        firstName: 'Emily',
        lastName: 'Flowers',
        occupation: 'Doctor',
        age: 37,
        description: 'Tall with curly brown hair',
        color: 'Yellow',
        image: 'none'
    },
    {
        firstName: 'Michael',
        lastName: 'Scott',
        occupation: 'Regional Manager',
        age: 31,
        description: 'Short with blonde hair and a piercing in his ear',
        color: 'Purple',
        image: 'none'
    },
    {
        firstName: 'Jasmine',
        lastName: 'Garcia',
        occupation: 'Artist',
        age: 25,
        description: 'Medium height with dark brown hair and a nose ring',
        color: 'Pink',
        image: 'none'
    }
];

// Rooms Array

const roomsArray = [
    {
        name: 'Kitchen'
      },
      {
        name: 'Ballroom'
      },
      {
        name: 'Conservatory'
      },
      {
        name: 'Billiard Room'
      },
      {
        name: 'Library'
      },
      {
        name: 'Study'
      },
      {
        name: 'Hall'
      },
      {
        name: 'Lounge'
      },
      {
        name: 'Dining Room'
      },
      {
        name: 'Cellar'
      },
      {
        name: 'Attic'
      },
      {
        name: 'Guest House'
      },
      {
        name: 'Patio'
      },
      {
        name: 'Spa'
      },
      {
        name: 'Theater'
      }
];

// Weapons Array

const weaponsArray = [
    {
        name: 'Revolver',
        weight: 0.8
    },
    {
        name: 'Pipe',
        weight: 1.5
    },
    {
        name: 'Knife',
        weight: 0.2
    },
    {
        name: 'Wrench',
        weight: 1.2
    },
    {
        name: 'Candlestick',
        weight: 0.6
    },
    {
        name: 'Rope',
        weight: 0.5
    },
    {
        name: 'Fork',
        weight: 0.2
    },
    {
        name: 'Poison',
        weight: 0.1
    },
    {
        name: 'Bat',
        weight: 1.3
    }
];


// ITERATION 2

function selectRandom(arr) {
    const randomNumSelector = Math.floor(Math.random() * arr.length);
    return arr[randomNumSelector];
}

function pickMystery() {
    const randomSuspect = selectRandom(suspectsArray);
    const randomWeapon = selectRandom(weaponsArray);
    const randomRoom = selectRandom(roomsArray);

    return {
        suspect: randomSuspect,
        weapon: randomWeapon,
        room: randomRoom
    };
}


// ITERATION 3

function revealMystery(envelopeSolution) {
    const {suspect, weapon, room} = envelopeSolution;
    const {firstName, lastName} = suspect;

    return `"${firstName} ${lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}`;
}

const mysterySet = pickMystery();
console.log(revealMystery(mysterySet));