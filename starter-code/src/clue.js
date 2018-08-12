// Characters

var mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image:
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

var drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};

var profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};

var missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

var mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description:
    "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};

// Weapons

var rope = { name: "rope", weight: 10 };
var knife = { name: "knife", weight: 8 };
var candlestick = { name: "candelstick", weight: 2 };
var dumbbell = { name: "dumbbell", weight: 30 };
var poison = { name: "poison", weight: 2 };
var axe = { name: "axe", weight: 15 };
var bat = { name: "bat", weight: 13 };
var trophy = { name: "trophy", weight: 25 };
var pistol = { name: "pistol", weight: 20 };

// Rooms
var dinningRoom = { name: "dinningRoom" };
var conservatory = { name: "conservatory" };
var kitchen = { name: "kitchen" };
var study = { name: "study" };
var library = { name: "library" };
var billiardRoom = { name: "billiardRoom" };
var lounge = { name: "lounge" };
var ballroom = { name: "ballroom" };
var hall = { name: "hall" };
var spa = { name: "spa" };
var livingRoom = { name: "livingRoom" };
var observatory = { name: "observatory" };
var theater = { name: "theater" };
var guestHouse = { name: "guestHouse" };
var patio = { name: "patio" };

// Characters Collection
var charactersArray = [];

charactersArray.push(
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
);

// Rooms' Collection
var roomsArray = [];

roomsArray.push(
  dinningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
);

// Weapons Collection
var weaponsArray = [];

weaponsArray.push(
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
);

function randomSelector(array) {
  var randomPick = Math.floor(Math.random() * array.length);
  return array[randomPick];
}

randomSelector(charactersArray);
randomSelector(roomsArray);
randomSelector(weaponsArray);

function pickMistery() {
  var misteryEnvelope = [];
  misteryEnvelope.push(
    randomSelector(charactersArray),
    randomSelector(weaponsArray),
    randomSelector(roomsArray)
  );
  return misteryEnvelope;
}

function revealMistery(misteryEnvelope) {
  // var misteryEnvelope = pickMistery();
  return (
    misteryEnvelope[0].firstName +
    " " +
    misteryEnvelope[0].lastName +
    " killed Mr.Boddy using the " +
    misteryEnvelope[1].name +
    " in the " +
    misteryEnvelope[2].name +
    "!!!!"
  );
}
