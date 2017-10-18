// ---- Characters ----

  var mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    nameprefix: "Mr",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  };


  var drOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    nameprefix: "Dr",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
  };

  var profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    nameprefix: "Prof",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  };

  var missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  nameprefix: "Miss",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image:" https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

 var mrsPeacock= {
  firstName: "Eleanor",
  lastName: "Peacock",
  nameprefix: "Mrs",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

 var colMustard= {
  firstName: "Jack",
  lastName: "Mustard",
  nameprefix: "Col",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};

// ---- Weapons ----

var rope = {
  weight: 10,
  colour: "brown",
  name: "Rope"
};

var knife = {
  weight: 8,
  colour: "black",
  name: "Knife"
};

var candlestick = {
   weight: 2,
   colour: "white",
   name: "Candlestick"
 };

var dumbbell = {
   weight: 30,
   colour: "blue",
   name: "Dumbbell"
 };

var poison = {
   weight: 2,
   colour: "caca",
   name: "Poison"
 };

 var axe = {
   weight: 15,
   colour: "red",
   name: "Axe"
 };
 var bat = {
   weight: 13,
   colour: "grey",
   name: "Bat"
 };
 var trophy = {
   weight: 25,
   colour: "golden",
   name: "Trophy"
 };
 var pistol = {
   weight: 20,
   colour: "golden",
   name: "Pistol"
 };

// ---- FAMILIES ----

var roomsStack = [
  "Dinning Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
];

var characterStack = [
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  colMustard
];

var weaponStack = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

// RANDOM SELECTOR FROM EACH STACK

var randomSelectorCharacter = characterStack[Math.floor(Math.random()*characterStack.length)];
var randomSelectorWeapon = weaponStack[Math.floor(Math.random()*weaponStack.length)];
var randomSelectorRoom = roomsStack[Math.floor(Math.random()*roomsStack.length)];

/*/ RANDOM SELECTOR COMBINED

console.log("Character: " + randomSelectorCharacter.firstName + " " + randomSelectorCharacter.lastName);
console.log("Weapon: " + randomSelectorWeapon.name);
console.log("Room: " + randomSelectorRoom);
*/

// CODE AND FUNCTIONS

function random_selector(array) {
  var randomSelector = array[Math.floor(Math.random()*array.length)];
  return randomSelector;
}

function pick_mistery() {
  var envelope = [];
  var character = random_selector(characterStack);
  var weapon = random_selector(weaponStack);
  var room = random_selector(roomsStack);
  envelope.push(character.nameprefix + " " + character.lastName, weapon.name, room);
  return envelope;
}

function reveal_mistery(mistery) {
  mistery = pick_mistery();
  var revealCharacter = mistery[0];
  var revealWeapon = mistery[1];
  var revealRoom = mistery[2];
  console.log("Name: " + revealCharacter);
  console.log("Weapon: " + revealWeapon);
  console.log("Room: " + revealRoom);
}

console.log (reveal_mistery());
