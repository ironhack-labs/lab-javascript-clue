// Characters

var mrGreen ={
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
}

var drOrchid ={
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          "26",
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
}
var profPlum ={
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          "22",
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
}
var missScarlet ={
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          "31",
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
}
var mrsPeacock ={
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          "36",
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
}
var mrMustard ={
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          "62",
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
}




// Weapons
var rope = {
    name: "rope",
    weight: 10
}
var knife = {
    name: "knife",
    weight: 8   
}
var candlestick = {
    name: "candlestick" ,
    weight: 2   
}
var dumbbell = {
    name: "dumbbell",
    weight: 30
}
var poison = {
    name: "poison" ,
    weight: 2   
}
var axe = {
    name: "axe",
    weight: 15
}
var bat = {
    name: "bat",
    weight: 13
}
var trophy = {
    name: "trophy",
    weight: 25
}
var pistol = {
    name: "pistol",
    weight: 20
}



// Rooms

var Dinning ={
    name: "Dinning Room"
}
var Conservatory ={
    name: "Conservatory"
}
var Kitchen ={
    name: "Kitchen"
}
var Study ={
    name: "Study"
}
var Library ={
    name: "Library"
}
var Billiard ={
    name: "Billiard Room"
}
var Lounge ={
    name: "Lounge"
}
var Ballroom ={
    name: "Ballroom"
}
var Hall ={
    name: "Hall"
}
var Spa ={
    name: "Spa"
}
var Living ={
    name: "Living Room"
}
var Observatory ={
    name: "Observatory"
}
var Theater ={
    name: "Theater"
}
var Guest ={
    name: "Guest House"
}
var Patio ={
    name: "Patio"
}


// Characters Collection
var charactersArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];

// Rooms' Collection
var roomsArray = [Dinning, Conservatory, Kitchen, Study, Library, Billiard, Lounge, Ballroom, Hall, Spa, Living, Observatory, Theater, Guest, Patio];

// Weapons Collection
var weaponsArray = [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];


function PickRandom(arrayElements) {
    var itemElement = arrayElements[Math.floor(Math.random() * arrayElements.length)];
    return itemElement;    
}

var character1 = PickRandom(charactersArray);
var room1 = PickRandom(roomsArray);
var weapon1 = PickRandom(weaponsArray);

function SolveMistery(persona,hab,arma) {
    
    console.log( persona.first_name +" "+ persona.last_name + " ha matado a Mr. Boddy usando "+ arma.name + " en " + hab.name);
}

SolveMistery(character1, room1, weapon1);
