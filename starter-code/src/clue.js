// Characters

const mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
};

const drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
};

const rofPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionaire video game designer",
    age: 22,
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    occupation: "Designer"
};

const missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Actor"
};

const mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
};

const mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    occupation: "Retired Football player"
};

// Weapons

const rope = {
    weight: 10
};

const knife = {
    weight: 8
};

const candlestick = {
    weight: 2
};

const dumbbell = {
    weight: 30
};

const poison = {
    weight: 2
};

const axe = {
    weight: 15
};
const bat = {
    weight: 13
};

const trophy = {
    weight: 25
};

const pistol = {
    weight: 20
};

// Rooms
const diningRoom = {

};

const conservatory = {

};

const kitchen = {

};

const study = {

};

const library = {

};

const billiardRoom = {

};

const lounge = {

};

const ballroom = {

};

const hall = {

};

const spa = {

};

const livingRoom = {

};

const observatory = {

};

const Theater = {

};

const guestHouse = {

};

const Patio = {

};

// Characters Collection
const charactersArray = ["mrGreen", "drOrchid", "rofPlum", "missScarlet", "mrsPeacock", "mrMustard"];

// Rooms Collection
const weaponsArray = ["rope", "knife", "candlestick", "dumbbell", "poison", "axe", "bat", "trophy", "pistol"];

// Weapons Collection
const roomsArray = ["diningRoom", "conservatory", "kitchen", "library", "billiardRoom", "lounge", "ballroom", "hall", "spa", "livingRoom", "observatory", "theater", "guestHouse", "patio"];


function randomSelector(arr) {
    if (arr === 0) {
        return undefined;
    }
    let randomCard = arr[Math.floor(Math.random() * arr.length)];
    return randomCard;
}

function pickMystery() {
    let mysteryEnvelope = {
        suspect: "",
        weapon: "",
        room: "",
    };
    mysteryEnvelope.suspect = randomSelector(charactersArray);
    mysteryEnvelope.weapon = randomSelector(weaponsArray);
    mysteryEnvelope.room = randomSelector(roomsArray);
    return mysteryEnvelope;
}

const mysteryEnvelope = pickMystery();

//console.log(pickMystery(charactersArray, weaponsArray, roomsArray));

function revealMystery(mysteryEnvelope) {
    let message = `${mysteryEnvelope.suspect.first_name} ${mysteryEnvelope.suspect.last_name} killed Mr. Boddy using the ${mysteryEnvelope.weapon.name} in the ${mysteryEnvelope.room.name}!!!!`;
    // console.log(message);
    return message;
}