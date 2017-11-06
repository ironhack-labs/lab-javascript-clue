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

//-----------functions-------
function randomSelector(array) {
  var random = Math.floor(Math.random() * array.length);
  console.log(array[random]);
  return array[random];
}

//------ If we just one to select one card
function selectOneCardType(){
  do{
    var cardType = prompt("Select the number of the card you want: (1)Suspect (2)Weapon (3)Room ");
    if (cardType === "1"){
      randomSelector(suspect);
    }else if (cardType === "2") {
      randomSelector(weapon);
    }else if (cardType === "3") {
      randomSelector(room);
    }else {
      console.log("Hey. You must select a number between 1 and 3");
    }
  }while (cardType != 1 && cardType != 2 && cardType != 3);
}

//---- pick a mistery (three cards)
function pickMistery(caseFile){
  caseFile.push(randomSelector(suspect));
  caseFile.push(randomSelector(weapon));
  caseFile.push(randomSelector(room));
  return caseFile;
}

//----- reveal the mistery
function revealMistery(mistery){
  console.log("------------ And the mistery is ...... ");
  console.log("The suspect is " + mistery[0].firstName + " with the weapon " + mistery[1].name + " in the room " + mistery[2] + ".");
  return;
}

//----Se crea el misterio----
var theMistery = [];
pickMistery(theMistery);

//-----Se revela el misterio----
revealMistery(theMistery);

/*
//----random room---
var randomRoom = randomSelector(room);
console.log(randomRoom);
//----random weapon---
var randomWeapon = randomSelector(weapon);
console.log(randomWeapon.name);
//----random suspect---
var randomSuspect = randomSelector(suspect);
console.log(randomSuspect);
*/
