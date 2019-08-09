// Characters

let mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image:
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

let drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation: "Scientist"
};

let profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};

let missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

let mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};
let mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description:
    "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};

// Weapons

let rope = { name: "rope", weight: 10 };
let knife = { name: "knife", weight: 8 };
let candlestick = { name: "candlest", weight: 2 };
let dumbbell = { name: "dumbbell", weight: 30 };
let poison = { name: "poison", weight: 2 };
let axe = { name: "axe", weight: 15 };
let bat = { name: "bat", weight: 13 };
let trophyname = { name: "trophy", weight: 25 };
let pistol = { name: "pistol", weight: 20 };

// Rooms
let Dinning = { name: "Dinning Room" };
let Conservatory = { name: "Conservatory" };
let Kitchen = { name: "Kitchen" };
let Study = { name: "Study" };
let Library = { name: "Library" };
let Billiard = { name: "Billiard Room" };
let Lounge = { name: "Lounge" };
let Ballroom = { name: "Ballroom" };
let Hall = { name: "Hall" };
let Spa = { name: "Spa" };
let Living = { name: "Living Room" };
let Observatory = { name: "Observatory" };
let Theater = { name: "Theater" };
let Guest = { name: "Guest House" };
let Patio = { name: "Patio" };

// Characters Collection
var charactersArray = [
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
];

// Rooms' Collection
var roomsArray = [
  Dinning,
  Conservatory,
  Kitchen,
  Study,
  Library,
  Billiard,
  Lounge,
  Ballroom,
  Hall,
  Spa,
  Living,
  Observatory,
  Theater,
  Guest,
  Patio
];

// Weapons Collection
var weaponsArray = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophyname,
  pistol
];

let randomSelector = array => {
  if (array == undefined) {
    return " ";
  }
  const elements = array.length;
  const randomIndex = Math.floor(Math.random() * elements);
  return array[randomIndex];
};

let misteryEnvelope;

let pickMistery = () => {
  const killer = randomSelector(charactersArray);
  const weapon = randomSelector(weaponsArray);
  const room = randomSelector(roomsArray);
  return [killer, weapon, room];
};

let revealMistery = misteryEnvelope => {
  return `${misteryEnvelope[0].first_name} ${
    misteryEnvelope[0].last_name
  } killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${
    misteryEnvelope[2].name
  }!!!!`;
};
