// ITERATION 1

// Suspects Array

const mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
};

const drOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
};

const profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
};

const missScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"
};

const mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue"
};

const mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow"
};

const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Array

const place1 = {name: "Dining Room"};
const place2 = {name: "Conservatory"};
const place3 = {name: "Kitchen"};
const place4 = {name: "Study"};
const place5 = {name: "Library"};
const place6 = {name: "Billiard Room"};
const place7 = {name: "Lounge"};
const place8 = {name: "Ballroom"};
const place9 = {name: "Hall"};
const place10 = {name: "Spa"};
const place11 = {name: "Living Room"};
const place12 = {name: "Observatory"};
const place13 = {name: "Theater"};
const place14 = {name: "Guest House"};
const place15 = {name: "Patio"};

const roomsArray = [place1, place2, place3, place4, place5, place6, place7, place8, place9, place10, place11, place12, place13, place14, place15];

// Weapons Array

const weaponOne = {name: "rope", weight: 10};
const weaponTwo = {name: "knife", weight: 8};
const weaponThree = {name: "candlestick", weight: 2};
const weaponFour = {name: "dumbbell", weight: 30};
const weaponFive = {name: "poison", weight: 2};
const weaponSix = {name: "axe", weight: 15};
const weaponSeven = {name: "bat", weight: 13};
const weaponEight = {name: "trophy", weight: 25};
const weaponNine = {name: "pistol", weight: 20};

const weaponsArray = [weaponOne, weaponTwo, weaponThree, weaponFour, weaponFive, weaponSix, weaponSeven, weaponEight, weaponNine];


// ITERATION 2

function selectRandom(array) {

    if (array.length === 0) {
        return undefined;
    }

    if (array.length === 1) {
        return array[0];
    }

    randomNumber = Math.floor(Math.random() * array.length)
    return array[randomNumber];
}

function pickMystery() {
    misteryEnvelope = {};

    misteryEnvelope.suspect = selectRandom(suspectsArray);
    misteryEnvelope.weapon = selectRandom(weaponsArray);
    misteryEnvelope.room = selectRandom(roomsArray);

    return misteryEnvelope;
}


// ITERATION 3

function revealMystery(pickMystery) {
    return `${pickMystery.suspect.firstName} ${pickMystery.suspect.lastName} killed Mr. Boddy using the ${pickMystery.weapon.name} in the ${pickMystery.room.name}!`
}

