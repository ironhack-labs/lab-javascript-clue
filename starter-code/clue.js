var suspects = [
  {
    cardName: "Mr Green",
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  },
  {
    cardName: "Dr Orchid",
    firstName: "Doctor",
    lastName: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
  },
  {
    cardName: "Prof Plum",
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  },
  {
    cardName: "MissScarlet",
    firstName: "Kasandra",
    lastName: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
    },
  {
    cardName: "MrsPeacock",
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
  },
  {
    cardName: "MrMustard",
    firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
    }
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
var weapons = [
  { name: "Rope", weight: 10 },
  { name: "Knife", weight: 8 },
  { name: "Candlestick", weight: 2 },
  { name: "Dumbbell", weight: 30 },
  { name: "Poison", weight: 2 },
  { name: "Axe", weight: 15 },
  { name: "Bat", weight: 13 },
  { name: "Trophy", weight: 25 },
  { name: "Pistol", weight: 20 },
];

var randomSuspect = Math.floor(Math.random() * 6);
var randomRoom = Math.floor(Math.random() * 15);
var randomWeapon = Math.floor(Math.random() * 9);
var mistery = [];

function random_selector(array, randomNumber) {
  return array[randomNumber];
}

function pick_mistery() {
  var mysterySuspect = random_selector(suspects, randomSuspect);
  var mysteryRoom = random_selector(rooms, randomRoom);
  var mysteryWeapon = random_selector(weapons, randomWeapon);
  mistery.push(mysterySuspect, mysteryRoom, mysteryWeapon);
  console.log("EL ARRAY MISTERIOS", mistery)
  return mistery;
}

function reveal_mistery(mistery) {
  var killer = mistery[0].cardName;
  var room = mistery[1];
  var weapon = mistery[2].name;
  console.log("EL ASESINO -->", killer);
  console.log("LA HABITACIÓN -->", room);
  console.log("El arma es -->", weapon);
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
