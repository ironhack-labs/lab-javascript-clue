// Characters
const mrGreen = {
    firstName:   "Jacob",
    lastName:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:       "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur",
};
const drOrchid = {
    firstName:   "Doctor",
    lastName:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:    "Scientist",
};
const profPlum = {
    firstName:   "Victor",
    lastName:    "Plum",
    color:       "purple",
    escription:  "Billionaire video game designer",
    age:          22,
    image:        "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    occupation:   "Designer"
};
const missScarlet = {
    firstName:   "Kasandra",
    lastName:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:   "Actor",
};
const mrsPeacock = {
    firstName:   "Eleanor",
    lastName:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg,",
    occupation:   "Socialité"
};
const mrMustard = {
    firstName:   "Jack",
    lastName:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    occupation:   "Retired Football player"
};

// Weapons

const rope = {
    name: "Rope",
    weight: 10
};
const knife = {
    name: "Knife",
    weight: 8
    };
const candlestick = {
    name: "Candle Stick",
    weight: 2
};
const dumbbell = {
    name: "Dumbbell",
    weight: 30
};
const poison = {
    name: "Poison",
    weight: 2
};
const axe = {
    name: "Axe",
    weight: 15
};
const bat = {
    name: "Bat",
    weight: 13
};
const trophy = {
    name: "Trophy",
    weight: 25
};
const pistol = {
    name: "Pistol",
    weight: 20
};

// Rooms
const diningRoom = {
    name: "Dining Room"
};
const conservatory = {
    name: "Conservatory"
};
const kitchen = {
    name: "Kitchen"
};
const study = {
    name: "Study"
};
const library = {
    name: "Library"
};
const billiardRoom = {
    name: "Billiard Room"
};
const lounge = {
    name: "Lounge"
};
const ballroom = {
    name: "Ballroom"
};
const hall = {
    name: "Hall"
};
const spa = {
    name: "Spa"
};
const livingRoom = {
    name: "Living Room"
};
const observatory = {
    name: "Observatory"
};
const theater = {
    name: "Theater"
};
const guestHouse = {
    name: "Guest House"
};
const patio = {
    name: "Patio"
};


// Characters Collection
const charactersArray = [mrGreen, rOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Collection
const roomsArray = [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

// Weapons Collection
const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

//variables

//Funtions
function randomSelector (someArr){
    let selected;
    selected = someArr[Math.floor(Math.floor(Math.random() * someArr.length))];
    return selected;
}

function pickMystery (){
    let mysteryEnvelope  = {
        suspect: {
        },
        weapon: "",
        room: ""
    }
    let charContainer = randomSelector(charactersArray);
    mysteryEnvelope.suspect.firstName = charContainer.firstName;
    mysteryEnvelope.suspect.lastName = charContainer.lastName;
    mysteryEnvelope.weapon = randomSelector(weaponsArray).name;
    mysteryEnvelope.room = randomSelector(roomsArray).name;
    return mysteryEnvelope;
}

function revealMystery (){
    let str = pickMystery();
    console.log(`${str.suspect.firstName} ${str.suspect.lastName} killed Mr. Boddy using the ${str.weapon} in the ${str.room}!!!!`);
}

