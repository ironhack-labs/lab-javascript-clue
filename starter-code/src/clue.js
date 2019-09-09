// Characters
var mrGreen =  {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "/suspects/freddy.png",
    occupation:   "Entrepreneur"
  };
  
var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "/suspects/nikola.png",
    ocupation:   "Scientist"
  };
  
var profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "/suspects/ines.png",
  occupation:   "Designer"
  };
  
var missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "/suspects/jack.png",
  occupation:   "Actor"
  };
  
var mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "/suspects/adrian.png",
  occupation:   "Socialité"
  };
  
var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "/suspects/laura.png",
    occupation:   "Retired Football player"
  };


// Weapons
var weapons = [
  {name: "rope", color: "black", description: "plastic",   weight: 10},
  {name: "knife", color: "white", description: "wood",   weight: 8},
  {name: "candlestick", color: "blue", description: "metal",   weight: 2},
  {name: "dumbbell", color: "green", description: "heavy",   weight: 30},
  {name: "poison", color: "yellow", description: "sweet",   weight: 2},
  {name: "axe", color: "purple", description: "rusty",   weight: 15},
  {name: "bat", color: "brown", description: "gum",   weight: 13},
  {name: "trophy", color: "pink", description: "win",   weight: 25},
  {name: "pistol", color: "orange", description: "007",   weight: 20}
  ]

// Rooms
  var rooms = [ 
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


// Characters Collection
const charactersArray = [mrMustard, mrsPeacock, missScarlet, profPlum, drOrchid, mrGreen];


// Rooms Collection
let roomsArray = [];
for(i = 0; i < rooms.length; i++){
    roomsArray.push(rooms[i]);
};


// Weapons Collection
let weaponsArray = [];
for(i = 0; i < weapons.length; i++){
    weaponsArray.push(weapons[i]);
};



function randomSelector(arr){
  var temp = Math.floor(Math.random() * arr.length);
  var randomy = arr[temp];
  return randomy;
}
randomSelector(weaponsArray);



//We need to create a pickMistery method that will call randomSelector for each card stack, 
// and return an array with the 3 picked cards, a character, a weapon and a room. 
// Our mystery should be stored on a misteryEnvelope variable.



function pickMystery (){
  var characterName = randomSelector(charactersArray);
  var weaponName = randomSelector(weaponsArray);
  var roomName = randomSelector(roomsArray);

  return {suspect: characterName, weapon: weaponName, room: roomName};
}

var misteryEnvelope = pickMystery();



function revealMystery(misteryEnvelope){
  //<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!
  var name = misteryEnvelope.suspect.first_name;
  var lastName = misteryEnvelope.suspect.last_name;
  var weapon = misteryEnvelope.weapon;
  var room = misteryEnvelope.room;

  return `${name} ${lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!!!!`;
}