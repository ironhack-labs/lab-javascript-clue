// Characters

let mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur",
}

let drOrchid = {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
occupation:   "Scientist",
}

let profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionaire videogame designer",
age:          22,
image:        "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
occupation:   "Designer",
}

let missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
occupation:   "Actress",
}

let mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité",
}

let mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
occupation:   "Retired Football Player",
}


// Weapons

let rope = {
name: "rope",
weigth: 10,
}

let knife = {
name: "knife",
weigth: 8,
}

let candlestick = {
name: "candlestick",
weigth: 2,
}

let dumbbell = {
name: "dumbbell",
weigth: 30,
}

let poison = {
name: "poison",
weigth: 2,
}

let axe = {
name: "axe",
weigth: 15,
}

let bat = {
name: "bat",
weigth: 13,
}

let trophy = {
name: "trophy",
weigth: 25,
}

let pistol = {
name: "pistol",
weigth: 20,
}

// Rooms

let diningRoom = {
name: "Dining Room"
}

let conservatory = {
name: "Conservatory"
}

let kitchen = {
name: "Kitchen"
}

let study = {
name: "Study"
}

let library = {
name: "Library"
}

let billiardRoom = {
name: "BilliardRoom"
} 

let lounge = {
name: "Lounge"
}

let ballroom = {
name: "Ballroom"
}

let hall = {
name: "Hall"
}

let spa = {
name: "Spa"
}

let livingRoom = {
name: "Living Room"
}

let observatory = {
name: "Observatory"
}

let theater = {
name: "Theater"
}

let guestHouse = {
name: "Guest House"
}

let patio = {
name: "Patio"
}

// Characters Collection
const charactersArray = [];

// Rooms Collection
const roomsArray = [];

// Weapons Collection
const weaponsArray = [];


//Add each object into the respective array
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock,
     mrMustard);

roomsArray.push(diningRoom, conservatory, kitchen, study, library,
     billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory,
      theater, guestHouse, patio);

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

function randomSelector (array) {
    return array[Math.floor(Math.random() * array.length)];
}

function pickMystery () {
    let pickedCharacter = randomSelector(charactersArray);
    let pickedWeapon = randomSelector(weaponsArray);
    let pickedRoom = randomSelector(roomsArray);
    let mysteryEnvelope = {
        suspect: pickedCharacter,
        weapon: pickedWeapon,
        room: pickedRoom,
    };
    return mysteryEnvelope;
}

function revealMystery (envelope) {
    return `${envelope['suspect']['first_name']} ${envelope['suspect']['last_name']} killed Mr. Boddy using the ${envelope['weapon']['name']} in the ${envelope['room']['name']}!!!!`;
}
