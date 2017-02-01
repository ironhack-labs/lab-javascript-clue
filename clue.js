// Partnered Exercise 2/1/17 - By Kristy Horton and Daniel Soraluz

var mrGreen = {
  name:"Jacob Green",
  gender: "male",
  color: "green",
  occupation:"socialite",
  age:28,
  description: "He has a lot connections and is always willing to help people out --- for a price."
};

var drOrchard = {
  name:"Doctor Orchard",
  gender: "female",
  color: "white",
  occupation:"doctor",
  age:35,
  description: "She is the adopted daughter of Mr. Boddy, a biologist with a PhD in plant toicology..."
};

var vPlum = {
  name:"Victor Plum",
  gender: "male",
  color: "purple",
  occupation:"video game designer",
  age:23,
  description: "Billionaire video game designer embracing his new popularity"
};

var kScarlett = {
  name:"Kasandra Scarlet",
  gender: "female",
  color: "red",
  occupation:"movie star",
  age:28,
  description: "A-list movie star whose past haunts her."
};

var ePeacock = {
  name:"Eleanor Peacock",
  gender: "female",
  color: "blue",
  occupation:"rich",
  age:40,
  description: "From a wealthy family who uses her popularity to gain entitlement."
};

var jMustard = {
  name:"Jack Mustard",
  gender: "male",
  color: "yellow",
  occupation:"retired football player",
  age:55,
  description: "former football player who tries to get by on his former glory."
};


var suspect = [mrGreen, drOrchard, vPlum, kScarlett, ePeacock, jMustard];

var rope = {
  name: "rope",
  weight: "1 lb.",
  color: "brown",
  damage: "2"
};

var knife = {
  name: "knife",
  weight: "1.5 lb",
  color: "silver",
  damage: "8"
};

var candleStick = {
  name: "candle stick",
  weight: "2 lb",
  color: "cream",
  damage: "6"
};

var dumbbell = {
  name: "dumbbell",
  weight: "10 lb",
  color: "black",
  damage: "8"
};

var poison = {
  name: "poison",
  weight: "1 oz",
  color: "translucent",
  damage: "7"
};

var axe = {
  name: "axe",
  weight: "5 lb",
  color: "brown",
  damage: "6"
};

var bat = {
  name: "bat",
  weight: "5.7 lb",
  color: "oak",
  damage: "4"
};

var trophy = {
  name: "trophy",
  weight: "3 lb",
  color: "gold",
  damage: "4"
};

var pistol = {
  name: "pistol",
  weight: "5 lb",
  color: "gunmetal",
  damage: "9"
};

var weapon = [rope, knife, candleStick, dumbbell, poison, axe, bat, trophy, pistol];

var room = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];

var killer = {};

function getRoom() {
  var random = getRandomArbitrary(0,15);

  return room[random];
}

function getWeapon() {
  var random = getRandomArbitrary(0,9);

  return weapon[random].name;
}

function getCharacter(){
  var random = getRandomArbitrary(0,6);

  return suspect[random].name;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function startGame() {

  var room = getRoom();
  var weapon = getWeapon();
  var killer = getCharacter();
  var victim = getCharacter();

  var theAnswer = "The Answer: " + killer + " killed " + victim + " in the " + room +
  " with the " + weapon + ".";

  console.log(theAnswer);
}

startGame();
