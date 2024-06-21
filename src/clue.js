// ITERATION 1

// Suspects Array

const suspectsArray = [];

// Rooms Array

const roomsArray = [];

// Weapons Array

const weaponsArray = [];

//suspests
let mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  occupation: "Entrepreneur",
  age: 45,
  description: "He has a lot of connections",
  image:
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  color: "green",
};

let drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  occupation: "Scientist",
  age: 26,
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  color: "white",
};

let profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  occupation: "Designer",
  age: 22,
  description: "Billionaire video game designer",
  image:
    "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
  color: "purple",
};

let missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  occupation: "Actor",
  age: 31,
  description: "She is an A-list movie star with a dark past",
  image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
  color: "red",
};

let mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  occupation: "Socialité",
  age: 36,
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  color: "blue",
};

let mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  occupation: "Retired Football player",
  age: 62,
  description:
    "He is a former football player who tries to get by on his former glory",
  image:
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
  color: "yellow",
};

suspectsArray.push(
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
);

//weapons
let rope = {
  name: "rope",
  weight: 10,
};

let knife = {
  name: "knife",
  weight: 8,
};

let candlestick = {
  name: "candlestick",
  weight: 2,
};

let dumbbell = {
  name: "dumbbell",
  weight: 30,
};

let poison = {
  name: "poison",
  weight: 2,
};

let axe = {
  name: "axe",
  weight: 15,
};

let bat = {
  name: "bat",
  weight: 13,
};

let trophy = {
  name: "trophy",
  weight: 25,
};

let pistol = {
  name: "pistol",
  weight: 20,
};

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

//rooms
let diningRoom = { name: "Dining Room" };
let conservatory = { name: "Conservatory" };
let kitchen = { name: "Kitchen" };
let study = { name: "Study" };
let library = { name: "Library" };
let billiardRoom = { name: "Billiard Room" };
let lounge = { name: "Lounge" };
let ballroom = { name: "Ballroom" };
let hall = { name: "Hall" };
let spa = { name: "Spa" };
let livingRoom = { name: "Living Room" };
let observatory = { name: "Observatory" };
let theater = { name: "Theater" };
let guestHouse = { name: "Guest House" };
let patio = { name: "Patio" };

roomsArray.push(
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
);

// ITERATION 2

function selectRandom(array) {
  if (!array.length) {
    return undefined;
  }
  let randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}
function pickMystery() {
  const mystery = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };

  return mystery;
}

// ITERATION 3
console.log(pickMystery);

function revealMystery(pickMystery) {
  let text =
    pickMystery.suspect.firstName +
    " " +
    pickMystery.suspect.lastName +
    " killed Mr. Boddy using the " +
    pickMystery.weapon.name +
    " in the " +
    pickMystery.room.name +
    "!";

  return text;
}
console.log(revealMystery(pickMystery()));
