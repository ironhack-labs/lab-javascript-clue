// ITERATION 1
// View a HTML'ed version at: http://www.phunkd.co.za/cloodoh/index.html

// Suspects Array

const suspectsArray = [
    {
        name: "Ms Peach",
        firstName: "Georgia",
        lastName: "Peach",
        occupation: "Young Widow",
        age: 26,
        description: "She is a Southern belle who usually manipulates others with her charm.",
        image: "http://phunkd.co.za/cloodoh/images/suspectPeach.png",
        color: "peach",
    },
    {
        name: "Prof Plum",
        firstName: "Edgar",
        lastName: "Plum",
        occupation: "Archaeologist",
        age: 54,
        description: "He is a quick-witted middle-aged professor",
        image: "http://phunkd.co.za/cloodoh/images/suspectPlum.png",
        color: "purple",
    },
    {
        name: "Ms Scarlett",
        firstName: "Kasandra",
        lastName: "Scarlett",
        occupation: "Actor",
        age: 31,
        description: "She is a stereotypical femme fatale - young, cunning, and attractive.",
        image: "http://phunkd.co.za/cloodoh/images/suspectScarlett.png",
        color: "red",
    },
    {
        name: "Mrs Peacock",
        firstName: "Henrietta",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 46,
        description: "She is a stock grande dame and an elderly yet attractive woman who nearly always maintains her dignity.",
        image: "http://phunkd.co.za/cloodoh/images/suspectPeacock.png",
        color: "blue",
    },
    {
        name: "Col Mustard",
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Military Colonel",
        age: 52,
        description: "He is a stock great white hunter and colonial imperialist. He is dignified, dapper, and dangerous military man.",
        image: "http://phunkd.co.za/cloodoh/images/suspectMustard.png",
        color: "yellow",
    },
    {
        name: "Mrs White",
        firstName: "Nancy",
        lastName: "White",
        occupation: "Servant",
        age: 62,
        description: "She is usually portrayed as a frazzled servant who worked as Mr. Boddy's cook, housekeeper, and nanny to Mr. Boddy's nephew, John.",
        image: "http://phunkd.co.za/cloodoh/images/suspectWhite.png",
        color: "white",
    }
];

// Rooms Array

const roomsArray = [
    {
        name: "Dining Room",
        description: "A place where one would normally eat.",
    },
    {
        name: "Conservatory",
        description: "A room having glass or other transparent roofing and walls used as a greenhouse or a sunroom.",
    },
    {
        name: "Kitchen",
        description: "A room where one would normally prepare meals.",
    },
    {
        name: "Study",
        description: "A room in a house that is used for paperwork, computer work, or reading",
    },
    {
        name: "Library",
        description: "A place set apart to contain books, periodicals, and other material for reading, viewing, listening,study, or reference.",
    },
    {
        name: "Billiard Room",
        description: "A recreation room.",
    },
    {
        name: "Lounge",
        description: "A room with comfortable chairs, couches, beautiful tables, art, maybe bookshelves - a little more formal.",
    },
    {
        name: "Ballroom",
        description: "A large room inside a building, the primary purpose of which is holding large formal parties.",
    },
    {
        name: "Hall",
        description: "Is the area into which some of the other rooms open.",
    },
    {
        name: "Spa",
        description: "A location where people enjoyed healing / wellness.",
    },
    {
        name: "Living Room",
        description: "A room in a home that's used for entertaining friends, talking, reading, or watching television.",
    },
    {
        name: "Observatory",
        description: "A location used for observing terrestrial, marine, or celestial events.",
    },
    {
        name: "Theater",
        description: "Has audio and video equipment configuration in the room.",
    },
    {
        name: "Guest House",
        description: "Is a kind of lodging on the same property.",
    },
    {
        name: "Patio",
        description: "A paved surface at ground level outside a house.",
    }
];

// Weapons Array

const weaponsArray = [
    {
        name: 'Poison',
        weight: 2,
    },
    {
        name: 'Wrench',
        weight: 3.5,
    },
    {
        name: 'Candlestick',
        weight: 2,
    },
    {
        name: 'Rope',
        weight: 1,
    },
    {
        name: 'Pistol',
        weight: 5,
    },
    {
        name: 'Axe',
        weight: 3.8,
    },
    {
        name: 'Knife',
        weight: .9,
    },
    {
        name: 'Lead Pipe',
        weight: 1.6,
    },
    {
        name: 'Tire Iron',
        weight: 1.7,
    }
];

// ITERATION 2

function selectRandom(arr) {
    if (arr.length === 0) {
        return undefined;
    } else {
        return arr[Math.floor(Math.random() * arr.length)]
    }
}

function pickMystery() {
    let suspect = selectRandom(suspectsArray);
    let room = selectRandom(roomsArray);
    let weapon = selectRandom(weaponsArray);
    return {suspect, room, weapon};
}


// ITERATION 3

function revealMystery(reveal) {
    return `${reveal.suspect.firstName} ${reveal.suspect.lastName} killed Mr. Boddy using the ${reveal.weapon.name} in the ${reveal.room.name}!`;
}