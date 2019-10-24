// Characters Collection
const charactersArray = [
    mrGreen = {
        first_name: "Jacob",
        last_name: "Green",
        color: "green",
        description: "He has a lot of connections",
        age: "45",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        occupation: "Entrepreneur"
    },

    drOrchid = {
        first_name: "Doctor",
        last_name: "Orchid",
        color: "white",
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        age: "26",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        occupation: " Scientist"
    },

    profPlum = {
        first_name: "Victor",
        last_name: "Plum",
        color: "purple",
        description: "Billionaire video game designer",
        age: "22",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        occupation: "Designer"
    },

    missScarlet = {
        first_name: "Kasandra",
        last_name: "Scarlet",
        color: "red",
        description: "She is an A-list movie star with a dark past",
        age: "31",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        occupation: "Actor"
    },

    mrsPeacock = {
        first_name: "Eleanor",
        last_name: "Peacock",
        color: "blue",
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        age: "36",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        occupation: "Socialité"
    },

    mrMustard = {
        first_name: "Jack",
        last_name: "Mustard",
        color: "yellow",
        description: "He is a former football player who tries to get by on his former glory",
        age: "62",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        occupation: "Retired Football player"
    }
];

// Rooms Collection
const weaponsArray = [
    rope = {
        name: "rope",
        weight: "10"
    },
    knife = {
        name: "knife",
        weight: "8"
    },
    candlestick = {
        name: "candlestick",
        weight: "2"
    },
    dumbbell = {
        name: "dumbbell",
        weight: "30"
    },
    poison = {
        name: "poison",
        weight: "2"
    },
    axe = {
        name: "axe",
        weight: "15"
    },
    bat = {
        name: "bat",
        weight: "13"
    },
    trophy = {
        name: "trophy",
        weight: "25"
    },
    pistol = {
        name: "pistol",
        weight: "20"
    }
];

// Weapons Collection
const roomsArray = [
    diningRoom = { name: "diningRoom" },
    conservatory = { name: "conservatory" },
    kitchen = { name: "kitchen" },
    study = { name: "study" },
    library = { name: "library" },
    billiardRoom = { name: "billiardRoom" },
    lounge = { name: "lounge" },
    ballroom = { name: "ballroom" },
    hall = { name: "hall" },
    spa = { name: "spa" },
    livingRoom = { name: "livingRoom" },
    observatory = { name: "observatory" },
    theater = { name: "theater" },
    guestHouse = { name: "guestHouse" },
    patio = { name: "patio" },

];

function randomSelector(cardStack) {
    if (cardStack.length === 0) {
        return undefined;
    }
    return cardStack[Math.floor(cardStack.length * Math.random())];
}

function pickMystery() {
    return {
        suspect: randomSelector(charactersArray),
        weapon: randomSelector(weaponsArray),
        room: randomSelector(roomsArray)
    };
}

let mysteryEnvelope = pickMystery();

function revealMystery(mysteryEnvelope) {
    return (`${mysteryEnvelope.suspect.first_name} ${mysteryEnvelope.suspect.last_name} killed Mr. Boddy using the ${mysteryEnvelope.weapon.name} in the ${mysteryEnvelope.room.name}!!!!`)
}