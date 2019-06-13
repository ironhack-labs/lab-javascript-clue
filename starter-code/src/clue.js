let mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:       " green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg" ,
    occupation:   "Entrepreneur"
};
//1

let drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
};
//2

let profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
};
//3

let missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description: "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "'Actor'"
};
//4

let mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:       " https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité",
};
//5 person

let mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description: " He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
};
// 6 person

// Weapons
let weapons = [
    {name: "rope", weight: 10},
    {name: "knife", weight: 8},
    {name: "candlestick", weight: 2},
    {name: "dumbell", weight: 30},
    {name: "poison", weight: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20}
];     
// Rooms
let room =[
    {name: "Dinning Room" } ,
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
// Characters Collection

// Rooms' Collection
let roomsArray = [];
// Weapons Collection
let randomArr = [];
//

let charactersArray = []
charactersArray.push(mrGreen, drOrchid, missScarlet, mrsPeacock, mrMustard);

function randomSelector(arrayToPickFrom){
    // let rando = math.floor(math.random()* arrayToPickFrom.length);
    // return arrayToPickFrom[rando];
}
function pickMistery (){
    let randRoom = room[Math.floor(Math.random() * room.length)];
    let randCharacter = charactersArray[Math.floor(Math.random() * charactersArray.length)];
    let randWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    return [randRoom, randCharacter, randWeapon]
}
let misteryEnvelope = pickMistery()

function revealMistery(misteryEnvelope){
    return `${misteryEnvelope[1].first_name} ${misteryEnvelope[1].last_name} killed Mr.Boddy using the ${misteryEnvelope[2].name} in the ${misteryEnvelope[0].name}!!!!`
}

revealMistery(misteryEnvelope);