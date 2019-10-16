/* Characters */
function Character(
  firstName,
  lastName,
  color,
  description,
  age,
  image,
  occupation
) {
  this.first_name = firstName;
  this.last_name = lastName;
  this.color = color;
  this.description = description;
  this.age = age;
  this.image = image;
  this.occupation = occupation;
}

const mrGreen = new Character(
  "Jacob",
  "Green",
  "green",
  "He has a lot of connections",
  45,
  "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  "Entrepreneur"
);

const drOrchid = new Character(
  "Doctor",
  "Orchid",
  "white",
  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  26,
  "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  "Scientist"
);

const profPlum = new Character(
  "Victor",
  "Plum",
  "purple",
  "Billionaire video game designer",
  22,
  "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
  "Designer"
);

const missScarlet = new Character(
  "Kasandra",
  "Scarlet",
  "red",
  "She is a list-A movie star with a dark past",
  31,
  "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
  "Actor"
);

const mrsPeacock = new Character(
  "Eleanor",
  "Peacock",
  "blue",
  "She is from a wealthy family and uses her status and money to earn popularity",
  36,
  "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  "Socialité"
);

const mrMustard = new Character(
  "Jack",
  "Mustard",
  "yellow",
  "He is a former football player who tries to get by on his former glory",
  62,
  "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
  "Retired Football player"
);

/* Weapons */
function Weapon(name, weight) {
  this.name = name;
  this.weight = weight;
}
const rope = new Weapon("rope", 0);
const knife = new Weapon("knife", 8);
const candlestick = new Weapon("candlestick", 2);
const dumbbell = new Weapon("dumbbell", 30);
const poison = new Weapon("poison", 2);
const axe = new Weapon("axe", 15);
const bat = new Weapon("bat", 13);
const trophy = new Weapon("trophy", 25);
const pistol = new Weapon("pistol", 20);

/* Rooms */

const room_1 = "Dining Room";
const room_2 = "Conservatory";
const room_3 = "Kitchen";
const room_4 = "Study";
const room_5 = "Library";
const room_6 = "Billiard Room";
const room_7 = "Lounge";
const room_8 = "Ballroom";
const room_9 = "Hall";
const room_10 = "Spa";
const room_11 = "Living Room";
const room_12 = "Observatory";
const room_13 = "Theater";
const room_14 = "Guest House";
const room_15 = "Patio";

// Characters Collection
const charactersArray = [];
charactersArray.push(
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
);

// Rooms Collection
const roomsArray = [
  room_1,
  room_2,
  room_3,
  room_4,
  room_5,
  room_6,
  room_7,
  room_8,
  room_9,
  room_10,
  room_11,
  room_12,
  room_13,
  room_14,
  room_15
];

// Weapons Collection
const weaponsArray = [];
weaponsArray.push(
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  bat,
  trophy,
  pistol
);

function randomSelector(array) {
  if (!array.length) {
    return undefined;
  }
  return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
  let mystery = {};
  const pickedCards = {
    suspect: charactersArray,
    weapon: weaponsArray,
    room: roomsArray
  };

  for (const item in pickedCards) {
    createProperty(mystery, item, randomSelector(pickedCards[item]));
  }

  return mystery;
}

function createProperty(array, property, value) {
  return (array[property] = value);
}

let mysteryEnvelope = pickMystery();

function revealMystery(mysteryEnvelope) {
  let suspect = mysteryEnvelope.suspect;
  let weapon = mysteryEnvelope.weapon.name;
  let room = mysteryEnvelope.room.name;

  return `${suspect["first_name"]} ${
    suspect["last_name"]
  } killed Mr. Boddy using the ${weapon} in the ${room}!!!!`;
}
