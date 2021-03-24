// ITERATION 1
// Suspects Collection
let mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  occupation: "Entrepreneur",
  age: 45,
  description: "He has a lot of connections",
  image:
    "https://carboncostume.com/wordpress/wp-content/uploads/2017/10/mrgreen3.jpg",
  color: "green ",
};
let drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  occupation: "Scientist",
  age: 26,
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  image:
    "https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_2000,x_0,y_50/v1560965041/shape/mentalfloss/586055-hasbro.jpg?itok=x4QQWTxa",
  color: "white",
};
let profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  occupation: "Designer",
  age: 22,
  description: "Billionaire video game designer",
  image:
    "https://vignette.wikia.nocookie.net/cluedo/images/a/a4/2016C6.jpg/revision/latest?cb=20200927103539",
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
  image:
    "https://vignette.wikia.nocookie.net/cluedo/images/b/b0/2016C5.jpg/revision/latest?cb=20200927103538",
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
const suspectsArray = [
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard,
];
// Rooms Collection
const diningRoom = {
  name: "Dining Room",
};
const conservatory = {
  name: "Conservatory",
};
const kitchen = {
  name: "Kitchen",
};
const study = {
  name: "Study",
};
const library = {
  name: "Library",
};
const billiardRoom = {
  name: "Billiard Room",
};
const lounge = {
  name: "Lounge",
};
const ballroom = {
  name: "Ballroom",
};
const hall = {
  name: "Hall",
};
const spa = {
  name: "Spa",
};
const livingRoom = {
  name: "Living Room",
};
const observatory = {
  name: "Observatory",
};
const theater = {
  name: "Theater",
};
const guestHouse = {
  name: "Guest House",
};
const patio = {
  name: "Patio",
};
const roomsArray = [
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
  patio,
];
// Weapons Collection
const rope = {
  name: "rope",
  weigth: 10,
};
const knife = {
  name: "knife",
  weigth: 8,
};
const candlestick = {
  name: "candlestick",
  weigth: 2,
};
const dumbbell = {
  name: "dumbbell",
  weigth: 30,
};
const poison = {
  name: "poison",
  weigth: 2,
};
const axe = {
  name: "axe",
  weigth: 15,
};
const bat = {
  name: "bat",
  weigth: 13,
};
const trophy = {
  name: "trophy",
  weigth: 25,
};
const pistol = {
  name: "pistol",
  weigth: 20,
};
const weaponsArray = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol,
];
//ITERATION 2
function selectRandom(arr) {
  let random = arr[Math.floor(Math.random() * arr.length)];
  return random;
}

function pickMystery() {
  let mysteryCard = {};
  let suspect = selectRandom(suspectsArray);
  let room = selectRandom(roomsArray);
  let weapon = selectRandom(weaponsArray);
  mysteryCard.suspect = suspect;
  mysteryCard.room = room;
  mysteryCard.weapon = weapon;
  return mysteryCard;
}
pickMystery();
// ITERATION 3
function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}
revealMystery(mysteryCard);
