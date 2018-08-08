// Characters Collection
var charactersArray = [];
var mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  image:
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  age: 45,
  occupation: "Entrepreneur"
};
var drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  age: 26,
  occupation: "Scientist"
};
var profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  images: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  age: 22,
  occupation: "Designer"
};
var missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  images: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  age: 31,
  occupation: "Actor"
};
var mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  images: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  age: 36,
  occupation: "Socialité"
};
var mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description:
    "He is a former football player who tries to get by on his former glory",
  images: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  age: 62,
  occupation: "Retired Football player"
};
charactersArray.push(
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
);

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 }
);

// Rooms' Collection
var roomsArray = [];
roomsArray.push(
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
);

function randomSelector(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

randomSelector(charactersArray);
randomSelector(weaponsArray);
randomSelector(roomsArray);

function pickMistery() {
  var misteryEnvelope = [];
  misteryEnvelope.push(
    randomSelector(charactersArray),
    randomSelector(weaponsArray),
    randomSelector(roomsArray)
  );
  return misteryEnvelope;
}

function revealMistery(misteryEnvelope) {
  return (
    misteryEnvelope[0].first_name +
    " " +
    misteryEnvelope[0].last_name +
    " " +
    "killed Mr.Boddy using the " +
    misteryEnvelope[1].name +
    " " +
    "in the " +
    misteryEnvelope[2].name +
    "!!!!"
  );
}
