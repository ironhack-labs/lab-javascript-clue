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
        color: 'purple'
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
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        color: 'yellow'
    },
];

// Rooms Collection
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
'Patio'

    
];

// Weapons Collection
const weaponsArray = [

    {
        name: 'rope',
        weight: 10
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

// ITERATION 2

function selectRandom(someArr) {

switch (someArr.length) {
    case 0:
        return undefined;
        break

    default:
        const randomIndex = someArr[Math.floor(Math.random() * someArr.length)]
        return randomIndex
        break
}

}

// ITERATION 3

function pickMystery() {

    const mystery = {

        suspect: selectRandom(suspectsArray),

        room: selectRandom(roomsArray),

        weapon: selectRandom(weaponsArray)

    }

    return mystery

}

function revealMystery() {

    

    let solvedMystery = `${pickMystery().suspect.firstName} ${pickMystery().suspect.lastName} killed Mr.Boddy using the ${pickMystery().weapon.name} in the ${pickMystery().room}!`

    return solvedMystery

}