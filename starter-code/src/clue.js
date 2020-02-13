// ITERATION 1

const suspect = {
    name: "",
    firstName: "",
    lastName: "",
    occupation: "",
    age: 0,
    description: "",
    image: "",
    color: ""
}

const weapon = {
    name: "",
    weight: 0
}

// Suspects Collection
const suspectsArray = [];
fillSuspects(suspectsArray);

// Rooms Collection
const roomsArray = [];
fillRooms(roomsArray);

// Weapons Collection
const weaponsArray = [];
fillWeapons(weaponsArray);

// ITERATION 2
function selectRandom(arr) {
    if (arr.length === 0 ) return undefined;
    return arr[Math.floor((Math.random() * (arr.length)))];
}

function pickMystery() {
    return {
        suspect : selectRandom(suspectsArray),
        weapon : selectRandom(weaponsArray),
        room : selectRandom(roomsArray)
    }
}

// ITERATION 3
function revealMystery(envelope) {
    console.log(envelope.room);
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}

// Play
const env = pickMystery();
console.log(revealMystery(env));

// Aux
function fillSuspects(arr) {
    arr.push({
        name: "mrGreen",
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg ",
        color: "green "
    });

    arr.push({
        name: "drOrchid",
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white"
    });

    arr.push({
        name: "profPlum",
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg ",
        color: "purple"
    });

    arr.push({
        name: "missScarlet",
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red"
    });

    arr.push({
        name: "mrsPeacock",
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        color: "blue"
    });

    arr.push({
        name: "mrMustard",
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"
    });
}

function fillWeapons(arr) {
    arr.push({
        name: "rope",
        weight: 10
    });

    arr.push({
        name: "knife",
        weight: 8
    });

    arr.push({
        name: "candlestick",
        weight: 2
    });

    arr.push({
        name: "dumbbell",
        weight: 30
    });

    arr.push({
        name: "poison",
        weight: 2
    });

    arr.push({
        name: "axe",
        weight: 15
    });

    arr.push({
        name: "bat",
        weight: 13
    });

    arr.push({
        name: "trophy",
        weight: 25
    });

    arr.push({
        name: "pistol",
        weight: 20
    });
}

function fillRooms(arr) {
arr.push({name: "Dining Room"});
arr.push({name: "Conservatory"});
arr.push({name: "Kitchen"});
arr.push({name: "Study"});
arr.push({name: "Library"});
arr.push({name: "Billiard Room"});
arr.push({name: "Lounge"});
arr.push({name: "Ballroom"});
arr.push({name: "Hall"});
arr.push({name: "Spa"});
arr.push({name: "Living Room"});
arr.push({name: "Observatory"});
arr.push({name: "Theater"});
arr.push({name: "Guest House"});
arr.push({name: "Patio"});
}