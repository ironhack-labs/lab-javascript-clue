
// ---- Characters ----


var mrGreen = {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  occupation: "Entrepreneur"
};

var drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  occupation: "Scientist"
};

var profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  occupation: "Designer"
};

var missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  occupation: "Actor"
};

var mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  occupation: "Socialité"
};

 var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  occupation: "Retired Football player"
};

// ---- Weapons ----

var rope = {
  name: "Rope",
  weight: 10,
  damage: 20
};

var knife = {
  name: "Knife",
  weight: 8,
  damage: 16
};

var candleStick = {
  name: "Candlestick",
  weight: 2,
  damage: 4
};

var dumbBell = {
  name: "Dumbbell",
  weight: 30,
  damage: 60
};


var poison = {
  name: "Poison",
  weight: 2,
  damage: 4
};

var axe = {
  name: "Axe",
  weight: 15,
  damage: 30
};

var bat = {
  name: "Bat",
  weight: 13,
  damage: 26
};

var trophy = {
  name: "Trophy",
  weight: 25,
  damage: 50
};

var pistol = {
  name: "Pistol",
  weight: 20,
  damage: 40
};

//---- Rooms ----

var diningRoom = {
  name: "Dining Room"
};

var conservatory = {
  name: "Conservatory"
};

var kitchen = {
  name: "Kitchen"
};

var study = {
  name: "Study"
};

var library = {
  name: "Library"
};

var billiardRoom = {
  name: "Billiard Room"
};

var lounge = {
  name: "Lounge"
};

var ballRoom = {
  name: "Ballroom"
};

var hall = {
  name: "Hall"
};

var spa = {
  name: "Spa"
};

var livingRoom = {
  name: "Living Room"
};

var observatory = {
  name: "Observatory"
};

var theater = {
  name: "Theater"
};

var guestHouse = {
  name: "Guest House"
};

var patio = {
  name: "Patio"
};

//----- functions

 var rooms= [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballRoom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];
 var characters = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
 var weapons = [rope, knife, candleStick, dumbBell, poison, axe, bat, trophy, pistol];
/*
function random_selector(array) {
  var rnd = Math.random();
  return array[Math.floor(rnd * (array.length))];
}
*/
function random_selector(array) {
  var rnd = Math.random();
  var newIndex = Math.floor(rnd * (array.length));
  var element = array[newIndex];
  array.splice(newIndex, 1);
  return element;
}

function pick_mistery() {
  var room = random_selector(rooms);
  var weapon = random_selector(weapons);
  var character = random_selector(characters);
  var mistery = {
    room: room,
    weapon: weapon,
    character: character
  };
  return mistery;
}

function reveal_mistery(mistery) {
  console.log("The killer is " + mistery.character.firstName + " " + mistery.character.lastName);
  console.log("In the " + mistery.room.name);
  console.log("With the " + mistery.weapon.name + " dealing " + mistery.weapon.damage + " damage!!");
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
