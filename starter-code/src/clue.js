

// Characters

var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
};

var drOrchid = {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"
};

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
};

var missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
};

var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
};

var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"
};

// Weapons

var rope = {
    name: "rope",        weight: 10
};
var knife = {
    name: "knife",       weight: 8
};
var candlestick = {
    name: "candlestick", weight: 2
};
var dumbbel = {
    name: "dumbbell",    weight: 30
};
var poison = {
    name: "poison",      weight: 2
};
var axe = {
    name: "axe",         weight: 15
};
var bat = {
    name: "bat",         weight: 13
};
var trophy = {
    name: "trophy",      weight: 25
};
var pistol = {
    name: "pistol",      weight: 20
};

// Rooms

var DinningRoom = {
    name: "Dinning Room"
};
var Conservatory = {
    name: "Conservatory"
};
var Kitchen = {
    name: "Kitchen"
};
var Study = {
    name: "Study"
};
var Library = {
    name: "Library"
};
var BilliardRoom = {
    name: "Billiard Room"
};
var Lounge = {
    name: "Lounge"
};
var Ballroom = {
    name: "Ballroom"
};
var Hall = {
    name: "Hall"
};
var Spa = {
    name: "Spa"
};
var LivingRoom = {
    name: "Living Room"
};
var Observatory = {
    name: "Observatory"
};
var Theater = {
    name: "Theater"
};
var GuestHouse = {
    name: "Guest House"
};
var Patio = {
    name: "Patio"
};


// Characters Collection
var charactersArray = [
    mrGreen, 
    drOrchid, 
    profPlum, 
    missScarlet, 
    mrsPeacock, 
    mrMustard
];

// Rooms' Collection
var roomsArray = [
    rope, 
    knife, 
    candlestick, 
    dumbbel, 
    poison, 
    axe, 
    bat, 
    trophy, 
    pistol
];

// Weapons Collection
var weaponsArray = [DinningRoom, Conservatory, Kitchen, Study, Library, BilliardRoom, Lounge, Ballroom, Hall, Spa, LivingRoom, Observatory, Theater, GuestHouse, Patio];


function randomSelector(array) {
    if (array.length == 0) {return undefined;}
    if (array.length == 1) {return array[0];}
    var randomNumber = Math.random();
    randomNumber = randomNumber * array.length;
    randomNumber = Math.floor(randomNumber);
    return array[randomNumber];
};

function pickMistery() {
    var misteryCharacter = randomSelector(charactersArray);
    var misteryWeapon = randomSelector(weaponsArray);
    var misteryRoom = randomSelector(roomsArray);    
    var misteryEnvelope = [misteryCharacter, misteryWeapon, misteryRoom];
    return misteryEnvelope;
};

function revealMistery(misteryEnvelope) {
    return (misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name +"!!!!");
}


console.log(revealMistery(misteryEnvelope));

// Victor Plum killed Mr.Boddy using the poison in the Billiard Room!!!!