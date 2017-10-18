

var mrGreen = {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
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
}

  var missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past,",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
  }

 var mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
 }

 var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
 }

 var characters = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];




var weapons = [

{type: "Rope", weight: 10},
{type: "Knife", weight: 8},
{type: "Candlestick", weight:2},
{type: "Dumbbell", weight: 30},
{type: "Poison", weight: 2},
{type: "Axe", weight: 15},
{type: "Bat", weight: 13},
{type: "Trophy", weight: 25},
{type: "Pistol", weight: 20}
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
]


function random_selector(array) {
  return Math.floor(Math.random()*array.length);
}

function pick_mistery(char, weap, rooms) {
  return [
    char[random_selector (char)],
    weap[random_selector (weap)],
    rooms[random_selector (rooms)]
 ];
 }

function reveal_mistery(mistery) {
  console.log("the character is: ", mistery[0], " with the weapon: ", mistery[1], "in the room: ", mistery[2]);
}

var mistery_envelope = pick_mistery(characters, weapons, rooms);
reveal_mistery(mistery_envelope);


// CODE GIVEN BELOW



function random_selector(array) {

}

function pick_mistery() {

}

function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
