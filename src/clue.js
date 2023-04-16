// ITERATION 1

// Suspects Array

const suspectsArray = [
    // mrGreen
    {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "image",
        color: "green"
    },
    // drOrchid
    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology.Adopted daughter of Mr.Boddy",
        image: "image",
        color: "white",
    },
    // profPlum
    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "image",
        color: "purple",
    },
    // missScarlet
    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A - list movie star with a dark past",
        image: "image",
        color: "red",
    },
    // mrsPeacock
    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "image",
        color: "blue",
    },
    //mrMustard
    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 6,
        description: "He is a former football player who tries to get by on his former glory",
        image: "image",
        color: "yellow",
    }
];

// Rooms Array
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
        name: 'Billiard Room'
    },
    {
        name: 'Lounge'
    },
    {
        name: 'Ballroom'
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

// Weapons Array

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

function selectRandom(cardArray) {
    let randomCardinArray = cardArray[Math.floor(Math.random() * cardArray.length)];
    return randomCardinArray
}


function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray),
    }
}




// ITERATION 3

function revealMystery() { }
function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

//SI QUEREMOS DESVELAR DATOS EN EL SOBRE PARA PODER PROBAR  revealMystery, quedaría así, por ejemplo:

const envelope = {
    suspect: {
        firstName: 'Doctor',
        lastName: 'Orchid'
    },
    weapon: {
        name: 'rope'
    },
    room: {
        name: 'Patio'
    }
};

console.log(revealMystery(envelope))
