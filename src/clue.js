// ITERATION 1

// Suspects Array

const suspectsArray = {

    mrGreen:
    {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green"
    },

    drOrchid:
    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white"
    },

    profPlum:
    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple"
    },

    missScarlet:
    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red"
    },

    mrsPeacock:
    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        color: "blue"
    },

    mrMustard:
    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"
    },
};


// Rooms Array

const roomsArray = {

    rooms: [
        { roomName: "Dining Room" },
        { roomName: "Conservatory" },
        { roomName: "Kitchen" },
        { roomName: "Study" },
        { roomName: "Library" },
        { roomName: "Billiard Room" },
        { roomName: "Lounge" },
        { roomName: "Ballroom" },
        { roomName: "Hall" },
        { roomName: "Spa" },
        { roomName: "Living Room" },
        { roomName: "Observatory" },
        { roomName: "Theater" },
        { roomName: "Guest House" },
        { roomName: "Patio" }
    ],
};
// const indiceRooms = Math.floor(Math.random() * roomsArray.rooms.length); <- Indices problematicos 

// Weapons Array

const weaponsArray = {

    weapons: [
        { weaponName: "Rope", weight: 10 },
        { weaponName: "Knife", weight: 8 },
        { weaponName: "Candlestick", weight: 2 },
        { weaponName: "Dumbbell", weight: 30 },
        { weaponName: "Poison", weight: 2 },
        { weaponName: "Axe", weight: 15 },
        { weaponName: "Bat", weight: 13 },
        { weaponName: "Trophy", weight: 25 },
        { weaponName: "Pistol", weight: 20 }
    ],
};
// const indiceWeapons = Math.floor(Math.random() * weaponsArray.weapons.length); <- Indices problematicos



// ITERATION 2


// Esta funcionaba pero daba problemas 
/* function selectRandom(weaponsArray) {
    const randomWeapon = weaponsArray.weapons[indiceWeapons].weaponName;
    console.log(`*Enhorabuena, te ha tocado el arma ${randomWeapon}*`);
}; 

selectRandom(weaponsArray); */

function selectRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function pickMystery() {
    const suspectKey = selectRandom(Object.keys(suspectsArray));
    const suspect = suspectsArray[suspectKey];
    const suspectName = `${suspect.firstName} ${suspect.lastName}`;
    const suspectRoom = selectRandom(roomsArray.rooms).roomName;
    const suspectWeapon = selectRandom(weaponsArray.weapons).weaponName;

    // FUNCIONA: 
    console.log(`La carta misteriosa es para ${suspectName}... estará en la habitación: ${suspectRoom} y tendra el arma: ${suspectWeapon}`);
    return {
        suspect: suspect,
        room: suspectRoom,
        weapon: suspectWeapon
    };
};

// FUNCIONA pickMystery();


// ITERATION 3

/* Declare a function named revealMystery that receives an envelope object 
(with the shape of the object returned by pickMystery) as the single argument 
and returns a revealing message in the following format:

<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>! */

const mysteryEnvelope = pickMystery();

function revealMystery(envelope) {
    const { suspect, weapon, room } = envelope;
    const suspectName = `${suspect.firstName} ${suspect.lastName}`;

    console.log("...");
    console.log(`${suspectName} mató a Mr. Boddy usando el arma ${weapon} en la habitación ${room}!!!`);
}

revealMystery(mysteryEnvelope);
