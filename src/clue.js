// ITERATION 1

// Suspects Collection
const mrGreen = {
    firstname: "Jacob",
    lastname: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
}

const drOrchid = {
    firstname: "Doctor",
    lastname: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
}

const profPlum = {
    firstname: "Victor",
    lastname: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
}

const missScarlet = {
    firstname: "Kasandra",
    lastname: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
}

const mrsPeacock = {
    firstname: "Eleanor",
    lastname: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
}

const mrMustard = {
    firstname: "Jack",
    lastname: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
}

const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Collection
const dRoom = {
    name: "Dining room"
}

const conserv = {
    name: "Conservatory"
}

const kitchen = {
    name: "Kitchen"
}

const study = {
    name: "Study"
}

const lib = {
    name: "Library"
}

const biRoom = {
    name: "Billiard Room"
}

const lounge = {
    name: "Lounge"
}

const baRoom = {
    name: "Ballroom"
}

const hall = {
    name: "Hall"
}

const spa = {
    name: "Spa"
}

const liRoom = {
    name: "Living room"
}

const observ = {
    name: "Observatory"
}

const theater = {
    name: "Theater"
}

const gHouse = {
    name: "Guest House"
}

const patio = {
    name: "Patio"
}

const roomsArray = [dRoom, conserv, kitchen, study, lib, biRoom, lounge, baRoom, hall, spa, liRoom, observ, theater, gHouse, patio];

// Weapons Collection
const rope = {
    name: "rope",
    weight: 10
}

const knife = {
    name: "knife",
    weight: 8
}

const candlestick = {
    name: "candlestick",
    weight: 2
}

const dumbbell = {
    name: "dumbbell",
    weight: 30
}

const poison = {
    name: "poison",
    weight: 2
}

const axe = {
    name: "axe",
    weight: 15
}

const bat = {
    name: "bat",
    weight: 13
}

const trophy = {
    name: "trophy",
    weight: 25
}

const pistol = {
    name: "knife",
    weight: 20
}

const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];


function selectRandom(cardPile) {
    let randomNumber = 0;
    if (cardPile.length === 0) {
        return undefined;
    }
    if (cardPile.length === 1) {
        return cardPile[0];
    }

    randomNumber = Math.floor(  Math.random() * cardPile.length  );
    return cardPile[randomNumber];
}

selectRandom(weaponsArray);

// ITERATION 2

function pickMystery() {
    let pickedWeapon = selectRandom(weaponsArray);
    let pickedRoom = selectRandom(roomsArray);
    let pickedSuspect = selectRandom(suspectsArray);
        
    let mystery = {
        suspect: pickedSuspect,
        weapon: pickedWeapon,
        room: pickedRoom
    }
    return mystery;
}

pickMystery();

// ITERATION 3
// !! I don't know why Jasmine keeps refusing the code below, since it works fine in repl.it and codepen !!

function revealMystery(mysteryElements) {
    let solution = mysteryElements;
    let solutionStatement = `${solution.suspect.firstname} ${solution.suspect.lastname} killed Mr. Boddy using the ${solution.weapon.name} in the ${solution.room.name}!`;
    return solutionStatement;
}

let envelope = pickMystery();
revealMystery(envelope);
