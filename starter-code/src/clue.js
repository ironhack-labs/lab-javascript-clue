//declarations

//Characters declarations

var mrGreen = {  
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur" 
} 

var drOrchid = {
frst_name:   "Doctor",
lst_name:    "Orchid",
color:       "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"
}

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
}

var missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
}

var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
}

var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player",
}

// declare weapons
var rope       = {name: "rope"        , weight: 10};
var knife      = {name: "knife"       , weight: 8};
var candlestick= {name: "candlestick" , weight: 2};
var dumbbell   = {name: "dumbbell"    , weight: 30};
var poison     = {name: "poison"      , weight: 2};
var axe        = {name: "axe"         , weight: 15};
var bat        = {name: "bat"         , weight: 13};
var trophy     = {name: "trophy"      , weight: 25};
var pistol     = {name: "pistol"      , weight: 20};

// Rooms' Collection
var DinningRoom = { name: "Dinning Room"};
var Conservatory = { name: "Conservatory"};
var Kitchen = { name: "Kitchen"};
var Study = { name: "Study"};
var Library = { name: "Library"};
var BilliardRoom = { name: "Billiard Room"};
var Lounge = { name: "Lounge"};
var Ballroom = { name: "Ballrom"};
var Hall = { name: "Hall"};
var Spa = { name: "Spa"};
var LivingRoom = { name: "Living Room"};
var Observatory = { name: "Observatory"};
var Theater = { name: "Theater"};
var GuestHouse = { name: "Guest House"};
var Patio = { name: "Patio"};

//collections

// Characters Collection
var charactersArray = [
];

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

charactersArray;

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

weaponsArray;

//rooms collection
var roomsArray = [];

roomsArray.push(DinningRoom, Conservatory, Kitchen, Study, Library, BilliardRoom, Lounge, Ballroom, Hall, Spa, LivingRoom, Observatory, Theater, GuestHouse, Patio);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                 Iteracion 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function randomSelector(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

function pickMistery() {
  var arrMistery = [randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray)];
  return arrMistery;
}

var misteryEnvelope = pickMistery();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                 Iteracion 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function revealMistery(theMistery) {
  var misteryResult = "";
  misteryResult = theMistery[0].first_name + " " + theMistery[0].last_name +  " killed Mr.Boddy using the " + theMistery[1].name + " in the "+ theMistery[2].name + "!!!!";
  return misteryResult;   
}

