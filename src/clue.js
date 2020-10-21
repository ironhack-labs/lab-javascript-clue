// ITERATION 1

// Suspects Collection
const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image:
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
  },

  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  },
];

// Rooms Collection
const roomsArray = [
  { name: "Dining Room" },
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
  { name: "Patio" },
];

// Weapons Collection
const weaponsArray = [
  { name: "rope", weight: 10 },
  { name: "rope", weight: 8 },
  { name: "rope", weight: 2 },
  { name: "rope", weight: 30 },
  { name: "rope", weight: 2 },
  { name: "rope", weight: 15 },
  { name: "rope", weight: 13 },
  { name: "rope", weight: 25 },
  { name: "rope", weight: 20 },
];

// ITERATION 2

// Random selector

// Declare a function named selectRandom to randomly select one element from a card stack. The function should expect an array as an argument, and should return a random element from the array.

function selectRandom(array) {
  if (array.length === 0) return;

  let random = array[Math.floor(Math.random() * array.length)];
  return random;
}

// Create the mystery

// Declare a function named pickMystery that takes no arguments and returns an object with three properties: suspect, weapon and room, each holding as a value a card of that specific type. You can get a random card of each type by calling selectRandom on each card stack.

function pickMystery() {
  let randomSuspect = selectRandom(suspectsArray);
  let randomWeapon = selectRandom(weaponsArray);
  let randomRoom = selectRandom(roomsArray);

  let mysteryObj = {
    suspect: randomSuspect,
    weapon: randomWeapon,
    room: randomRoom,
  };
  console.log(mysteryObj);

  return mysteryObj;
}

// ITERATION 3

//At last, we are ready to reveal the mystery.

// Declare a function named revealMystery that receives an envelope object (such as the one returned by pickMystery) as the single argument, and returns a reveal message in the following format:
// <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!

function revealMystery(envelopeObj) {
  console.log("this is envelopeObj", envelopeObj);
  let message = `${envelopeObj.suspect.firstName} ${envelopeObj.suspect.lastName} killed Mr. Boddy using the ${envelopeObj.weapon.name} in the ${envelopeObj.room.name}!`;
  console.log("message", message);
  return message;
}

let mystery = pickMystery();
revealMystery(mystery);
