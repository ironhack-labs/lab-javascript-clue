

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
  image: "http:www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};

   var profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https:metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};
  var missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https:metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

   var mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https:metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};
   var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https:metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};

var characters = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

var armas = [
  {name: "Rope", Weight: 10 },
  {name: "Knife", Weight: 8},
  {name: "Candlestick", Weight: 2},
  {name: "Dumbbell", Weight: 30},
  {name: "Poison", Weight: 2},
  {name: "Axe", Weight: 15},
  {name: "Bat", Weight: 13},
  {name: "Trophy", Weight: 25},
  {name: "Pistol", Weight: 20},
 ];

var rooms =  [
  {room: "DinningRoom"},
  {room: "Conservatory"},
  {room: "Kitchen"},
  {room: "Study"},
  {room: "Library"},
  {room: "BilliardRoom"},
  {room: "Lounge"},
  {room: "Ballroom"},
  {room: "Hall"},
  {room: "Spa"},
  {room: "LivingRoom"},
  {room: "Observatory"},
  {room: "Theater"},
  {room: "GuestHouse"},
  {room: "Patio"},
 ];


function randomSelector(array) {
 var randomCard = Math.floor(Math.random() * array.length);
  return (array[randomCard]);
}


function pickMistery() {
  var cards = [randomSelector(characters),randomSelector(armas),randomSelector(rooms)]
  return cards;
}

function revealMistery(mistery) {

}

var mistery_envelope = pickMistery();
revealMistery(misteryEnvelope);
