

var characters = [
  mrGreen = {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur",
},

  drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
},

profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer",
},

missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
},

 mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
},

 mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player",

}];

var weapons = [
 rope = {
   name:"rope",
   weight: 10},
 knife = {
   name:"knife",
   weight: 8},
 candlestick = {
   name:"candlestick",
   weight: 2},
 dumbbell = {
   name:"dumbell",
   weight: 30},
 poison = {
   name:"poision",
   weight: 2},
 axe = {
   name:"axe",
   weight: 15},
 bat = {
   name:"bat",
   weight: 13},
 trophy = {
   name:"trophy",
   weight: 25},
 pistol = {
   name:"pistol",
   weight: 20}
];

var rooms = [
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

function random_selector(array) {

  var i = getRandomNumber(0, array.length);
  return i;

}

function getRandomNumber(min, max) {

  var randomNumber = Math.random() *(max - min) + min;
  return Math.floor(randomNumber);

}



function pick_mistery() {

  var randomIndex = random_selector(characters);
  var randomCharacter = characters[randomIndex].firstName + " " + characters[randomIndex].lastName;

  randomIndex = random_selector(weapons);
  var randomWeapon = weapons[randomIndex].name;

  randomIndex = random_selector(rooms);
  var randomRoom = rooms[randomIndex];

  var finalMessage = "It was " + randomCharacter + "in the " + randomRoom + " with the " + randomWeapon + ".";

  return finalMessage;

}

function reveal_mistery(mistery) {

  console.log(mistery);

}

var mistery_envelope = pick_mistery();

reveal_mistery(mistery_envelope);
