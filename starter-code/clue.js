var  mrGreen = {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

var  drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};

var  profPlum = {
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
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};

var suspect = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

//---- Weapons ----
var rope = {
  name: "rope",
  weight: 10
};
var knife = {
  name: "knife",
  weight: 8
};
var candlestick = {
  name: "candlestick",
  Weight: 2
};
var dumbbell = {
  name: "dumbbell",
  weight: 30
};
var poison = {
  name: "poison",
  weight: 2
};
var axe = {
  name: "axe",
  weight: 15
};
var bat = {
  name: "bat",
  weight: 13
};
var trophy = {
  name: "trophy",
  weight: 25
};
var pistol = {
  name: "pistol",
  weight: 20
};

var weapon = [
  rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol
];

var room = [
  "Dinning Room", "Conservatory", "Kitchen", "Study", "Library",
  "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room",
  "Observatory", "Theater", "Guest House", "Patio"
];


function randomSelector(array) {
  var random = Math.floor(Math.random() * array.length);
  return array[random];
}

//----function that calls the random selector

function callRandomSelector(card){
  var randomCard = randomSelector(card);
  console.log(randomCard);
}

/*
do{
  var cardType = prompt("Select the number of the card you want: (1)Suspect (2)Weapon (3)Room ");
  if (cardType === 1){
    callRandomSelector(suspect);
  }else if (cardType === 2) {
    callRandomSelector(weapon);
  }else if (cardType === 3) {
    callRandomSelector(room);
  }else {
    console.log("Hey. You must select a number between 1 and 3");
  }
}while (cardType != 1 || cardType != 2 || cardType != 3);
*/

var cardType = prompt("Select the number of the card you want: (1)Suspect (2)Weapon (3)Room ");
while (cardType != "1" && cardType != "2" && cardType != "3"){
  console.log("Hey. You must select a number between 1, 2 and 3");
  var cardType = prompt("Select the number of the card you want: (1)Suspect (2)Weapon (3)Room ");
  break;
}

if (cardType === "1"){
callRandomSelector(suspect);
}else if (cardType === "2") {
  callRandomSelector(weapon);
}else if (cardType === "3") {
callRandomSelector(room);
}


var randomRoom = randomSelector(room);
console.log(randomRoom);
//----random weapon---
var randomWeapon = randomSelector(weapon);
console.log(randomWeapon.name);
//----random suspect---
var randomSuspect = randomSelector(suspect);
console.log(randomSuspect);

function pickMistery() {
var mistery = [];
mistery.push(randomSelector(room));
mistery.push(randomSelector(weapon));
mistery.push(randomSelector(suspect));

return mistery;
}

function revealMistery(mistery) {
console.log(mistery);
}
