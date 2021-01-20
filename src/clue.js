// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstname: 'Miss',
        lastname: 'Scarlett',
        occupation: 'pet sitter',
        age: 56,
        description: 'a fair lady',
        image: '',
        color: 'red'
    },
    {
        firstname: 'Reverend',
        lastname: 'Green',
        occupation: 'pastor',
        age: 68,
        description: 'he loves Jesus',
        image: '',
        color: 'green'
    },
    {
        firstname: 'Colonel',
        lastname: 'Mustard',
        occupation: 'policeman',
        age: 43,
        description: 'a man of the law',
        image: '',
        color: 'yellow'
    },
    {
        firstname: 'Professor',
        lastname: 'Plum',
        occupation: 'professor',
        age: 30,
        description: 'teacher by day, criminal by night',
        image: '',
        color: 'purple'
    },
    {
        firstname: 'Mrs.',
        lastname: 'Peacock',
        occupation: 'enterpreneur',
        age: 40,
        description: 'deadly and beautiful',
        image: '',
        color: 'blue'
    },
    {
        firstname: 'Mrs.',
        lastname: 'White',
        occupation: 'saleswoman',
        age: 60,
        description: 'a token of decency',
        image: '',
        color: 'white'
    }
];

// Rooms Collection
const roomsArray = [
    {
        name: 'kitchen'
    },
    {
        name: 'ballroom'
    },
    {
        name: 'conservatory'
    },
    {
        name: 'dining room'
    },
    {
        name: 'cellar'
    },
    {
        name: 'billiard room'
    },
    {
        name: 'library'
    },
    {
        name: 'lounge'
    },
    {
        name: 'hall'
    },
    {
        name: 'study'
    },
    {
        name: 'garden'
    },
    {
        name: 'master bedroom'
    },
    {
        name: 'bathroom'
    },
    {
        name: 'balcony'
    },
    {
        name: 'basement'
    },
];

// Weapons Collection
const weaponsArray = [
    {
        name: 'candlestick',
        weight: 0.5
    },
    {
        name: 'dagger',
        weight: 0.2
    },
    {
        name: 'lead pipe',
        weight: 1
    },
    {
        name: 'revolver',
        weight: 0.6
    },
    {
        name: 'rope',
        weight: 0.1
    },
    {
        name: 'wrench',
        weight: 0.3
    },
    {
        name: 'chainsaw',
        weight: 3
    },
    {
        name: 'swab',
        weight: 0.02
    },
    {
        name: 'cyanide',
        weight: 0.1
    }
];

// ITERATION 2

function selectRandom(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function pickMystery() {
    let mystery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
    return mystery;
}

pickMystery();

// ITERATION 3

function revealMystery() {
    let revealed = pickMystery();
    return `${revealed.suspect.firstname} ${revealed.suspect.lastname} killed Mr. Boddy using the ${revealed.weapon.name} in the ${revealed.room.name}!`
}

revealMystery();

// const revealMystery = mistery => {
//     return `${mistery.suspect.firstName} ${mistery.suspect.lastName} killed Mr. Boddy using the ${mistery.weapon.name} in the ${mistery.room.name}!`
//   }
  

