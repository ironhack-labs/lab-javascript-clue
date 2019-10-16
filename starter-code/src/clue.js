// Characters
let mrGreen = {
    first_name: 'Jacob',
    last_name: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation: 'Entrepreneur'
};
let drOrchid = {
    first_name: 'Doctor',
    last_name: 'Orchid',
    color: 'white',
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation: 'Scientist'
};
let profPlum = {
    first_name: 'Victor',
    last_name: 'Plum',
    color: 'purple',
    description: 'Billionaire video game designer',
    age: 22,
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    occupation: 'Designer'
};
let missScarlet = {
    first_name: 'Kasandra',
    last_name: 'Scarlet',
    color: 'red',
    description: 'She is an A-list movie star with a dark past',
    age: 31,
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation: 'Actor'
};
let mrsPeacock = {
    first_name: 'Eleanor',
    last_name: 'Peacock',
    color: 'blue',
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    age: 36,
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation: 'Socialité'
};
let mrMustard = {
    first_name: 'Jack',
    last_name: 'Mustard',
    color: 'yellow',
    description: 'He is a former football player who tries to get by on his former glory',
    age: 62,
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    occupation: 'Retired Football player'
};

// Establishing the array of the characters
let charactersArray = [
    mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard
]

// Weapons
let wRope = {
    name: 'rope',
    weight: 10
};

let wKnife = {
    name: 'knife',
    weight: 8
};

let wCandleStick = {
    name: 'candlestick',
    weight: 2
};

let wBell = {
    name: 'dumbbell',
    weight: 30
};

let wPoison = {
    name: 'poison',
    weight: 2
};

let wAxe = {
    name: 'axe',
    weight: 15
};

let wBat = {
    name: 'bat',
    weight: 13
};

let wTrophy = {
    name: 'trophy',
    weight: 25
};

let wPistol = {
    name: 'pistol',
    weight: 20
};

// Establishing an array of weapons
let weaponsArray = [
    wRope, wKnife, wCandleStick, wBell, wPoison, wAxe, wBat, wTrophy, wPistol
]






// Rooms
let roomsArray = [{
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
    },
]

let cardStackArray = [
    charactersArray, roomsArray, weaponsArray
];

// Characters Collection
// const charactersArray = [];

// Rooms Collection
// const roomsArray = [];

// Weapons Collection
// const weaponsArray = [];

// Random selector function
function randomSelector(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
}


//Pick mystery function
let mysteryEnvelope;

function pickMystery() {
    mysteryEnvelope = {
        suspect: randomSelector(charactersArray),
        room: randomSelector(roomsArray),
        weapon: randomSelector(weaponsArray)
    };
    // Our attempt at using a loop to populate the mysteryEnvelope properties/values instead of direct input as shown above...
    // let = randomCard;
    // for (let i = 0, i < cardStackArray.length; i++) {
    //     randomCard = randomSelector(cardStackArray[i]);
    //     mysteryEnvelope.suspect = randomCard[i];
    // }


    return mysteryEnvelope;

}

function revealMystery(mysteryEnvelope) {
    return mysteryEnvelope.suspect.first_name + " " + mysteryEnvelope.suspect.last_name + " killed Mr. Boddy using the " + mysteryEnvelope.weapon.name + " in the " + mysteryEnvelope.room.name + "!!!!";
}