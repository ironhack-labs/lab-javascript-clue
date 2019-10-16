// Characters
const mrGreen = {
firstName:   "Jacob",
lastName:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
};

const drOrchid = {
firstName:   "Doctor",
lastName:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
occupation:    "Scientist"
};

const profPlum = {
firstName:   "Victor",
lastName:    "Plum",
color:        "purple",
description:  "Billionaire video game designer",
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
occupation:   "Actor"
};

const mrsPeacock = {
firstName:   "Eleanor",
lastName:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
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

let charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Weapons
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
    name: "pistol",
    weight: 20
}

let weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol]

/*name: rope ---- weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20*/

// Rooms

const roomsArray = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"]


/* name: Dining Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio */


function randomSelector(card) {
    let random = card[Math.floor(Math.random()*card.length)]
    return random
};

function pickMystery() {
    let mysteryEnvelope = {
        weapon: randomSelector(weaponsArray),
        room: randomSelector(roomsArray),
        suspect: randomSelector(charactersArray)
    };
    return mysteryEnvelope;
};

function revealMystery(mysteryEnvelope) {
    console.log(mysteryEnvelope);
    return `${mysteryEnvelope.suspect.first_name} ${mysteryEnvelope.suspect.last_name} killed Mr. Boddy using the ${mysteryEnvelope.weapon.name} in the ${mysteryEnvelope.room.name}!!!!`;
};