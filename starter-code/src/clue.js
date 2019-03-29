// Characters Collection

let charactersArray = [
    mrGreen={
        first_name:  "Jacob",
        last_name:   "Green",
        color:       "green",
        description: "He has a lot of connections",
        age:          45,
        image:       "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        occupation:  "Entrepreneur"
    },
    drOrchid={
        first_name:   "Doctor",
        last_name:    "Orchid",
        color:        "white",
        description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        age:          26,
        image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        ocupation:   "Scientist"
    },
    profPlum={
        first_name:   "Victor",
        last_name:    "Plum",
        color:        "purple",
        description:  "Billionare video game designer",
        age:          22,
        image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        occupation:   "Designer"
    },
    missScarlet={
        first_name:   "Kasandra",
        last_name:    "Scarlet",
        color:        "red",
        description:  "She is an A-list movie star with a dark past",
        age:          31,
        image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
        occupation:   "Actor"
    },
    mrsPeacock={
        first_name:   "Eleanor",
        last_name:    "Peacock",
        color:        "blue",
        description:  "She is from a wealthy family and uses her status and money to earn popularity",
        age:          36,
        image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        occupation:   "Socialité"
    },
    mrMustard={
        first_name:   "Jack",
        last_name:    "Mustard",
        color:        "yellow",
        description:  "He is a former football player who tries to get by on his former glory",
        age:          62,
        image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
        occupation:   "Retired Football player"
    }
];

// Weapons
let weaponsArray = [
{name: "rope",          weight: 10},
{name: "knife",         weight: 8},
{name: "candlestick",   weight: 2},
{name: "dumbbell",      weight: 30},
{name: "poison",        weight: 2},
{name: "axe",           weight: 15},
{name: "bat",           weight: 13},
{name: "trophy",        weight: 25},
{name: "pistol",        weight: 20}
];

// Rooms
let roomsArray = [
{name: "Dinning Room"},
{name: "Conservatory"},
{name: "Kitchen"},
{name: "Study"},
{name: "Library"},
{name: "Billiard Room"},
{name: "Lounge"},
{name: "Ballroom"},
{name: "Hall"},
{name: "Spa"},
{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"}
];


// --------------------------------------------------------

//create randomSelector

function randomSelector (getArray){
    if(getArray.length === 0){
        return undefined;
        }

    let random = getArray[Math.floor(Math.random()*getArray.length)];
    
    return random;
}
// let choice = randomSelector (charactersArray);
// console.log (choice)



//create pickMistery

function pickMistery (){
    let oCara = randomSelector (charactersArray);
    let aGun = randomSelector (weaponsArray);
    let oPlace = randomSelector (roomsArray);
    let misteryEnvelope = [];

    misteryEnvelope.push(oCara);
    misteryEnvelope.push(aGun);
    misteryEnvelope.push(oPlace);
    return misteryEnvelope;
}
// let misteryEnvelope = pickMistery();
// console.log (misteryEnvelope)



// // create revealMistery

function revealMistery () {
    let misteryArray = pickMistery(); 
    return `${misteryArray[0].first_name.toUpperCase()} ${misteryArray[0].last_name.toUpperCase()} killed Mr.Boddy using the ${misteryArray[1].name.toUpperCase()} in the ${misteryArray[2].name.toUpperCase()}!!!!`;
}
let reveal = revealMistery()
console.log (reveal);

/*${nameObj[posicao].objeto}*/