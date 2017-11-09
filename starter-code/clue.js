/*

---- Characters ----

  Mr Green
  first name: Jacob
  last name:  Green
  color: green
  description: He has a lot of connections
  age: 45
  image: https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
  occupation: Entrepreneur

  Dr Orchid
  first name: Doctor
  last name: Orchid
  color: white
  description: PhD in plant toxicology. Adopted daughter of Mr. Boddy
  age: 26
  image: http://www.radiotimes.com/uploads/images/Original/111967.jpg
  occupation: Scientist

  Prof Plum
  first name: Victor
  last name: Plum
  color: purple
  description: Billionare video game designer
  age: 22
  image: https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
  occupation: Designer

  Miss Scarlet
  first name: Kasandra
  last name: Scarlet
  color: red
  description: She is an A-list movie star with a dark past,
  age: 31,
  image: https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,
  occupation: Actor

 Mrs Peacock
  first name: Eleanor
  last name: Peacock
  color: blue
  description: She is from a wealthy family and uses her status and money to earn popularity
  age: 36
  image: https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
  occupation: Socialité

 Mr Mustard
  first name: Jack
  last name: Mustard
  color: yellow
  description: He is a former football player who tries to get by on his former glory
  age: 62
  image: https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
  occupation: Retired Football player

---- Weapons ----

Rope - Weight: 10
Knife - Weight: 8
Candlestick - Weight: 2
Dumbbell - Weight: 30
Poison - Weight: 2
Axe - Weight: 15
Bat - Weight: 13
Trophy - Weight: 25
Pistol - Weight: 20


---- Rooms ----
Dinning Room
Conservatory
Kitchen
Study
Library
Billiard Room
Lounge
Ballroom
Hall
Spa
Living Room
Observatory
Theater
Guest House
Patio

*/

// Characters

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

var mrMustard= {
   firstName: "Jack",
   lastName: "Mustard",
   color: "yellow",
   description: "He is a former football player who tries to get by on his former glory",
   age: 62,
   image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
   occupation: "Retired Football player"
};

var characters = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Weapons

var weapons = [
  {name: "rope", weight: 10},
  {name: "knife", weight: 8},
  {name: "candlestick", weight: 2},
  {name: "dumbbell", weight: 30},
  {name: "poison", weight: 2},
  {name: "axe", weight: 15},
  {name: "bat", weight: 13},
  {name: "trophy", weight: 25},
  {name: "pistol", weight: 20},
];

// Rooms

var rooms = [
  {room: "dining room"},
  {room: "conservatory"},
  {room: "kitchen"},
  {room: "study"},
  {room: "library"},
  {room: "billard room"},
  {room: "lounge"},
  {room: "ballroom"},
  {room: "hall"},
  {room: "spa"},
  {room: "living room"},
  {room: "observatory"},
  {room: "theater"},
  {room: "guest house"},
  {room: "patio"}
];

// Iteration 2 - Creating and revealing the mystery

function random_selector(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pick_mistery() {
  var cards = [random_selector(characters),random_selector(weapons),random_selector(rooms)];
  return cards;
}

function reveal_mistery(mistery) {
  console.log("The killer was "+ mistery[0].firstName +" with " + mistery[1].name + " at the " + mistery[2].room);
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
