// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        color: 'green',
    },
    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        color: 'white',
    },
    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        color: 'purple',
    },
    {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        color: 'red',
    },
    {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        color: 'blue',
    },
    {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        color: 'yellow',
    }
]

// Rooms Collection
const weaponsArray = [
    {
        wname: 'rope',
        weight: 10
    },
    {
        wname: 'knife',
        weight: 8
    },
    {
        wname: 'candlestick',
        weight: 2
    },
    {
        wname: 'dumbbell',
        weight: 30
    },
    {
        wname: 'poison',
        weight: 2,
    },
    {
        wname: 'axe',
        weight: 15
    },
    {
        wname: 'bat',
        weight: 13
    },
    {
        wname: 'trophy',
        weight: 25
    },
    {
        wname: 'pistol',
        weight: 20,
    }
]


// Weapons Collection
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
    'Spa',
    'Living Room',
    'Observatory',
    'Theater',
    'Guest House',
    'Patio',
]

// ITERATION 2

function selectRandom(array) {
    if (array.length === 0) {
        return undefined
    }
    else {
        let azar1 = array[parseInt(Math.random() * array.length)]
        return azar1
    } 
}


function pickMystery() {
    let misteryCard = {
        suspect: selectRandom(suspectsArray),
        room: selectRandom(roomsArray),
        weapon: selectRandom(weaponsArray)
    }
    return misteryCard
}
    
// ITERATION 3

function revealMystery(envelope) {
    return `"${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.wname} in the ${envelope.room}!"`
}

revealMystery(pickMystery())
