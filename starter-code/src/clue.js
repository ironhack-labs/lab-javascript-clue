// Characters

mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image:
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation: "Scientist"
};

profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};

missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description:
    "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};

// Weapons

var rope = {name: "rope", weight: 10};
var knife = {name: "knife", weight: 8};
var candle = {name: "candlestick", weight: 2};
var dumbbell = {name: "dumbbell", weight: 30};
var poison = {name: "poison", weight: 2};
var axe = {name: "axe", weight: 15};
var bat = {name: "bat", weight: 13};
var trophy = {name: "trophy", weight: 25};
var pistol = {name: "pistol", weight: 20};

// Rooms
var DinningRoom = {name: "Dinning Room"};
var Conservatory = {name: "Conservatory"};
var Kitchen = {name: "Kitchen"};
var Library = {name: "Library"};
var Theater = {name: "Theater"};
var Lounge = {name: "Lounge"};
var Study = {name: "Study"};
var Patio = {name: "Patio"};
var Hall = {name: "Hall"};
var Spa = {name: "Spa"};
var Ballroom = {name: "Ballroom"};
var Billiard = {name: "Billiard Room"};
var Living = {name: "Living Room"};
var Guest = {name: "Guest House"};
var Observatory = {name: "Observatory"};

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
  DinningRoom,
  Conservatory,
  Kitchen,
  Library,
  Theater,
  Lounge,
  Study,
  Patio,
  Hall,
  Spa,
  Ballroom,
  Billiard,
  Living,
  Guest,
  Observatory
];

// Weapons Collection
var weaponsArray = [
  rope,
  knife,
  candle,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

// Game Functions

// Random selection of cards
function randomSelector(cardStack) {
  res = Math.floor(Math.random() * Math.floor(cardStack.length));
  return cardStack[res];
}

// Each player take a mistery
function pickMistery() {
  var misteryEnvelope = [];
  var globalStack = [charactersArray, weaponsArray, roomsArray];
  globalStack.forEach(function(e) {
    misteryEnvelope.push(randomSelector(e));
  });
  return misteryEnvelope;
}

// Reveal the Killer of the game
function revealMistery(envelope) {
  
  var randomChar = envelope[0].first_name + " " + envelope[0].last_name;
  var randomWeapon = envelope[1].name;
  var randomRoom = envelope[2].name;

  var emphase1 = " killed Mr.Boddy using the ";
  var emphase2 = " in the ";
  var emphase3 = "!!!!";

  return (randomChar + emphase1 + randomWeapon + emphase2 + randomRoom + emphase3 );
}
