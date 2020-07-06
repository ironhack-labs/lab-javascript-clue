// ITERATION 1

// Suspects Collection
const suspectsArray = [];

let mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
};
let drOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
};
let profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg  ",
    color: "purple"
};
let missScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg ",
    color: "red"
};
let mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg ",
    color: "blue"
};
let mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory ",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg ",
    color: "yellow"
};

suspectsArray.push(mrGreen);
suspectsArray.push(drOrchid);
suspectsArray.push(profPlum);
suspectsArray.push(missScarlet);
suspectsArray.push(mrsPeacock);
suspectsArray.push(mrMustard);

// Rooms Collection
let room1 = {
    name: "Dining Room"
};
let room2 = {
    name: "Conservatory"
};
let room3 = {
    name: "Kitchen"
};
let room4 = {
    name: "Study"
};
let room5 = {
    name: "Library"
};
let room6 = {
    name: "Billard Room"
};
let room7 = {
    name: "Lounge"
};
let room8 = {
    name: "Ballroom"
};
let room9 = {
    name: "Hall"
};
let room10 = {
    name: "Spa"
};
let room11 = {
    name: "Living Room"
};
let room12 = {
    name: "Observatory"
};
let room13 = {
    name: "Theater"
};
let room14 = {
    name: "Guest House"
};
let room15 = {
    name: "Patio"
};

const roomsArray = [
    room1,
    room2,
    room3,
    room4,
    room5,
    room6,
    room7,
    room8,
    room9,
    room10,
    room11,
    room12,
    room13,
    room14,
    room15
];



// Weapons Collection
const weaponsArray = [{
        name: "rope",
        weigth: 10
    },
    {
        name: "knife",
        weigth: 8
    },
    {
        name: "candlestick",
        weigth: 2
    },
    {
        name: "dumbbell",
        weigth: 30
    },
    {
        name: "poison",
        weigth: 2
    },
    {
        name: "axe",
        weigth: 15
    },
    {
        name: "bat",
        weigth: 13
    },
    {
        name: "trophy",
        weigth: 25
    },
    {
        name: "pistol",
        weigth: 20
    }
];



// ITERATION 2
function selectRandom(arr) {
    //should return undefined if the array is empty
    if (arr.length === 0) {
        return undefined;
    }
    for (let i = 0; i < arr.length; i++) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}

function pickMystery() {
    let mystery = {};

    let randomSuspect = selectRandom(suspectsArray);
    let randomWeapon = selectRandom(weaponsArray);
    let randomRoom = selectRandom(roomsArray);

    mystery.suspect = randomSuspect;
    mystery.weapon = randomWeapon;
    mystery.room = randomRoom;

    return mystery;
}

// ITERATION 3
function revealMystery(mys) {
    return `${mys.suspect.firstName} ${mys.suspect.lastName} killed Mr. Boddy using the ${mys.weapon.name} in the ${mys.room.name}!`;
}