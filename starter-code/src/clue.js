var mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image:
    " https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: " Entrepreneur"
};
var drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation: "Scientist"
};

var profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};

var missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};
var mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};
var mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description:
    " He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};
// Weapons

var rope = { name: "rope", weight: 10 };
var knife = { name: "knife", weight: 8 };
var candle = { name: "candle", weight: 2 };
var dumbbell = { name: "dumbbell", weight: 30 };
var poison = { name: "poison", weight: 2 };
var axe = { name: "axe", weight: 15 };
var bat = { name: "bat", weight: 13 };
var trophy = { name: "trophy", weight: 25 };
var pistol = { name: "pistol", weight: 20 };

// Rooms
var DinningRoom = { name: "DinningRoom" };
var Conservatory = { name: "Conservatory" };
var Kitchen = { name: "Kitchen" };
var Study = { name: "Study" };
var Library = { name: "Library" };
var BilliardRoom = { name: "BilliardRoom" };
var Lounge = { name: "Lounge" };
var Ballroom = { name: "Ballroom" };
var Hall = { name: "Hall" };
var Spa = { name: "Spa" };
var LivingRoom = { name: "LivingRoom" };
var Observatory = { name: "Observatory" };
var Theater = { name: "Theater" };
var GuestHouse = { name: "GuestHouse" };
var Patio = { name: "Patio" };

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

// Weapons Collection
var roomsArray = [
  DinningRoom,
  Conservatory,
  Kitchen,
  Study,
  Library,
  BilliardRoom,
  Lounge,
  Ballroom,
  Hall,
  Spa,
  LivingRoom,
  Observatory,
  Theater,
  GuestHouse,
  Patio
];

function random(array) {
  var random1 = Math.floor(Math.random() * array.length);
  console.log(random1);
  return random1;
}

function randomSelector(array) {
  var randomNumber = random(array);
  return array[randomNumber];
}

function pickMistery() {
  var result = [];
  result.push(randomSelector(charactersArray));
  result.push(randomSelector(weaponsArray));
  result.push(randomSelector(roomsArray));
  return result;
}
//esta seria la funcion para que el codigo sea reutilizable.
/*function pickMistery(character, weapon, room) {
  var result = [];
  result.push(randomSelector(character));
  result.push(randomSelector(weapon));
  result.push(randomSelector(room));
  return result;
}*/

var misteryEnvelope = pickMistery();

function revealMistery(misteryEnvelope) {
  var firstname = misteryEnvelope[0].first_name;
  var lastname = misteryEnvelope[0].last_name;
  var weapon = misteryEnvelope[1].name;
  var place = misteryEnvelope[2].name;
  return (
    firstname +
    " " +
    lastname +
    " killed Mr.Boddy using the " +
    weapon +
    " in the " +
    place +
    "!!!!"
  );
}
