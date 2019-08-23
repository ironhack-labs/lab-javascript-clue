// Characters

const mrGreen = {

    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
}

const drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
}
const profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionaire video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
}
const missScar = {
    first_name: "Kasandra",
    last_name: "Scar",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scar lett.jpg",
    occupation: "Actor"
}
const mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
}
const mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
}
// Weapons
const rope = {
    weight: 10
}
const knife = {
    weight: 8
}
const candlestick = {
    weight: 2
}
const dumbbell = {
    weight: 30
}
const poison = {
    weight: 2
}
const axe = {
    weight: 15
}
const bat = {
    weight: 13
}
const trophy = {
    weight: 25
}
const pistol = {
    weight: 20
}

//Rooms
const dinning_room = {
    name: "Dining Room"
}
const conservatory = {
    name: "Conservatory"
}
const kitchen = {
    name: "Kitchen"
}
const study = {
    name: "Study"
}
const library = {
    name: "Library"
}
const billiard_room = {
    name: "Billiard Room"
}
const lounge = {
    name: "Lounge"
}
const ballroom = {
    name: "Ballroom"
}
const hall = {
    name: "Hall"
}
const spa = {
    name: "Spa"
}
const living_room = {
    name: "Living Room"
}
const observatory = {
    name: "Observatory"
}
const theater = {
    name: "Theater"
}
const guest_house = {
    name: "Guest House"
}
const patio = {
    name: "Patio"
}


// Characters Collection
const charactersArray = [mrGreen, mrMustard, mrsPeacock, missScar, drOrchid, profPlum];


// Rooms Collection
const roomsArray = [dinning_room, conservatory, kitchen, study, library, billiard_room, lounge, ballroom, hall, spa, living_room,
    observatory, theater, guest_house, patio
];

// Weapons Collection
const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

function randomSelector(array) {
    let randomCard = [];
    randomCard = array[Math.floor(Math.random() * array.length)];

    return randomCard;
}

function pickMystery() {
    let weapon = randomSelector(weaponsArray);

    let suspect = randomSelector(charactersArray);

    let room = randomSelector(roomsArray);

    let mysteryEnvelope = {
        weapon,
        suspect,
        room
    };

    return mysteryEnvelope;
}
let mysteryEnvelope=pickMystery();
function revealMystery(mysteryEnvelope) {
    return `${mysteryEnvelope.suspect.first_name} ${mysteryEnvelope.suspect.last_name} killed Mr. Boddy using the ${mysteryEnvelope.weapon.name} in the ${mysteryEnvelope.room.name}!!!!`;
}
