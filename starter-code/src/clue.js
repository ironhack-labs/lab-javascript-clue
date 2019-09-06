// Characters
// Characters Collection
const charactersArray = [];


let mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    age: 45,
    occupation: "Entrepreneur"
};
let drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    age: 26,
    occupation: "Scientist"
};
let profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    images: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    age: 22,
    occupation: "Designer"
};
let missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    images: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    age: 31,
    occupation: "Actor"
};
let mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    images: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    age: 36,
    occupation: "Socialité"
};
let mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    images: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    age: 62,
    occupation: "Retired Football player"
};
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

// Weapons
// Weapons Collection
const weaponsArray = [];

weaponsArray.push({
    name: "rope",
    weight: 10
}, {
    name: "knife",
    weight: 8
}, {
    name: "candlestick",
    weight: 2
}, {
    name: "dumbbell",
    weight: 30
}, {
    name: "poison",
    weight: 2
}, {
    name: "axe",
    weight: 15
}, {
    name: "bat",
    weight: 13
}, {
    name: "trophy",
    weight: 25
}, {
    name: "pistol",
    weight: 20
})
// Rooms

// Rooms Collection
let roomsArray = [];

roomsArray.push({
    name: "Dinning Room"
}, {
    name: "Conservatory"
}, {
    name: "Kitchen"
}, {
    name: "Study"
}, {
    name: "Library"
}, {
    name: "Billiard Room"
}, {
    name: "Lounge"
}, {
    name: "Ballroom"
}, {
    name: "Hall"
}, {
    name: "Spa"
}, {
    name: "Living Room"
}, {
    name: "Observatory"
}, {
    name: "Theater"
}, {
    name: "Guest House"
}, {
    name: "Patio"
});



function randomSelector(array) {
    if (array.length === 0) {
        return undefined
    } else {
        let randomIndex = Math.floor(Math.random() * array.length);
        let selection = array[randomIndex];
        return selection;
    };
};

function pickMystery() {
    let mysteryEnvelope = [];

    mysteryEnvelope.push(randomSelector(charactersArray))
    mysteryEnvelope.push(randomSelector(weaponsArray))
    mysteryEnvelope.push(randomSelector(roomsArray))
    return Object.assign({}, mysteryEnvelope);
}
//console.log(pickMystery())


function revealMystery() {
    let mystery = "";
    mystery = pickMystery()[0].first_name + " " + pickMystery()[0].last_name + " killed Mr.Boddy using the " +
    pickMystery()[1].name + " in the " + pickMystery()[2].name + "!!!!";
    return mystery;
}

console.log(revealMystery())
