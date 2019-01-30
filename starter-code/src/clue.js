// Characters
var mysteryEvelope = [];

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
var rope = {weight: 10, name: "rope"};

var candleStick = {weight: 2, name: "candlestick"};

var dumbell = {weight: 30, name: "dumbell"};      

var  poison = {weight: 15, name :"poison"};       

var axe = {weight: 13, name : "axe"};

var bat = {weight: 25, name: "bat"};          

var trophy = {weight: 20, name: "pistol"};

// Rooms

var dininngRoom = {name: "Dinning Room"};

var kitchen = {name: "kitchen"};

var study = {name: "Study"};

var library = {name: "Library"};

var billiardRoom = {name: "Billiard Room"};

var lounge = {name: "Lounge"};

var ballroom = {name: "Ballroom"};

var hall = {name: "Hall"};

var spa = {name: "Spa"};

var livingRoom = {name: "Living Room"};

var observatory = {name: "Observatory"};

var theater = {name: "Theater"};

var guesthouse = {name: "Guest House"};

var patio = {name: "Patio"};

// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Weapons Collection

var weaponsArray = [rope, candleStick, dumbell, poison, axe, bat, reophy];

// Rooms' Collection

var roomsArray = [dininngRoom, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guesthouse, patio];


function randomSelector (anyArray = []) {
  
  var randomElement = anyArray[Math.floor(Math.random()*anyArray.length)];

  return randomElement;
}

function pickMistery(){

  var characterSelected = randomSelector(charactersArray);
  var weaponsSeleted = randomSelector(weaponsArray);
  var roomsSeleted = randomSelector(roomsArray);
  

  mysteryEvelope = [characterSelected, weaponsSeleted, roomsSeleted];

  return mysteryEvelope;

}

function revealMistery (mysteryEvelope){

 var character = mysteryEvelope[0];
 var weapon = mysteryEvelope[1];
 var room = mysteryEvelope[2];

  var mistery = character.first_name  + ' ' + character.last_name + ' killed Mr.Boddy using the ' + weapon.name + ' in the ' + room.name  + '!!!!';

  return mistery;
}