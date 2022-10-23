// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 35,
        description: 'Director of a Blockchain Company',
        image: 'https://www.google.com/Jacob.jpg',
        color: 'Green'
    },
    {
        firstName: 'Peter',
        lastName: 'Griffin',
        occupation: 'Police',
        age: 40,
        description: 'Police Commissioner',
        image: 'https://www.google.com/Peter.jpg',
        color: 'Blue'
    },
    {
        firstName: 'Homer',
        lastName: 'Simpson',
        occupation: 'Nuclear Power Plant Safety Worker',
        age: 45,
        description: 'He has a passion for donuts',
        image: 'https://www.google.com/Homer.jpg',
        color: 'Yellow'
    },
    {
        firstName: 'Jon',
        lastName: 'Snow',
        occupation: 'Lord Commander of the Nights Watch',
        age: 24,
        description: 'He likes white wolves',
        image: 'https://www.google.com/Jon.jpg',
        color: 'Brown'
    },
    {
        firstName: 'Daenerys',
        lastName: 'Targaryen',
        occupation: 'Queen',
        age: 35,
        description: 'Queen of the Seven Kingdoms',
        image: 'https://www.google.com/Daenerys.jpg',
        color: 'Black'
    },
    {
        firstName: 'Stewie',
        lastName: 'Griffin',
        occupation: 'Baby',
        age: 35,
        description: 'He likes Machiavellian Plans',
        image: 'https://www.google.com/Stewie.jpg',
        color: 'Red'
    }
];

// Rooms Array

const roomsArray = [
    {
        name: 'Lounge'
    },
    {
        name: 'Kitchen'
    },
    {
        name: 'Guest Room'
    },
    {
        name: 'Main Room'
    },
    {
        name: 'Main Hall'
    },
    {
        name: 'Rooftop'
    },
    {
        name: 'Attic'
    },
    {
        name: 'Bath'
    },
    {
        name: 'Mini Cinema'
    },
    {
        name: 'Swimming Pool'
    },
    {
        name: 'Cellar'
    },
    {
        name: 'Game Room'
    },
    {
        name: 'Smoking Room'
    },
    {
        name: 'Greenhouse'
    },
    {
        name: 'Pools room'
    }
];

// Weapons Array

const weaponsArray = [
    {
        name: 'AK-47',
        weight: 3.8
    },
    {
        name: 'M4A1',
        weight: 3.52
    },
    {
        name: 'Glock17',
        weight: 0.625
    },
    {
        name: 'Colt Single Action Army',
        weight: 1.084
    },
    {
        name: 'MG42',
        weight: 11.6
    },
    {
        name: 'Uzi',
        weight: 3.5
    },
    {
        name: 'Thompson',
        weight: 3.75
    },
    {
        name: 'M16',
        weight: 3.99
    },
    {
        name: 'Kar98k',
        weight: 3.7
    }
];


// ITERATION 2

function selectRandom(array) {
    const randomNumber = Math.floor(Math.random() * array.length)
    return array[randomNumber]
}

function pickMystery() {
    const mistery = { 'suspect': {}, 'weapon': {}, 'room': {} }

    mistery.suspect = selectRandom(suspectsArray)
    mistery.weapon = selectRandom(weaponsArray)
    mistery.room = selectRandom(roomsArray)

    return mistery

}


// ITERATION 3

function revealMystery(object) {
    const mistery = object
    const misteryMessage = `${mistery.suspect.firstName} ${mistery.suspect.lastName} killed Mr. Boddy using the ${mistery.weapon.name} in the ${mistery.room.name}!`

    return misteryMessage
}

