

//Characters

  var mrGreen = {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur",
};

  var drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist",
};

  var profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer",
};

  var missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor",
};

 var mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité",
};

 var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player",
};
//characters
var suspects = [
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard];

//Weapons ----

var rope = {
  name: "rope",
  weight: 10,
};

var knife = {
  name: "knife",
  weight: 8,
};

var candlestick = {
  name: "candlestick",
  weight: 2,
};

var dumbbell = {
  name: "dumbbell",
  weight: 30,
};

var poison = {
  name: "poison",
  weight: 2,
};

var axe = {
  name: "axe",
  weight: 15,
};
var bat = {
  name: "bat",
  weight: 13,
};
var trophy = {
  name: "trophy",
  weight: 25,
};
var pistol = {
  name: "pistol",
  weight: 20,
};

var weapons = [
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


//Rooms ----

var rooms = [
{ name: "Dinning Room"},
{ name: "Conservatory"},
{ name: "Kitchen"},
{ name: "Study"},
{ name: "Library"},
{ name: "Billiard Room"},
{ name: "Lounge"},
{ name: "Ballroom"},
{ name: "Hall"},
{ name: "Spa"},
{ name: "Living Room"},
{ name: "Observatory"},
{ name: "Theater"},
{ name: "Guest House"},
{ name: "Patio"},
];
//cards structure
var cards = [
  suspects,
  weapons,
  rooms
];


function random_selector(array) {
  var randomIndex = Math.floor(Math.random()*array.length);
  var randomElement = array[randomIndex];
  return randomElement;
}
console.log(random_selector(rooms));

/*-------
function create_card() {
  for
  var randomCards = []
  randomCards.push()
}
  /*cards.forEach(function(elem){
    var randomCard = random_selector(elem);
    console.log(randomCard);
  });*/


/*
function pick_mistery() {

}

function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
*/
