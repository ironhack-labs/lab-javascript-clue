// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 25,
        description: 'A business-minded individual with a sharp mind, always thinking of new ventures.',
        image: 'jacob_green.png',
        color: 'Green'
      },
      {
        firstName: 'Sarah',
        lastName: 'Blue',
        occupation: 'Artist',
        age: 32,
        description: 'A creative soul, constantly working on new projects and paintings.',
        image: 'sarah_blue.png',
        color: 'Blue'
      },
      {
        firstName: 'Ethan',
        lastName: 'Black',
        occupation: 'Scientist',
        age: 45,
        description: 'An analytical and methodical thinker, always focused on his experiments.',
        image: 'ethan_black.png',
        color: 'Black'
      },
      {
        firstName: 'Maria',
        lastName: 'White',
        occupation: 'Teacher',
        age: 38,
        description: 'A kind and patient person, known for her dedication to her students.',
        image: 'maria_white.png',
        color: 'White'
      },
      {
        firstName: 'Oscar',
        lastName: 'Gray',
        occupation: 'Lawyer',
        age: 50,
        description: 'A sharp-minded attorney who always has an answer for everything.',
        image: 'oscar_gray.png',
        color: 'Gray'
      },
      {
        firstName: 'Lena',
        lastName: 'Yellow',
        occupation: 'Journalist',
        age: 29,
        description: 'An inquisitive and courageous journalist, always on the hunt for a good story.',
        image: 'lena_yellow.png',
        color: 'Yellow'
      }

];

// Rooms Array

const roomsArray = [
    {
        name: 'Library'
    },
    {
        name: 'Kitchen'
    },
    {
        name: 'Dining Room'
    },
    {
        name: 'Ballroom'
    },
    {
        name: 'Parlor'
    },
    {
        name: 'Study'
    },
    {
        name: 'Master Bedroom'
    },
    {
        name: 'Guest Bedroom'
    },
    {
        name: 'Bathroom'
    },
    {
        name: 'Hallway'
    },
    {
        name: 'Gallery'
    },
    {
        name: 'Conservatory'
    },
    {
        name: 'Cellar'
    },
    {
        name: 'Garage'
    },
    {
        name: 'Attic'
    }
];

// Weapons Array

const weaponsArray = [
    {
        name: 'Shotgun',
        weight: 4
    },
    {
        name: 'Revolver',
        weight: 2
    },
    {
        name: 'Sledgehammer',
        weight: 5
    },
    {
        name: 'Hammer',
        weight: 1
    },
    {
        name: 'Rope',
        weight: 1
    },
    {
        name: 'Shovel',
        weight: 2
    },
    {
        name: 'Crossbow',
        weight: 3
    },
    {
        name: 'Crowbar',
        weight: 3
    },
    {
        name: 'Chainsaw',
        weight: 5
    }

];


// ITERATION 2

function selectRandom(arr) {
    let randomCards = arr[Math.floor(Math.random() * arr.length)];
    return randomCards;
}

function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray) ,
        weapon: selectRandom(weaponsArray) ,
        room: selectRandom(roomsArray)
    };
}



// ITERATION 3

function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

const envelope = pickMystery();
console.log(revealMystery(envelope));