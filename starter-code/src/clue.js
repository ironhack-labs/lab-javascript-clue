// Characters
var characters = [
  {
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation: "Scientist"
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
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
  },

  {
    firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description:
      "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
  }
];

// Weapons
var weapons = [
  { name: "rope ", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 }
];

// Rooms
var rooms = [
  { name: "Dinning Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" }
];

// Characters Collection
var charactersArray = characters;

// Rooms' Collection
var roomsArray = rooms;

// Weapons Collection
var weaponsArray = weapons;

function randomSelector(cardsArray) {
  return cardsArray[Math.floor(Math.random() * cardsArray.length)];
}

function pickMistery() {
  var misteryEnvelope = [];
  fullStack = [charactersArray, weaponsArray, roomsArray];
  fullStack.forEach(function(oneStack) {
    misteryEnvelope.push(randomSelector(oneStack));
  });
  return misteryEnvelope;
}

var misteryEnvelope = pickMistery();

function revealMistery() {
  return (
    misteryEnvelope[0].firstName +
    " " +
    misteryEnvelope[0].lastName +
    " killed Mr.Boddy using the " +
    misteryEnvelope[1].name +
    " in the " +
    misteryEnvelope[2].name +
    "!!!!"
  );
}
// revealMistery();
