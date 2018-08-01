// Characters

var mrGreen = {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur",
};

var drOrchid = {
  frst_name:   "Doctor",
  lst_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:     "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
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
occupation:   "Retired Football player",
};

// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)
// console.log(charactersArray);

// Rooms' Collection
var roomsArray = [
  { name: "Dinning Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" }
];

// Weapons Collection
var weaponsArray = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 }];

function randomSelector(array) {
  var randomInt = Math.floor(Math.random() * array.length);
  return array[randomInt];
}

//console.log(randomSelector(charactersArray));

function pickMistery() {
  var misteryEnvelope = [];
  var mystCharacter = randomSelector(charactersArray);
  var mystRoom = randomSelector(roomsArray);
  var mystWeapon = randomSelector(weaponsArray);
  misteryEnvelope = [mystCharacter, mystWeapon, mystRoom];
  console.log("This is the mistery Envelope: " + misteryEnvelope);
  return misteryEnvelope;
}
console.log("This is a called pickMistery Function: " + pickMistery());


function revealMistery(misteryEnvelope) {
  // return misteryEnvelope;
  // console.log(mystCharacter.first_name mystCharacter.last_name + "killed Mr.Boddy using the " + mystWeapon " in the " + mystRoom + "!!!!");
 console.log(misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + "killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!");
}

revealMistery(pickMistery());
