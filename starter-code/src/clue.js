var rope = {name: "rope", weight: 10}
var knife = {name: "knife", weight: 8}
var candlestick = {name: "candlestick", weight: 2}
var dumbell = {name: "dumbbell", weight: 30}
var poison = {name: "poison", weight: 2}
var axe = {name: "axe", weight: 15}
var bat = {name: "bat", weight: 13}
var trophy = {name: "trophy", weight: 25}
var pistol = {name: "pistol", weight: 20}


var dining = {name: "Dinning Room"}
var cons = {name: "Conservatory"}
var Kit = {name: "Kitchen"}
var stud = {name: "Study"}
var lib = {name: "Library"}
var billR = {name: "Billiard Room"}
var long = {name: "Lounge"}
var ball = {name: "Ballroom"}
var hall = {name: "Hall"}
var spa = {name: "Spa"}
var livi = {name: "Living Room"}
var obser = {name: "Observatory"}
var theat = {name: "Theater"}
var guest = {name: "Guest House"}
var patio = {name: "Patio"}

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
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist",
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
occupation:   "Actor",
}
var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité",
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

// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];

charactersArray.push(mrGreen);
charactersArray.push(drOrchid);
charactersArray.push(profPlum);
charactersArray.push(missScarlet);
charactersArray.push(mrsPeacock);
charactersArray.push(mrMustard);
weaponsArray.push(rope);
weaponsArray.push(knife);
weaponsArray.push(candlestick);
weaponsArray.push(dumbell);
weaponsArray.push(poison);
weaponsArray.push(axe);
weaponsArray.push(bat);
weaponsArray.push(trophy);
weaponsArray.push(pistol);
roomsArray.push(dining);
roomsArray.push(cons);
roomsArray.push(Kit);
roomsArray.push(stud);
roomsArray.push(lib);
roomsArray.push(billR);
roomsArray.push(long);
roomsArray.push(ball);
roomsArray.push(hall);
roomsArray.push(spa);
roomsArray.push(livi);
roomsArray.push(obser);
roomsArray.push(theat);
roomsArray.push(guest);
roomsArray.push(patio);

var random = Math.random()* 6;
var final = Math.floor(random);
var mysteryEnvelope = [];

function randomSelector(r) {
  mysteryEnvelope.push(charactersArray[r]);
  mysteryEnvelope.push(weaponsArray[r]);
  mysteryEnvelope.push(roomsArray[r]);
}

randomSelector(final);
//console.log(mysteryEnvelope);

function revealMystery(){
  console.log(mysteryEnvelope[0].first_name + " " + mysteryEnvelope[0].last_name + " killed Mr. Body using the " + mysteryEnvelope[1].name+ " in the " + mysteryEnvelope[2].name); 
}
revealMystery();