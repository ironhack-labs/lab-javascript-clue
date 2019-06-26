var charactersArray = [];

const mrGreen = {
  id: "mrGreen",
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image:
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

const drOrchid = {
  id: "drOrchid",
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation: "Scientist"
};

const profPlum = {
  id: "profPlum",
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};

const missScarlet = {
  id: "missScarlet",
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

const mrsPeacock = {
  id: "mrsPeacock",
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

const mrMustard = {
  id: "mrMustard",
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description:
    "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
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

// Weapons
var weaponsArray = [];

const rope = { name: "rope", weight: 10 };
const knife = { name: "knife", weight: 8 };
const candlestick = { name: "candlestick", weight: 2 };
const dumbbell = { name: "dumbbell", weight: 30 };
const poison = { name: "poison", weight: 2 };
const axe = { name: "axe", weight: 15 };
const bat = { name: "bat", weight: 13 };
const trophy = { name: "trophy", weight: 25 };
const pistol = { name: "pistol", weight: 20 };
weaponsArray.push(
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
);

const dining = { name: "Dinning Room" };
const conserv = { name: "Conservatory" };
const kitch = { name: "Kitchen" };
const study = { name: "Study" };
const lib = { name: "Library" };
const bill = { name: "Billiard Room" };
const lounge = { name: "Lounge" };
const ballr = { name: "Ballroom" };
const hall = { name: "Hall" };
const spa = { name: "Spa" };
const livin = { name: "Living Room" };
const obs = { name: "Observatory" };
const theater = { name: "Theater" };
const guest = { name: "Guest House" };
const patio = { name: "Patio" };

let roomsArray = [];

roomsArray.push(
  dining,
  conserv,
  kitch,
  study,
  lib,
  bill,
  lounge,
  ballr,
  hall,
  spa,
  livin,
  obs,
  theater,
  guest,
  patio
);
console.log(roomsArray);
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomSelector(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[getRandomInt(arr.length)];
  }
}

function pickMistery() {
  let misteryEnvelope = [];

  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsArray));
  misteryEnvelope.push(randomSelector(roomsArray));
  return misteryEnvelope;
}

function revealMistery(arr) {
  return `${arr[0].first_name} ${arr[0].last_name} killed Mr.Boddy using the ${
    arr[1].name
  } in the ${arr[2].name}!!!!`;
}

revealMistery(pickMistery());
