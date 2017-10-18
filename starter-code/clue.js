/*

---- Characters ----
*/


var suspects = [
  {
    firsName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneurlast"
  },

  {
    firstName: "Doctor",
    lastName: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientistfirst"
  },

  {
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  },

  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
  },

  {
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
  }

]

// ---- Weapons ----

var weapons = [
  { firstName:"rope", Weight: 10 },
  { firstName:"Knife", Weight: 8 },
  { firstName:"Candlestick", Weight: 2 },
  { firstName:"Dumbbell", Weight: 30 },
  { firstName:"Poisol", Weight: 2 },
  { firstName:"Axe", Weight: 15 },
  { firstName:"Bat", Weight: 13 },
  { firstName:"Trophy", Weight: 25 },
  { firstName:"Pistol", Weight: 20 }
]


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
  var size = array.length;
  var numeroRandom = Math.round(Math.random()*(size - 1));
  return array[numeroRandom];
}

function pick_mistery(array){
  var assasin = random_selector(suspects);
  var weapons_random = random_selector(weapons);
  var rooms_random = random_selector(rooms);

  var envelope = [assasin.firstName, weapons_random.firstName, rooms_random]
  return envelope
}

pick_mistery();
