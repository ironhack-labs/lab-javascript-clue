// ITERATION 1

// Suspects
let mrGreen = {

    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
}

let sdrOrchid = {

    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
}

let rofPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
}

let missScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
}

let mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
}

let mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
}
//Suspects Array
const suspectsArray = [mrGreen, sdrOrchid, rofPlum, missScarlet,mrsPeacock, mrMustard];

// Rooms

let room1 = {name: 'Dining Room'};
let room2 = {name: 'Conservatory'};
let room3 = {name: 'Kitchen'};
let room4 = {name: 'Study'};
let room5 = {name: 'Library'};
let room6 = {name: 'Billiard Room'};
let room7 = {name: 'Lounge'};
let room8 = {name: 'Ballroom'};
let room9 = {name: 'Hall'};
let room10 = {name: 'Spa'};
let room11 = {name: 'Living Room'};
let room12 = {name: 'Observatory'};
let room13 = {name: 'Theater'};
let room14 = {name: 'Guest House'};
let room15 = {name: 'Patio'};

// Rooms Array

const roomsArray = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15];

// Weapons
const weapon1 = {
    name: "rope",
    weight: 10
}
const weapon2 = {
    name: "knife",
    weight: 8
}
const weapon3 = {
    name: "candlestick",
    weight: 2
}
const weapon4 = {
    name: "dumbbell",
    weight: 30
}
const weapon5 = {
    name: "poison",
    weight: 2
}
const weapon6 = {
    name: "axe",
    weight: 15
}
const weapon7 = {
    name: "bat",
    weight: 13
}
const weapon8 = {
    name: "trophy",
    weight: 25
}
const weapon9 = {
    name: "pistol",
    weight: 20
}

// Weapons Array

const weaponsArray = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9];


// ITERATION 2

function selectRandom(arr) {
    let rand = Math.floor(Math.random() * (arr.length));
    return arr[rand];
}

let currentMystery = {};

function pickMystery() {
    let mystery = {};
    mystery.suspect = selectRandom(suspectsArray);
    mystery.weapon = selectRandom(weaponsArray);
    mystery.room = selectRandom(roomsArray);
    Object.assign(currentMystery, mystery);
    return mystery;
}


// ITERATION 3

function revealMystery(envelope) {
    //Following line makes it totally random.
    //Object.assign(envelope, currentMystery);
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}

// const message = revealMystery({
//     suspect: { firstName: 'Victor', lastName: 'Plum' },
//     weapon: { name: 'poison' },
//     room: { name: 'Billiard Room' }
//   });
console.log(pickMystery());
console.log(revealMystery(currentMystery));