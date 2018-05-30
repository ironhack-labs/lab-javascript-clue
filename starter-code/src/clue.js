// Characters

var charactersArray = [];


var mrGreen = {
first_name:"Jacob",
last_name: "Green",
color: "green",
description: "He has a lot of connections",
age: "45",
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation: "Entrepreneur",
};

var drOrchid = {
first_name: "Doctor",
last_name: "Orchid",
color: "white",
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age: "26",
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation: "Scientist",
}


var profPlum = {
first_name: "Victor",
last_name: "Plum",
color: "purple",
description: "Billionare video game designer",
age: "22",
image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation: "Designer",
}

var missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          "31",
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor",
}


var mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          "36",
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité",
}


var mrMustard= {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          "62",
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player",
}

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
console.log(charactersArray);


// Weapons
var weaponsArray = [];

var rope = {
  name: "rope",
  weight: "10",
}

var knife = {
  name: "knife",
  weight: "8",
}

var candlestick = {
  name: "candlestick",
  weight: "2",
}

var dumbbell = {
  name: "dumbbell",
  weight: "30",
}

var poison = {
  name: "poison",
  weight: "2",
}

var axe= {
  name: "axe",
  weight: "15",
}

var bat ={
  name: "bat",
  weight: "13",
}

var trophy = {
  name: "trophy",
  weight: "25",
}

var pistol = {
  name: "pistol",
  weight: "20",
}

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);
console.log(weaponsArray);


// Rooms
var roomsArray=[];


var dinningRoom = "Dinning Room";
var conservatory = "Conservatory";
var kitchen = "Kitchen";
var study = "Study";
var librairy = "Library";
var billiardRoom = "Billiard Room";
var lounge = "Lounge";
var ballroom = "Ballroom";
var hall = "Hall";
var spa = "Spa";
var livingRoom = "Living Room";
var observatory = "Observatory";
var theater = "Theater";
var guestHouse = "Guest House";
var patio = "Patio";

roomsArray.push(dinningRoom, conservatory, kitchen, study, librairy, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);
console.log(roomsArray);

cardStacks = [];
cardStacks.push(charactersArray, weaponsArray, roomsArray);

//This function randomly selects a card from a card stack
function randomSelector(cardStack){
  var randomCard = cardStack[Math.floor(Math.random()*cardStack.length)];
  return randomCard;
}

function pickMistery(){
  var mysteryEnvelope = [];
  cardStacks.forEach(function(cardStack){
    var mysteryCard=randomSelector(cardStack);
    mysteryEnvelope.push(mysteryCard);
  })
  return mysteryEnvelope;
};

function revealMistery (mysteryEnvelope){
  return mysteryEnvelope[0].first_name + " "+ mysteryEnvelope[0].last_name + " killed Mr.Boddy using the " + mysteryEnvelope[1].name + " in the " + mysteryEnvelope[2].name + "!!!!";
}

var mysteryEnvelope = pickMistery();
revealMistery(mysteryEnvelope);

