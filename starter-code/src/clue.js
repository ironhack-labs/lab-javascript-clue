// Characters
const mrGreen = {
"id": "mrGreen",
"first_name": "Jacob",
"last_name": "Green",
"color": "green",
"description": "He has a lot of connections",
"age": 45,
"image": "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
"occupation": "Entrepreneur",
};

const drOrchid = {
"id": "drOrchid",
"first_name": "Doctor",
"last_name": "Orchid",
"color": "white",
"description": "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
"age": 26,
"image": "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
"occupation": "Scientist",
};

const profPlum = {
"id": "profPlum",
"first_name": "Victor",
"last_name": "Plum",
"color": "purple",
"description": "Billionaire video game designer",
"age": 22,
"image": "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
"occupation": "Designer",
};

const missScarlet = {
"id": "missScarlet",
"first_name": "Kasandra",
"last_name": "Scarlet",
"color": "red",
"description": "She is an A-list movie star with a dark past",
"age": 31,
"image": "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
"occupation": "Actor",
};

const mrsPeacock = {
"id": "mrsPeacock",
"first_name": "Eleanor",
"last_name": "Peacock",
"color": "blue",
"description": "She is from a wealthy family and uses her status and money to earn popularity",
"age": 36,
"image": "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
"occupation": "Socialité",
};

const mrMustard = {
"id": "mrMustard",
"first_name": "Jack",
"last_name": "Mustard",
"color": "yellow",
"description": "He is a former football player who tries to get by on his former glory",
"age": 62,
"image": "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
"occupation": "Retired Football player",
};
// Weapons
const weaponsArray = [
{"name": "rope", "weight": 10 },
{"name": "knife", "weight": 8 },
{"name": "candlestick", "weight": 2 },
{"name": "dumbbell", "weight": 30 },
{"name": "poison", "weight": 2 },
{"name": "axe", "weight": 15 },
{"name": "bat", "weight": 13 },
{"name": "trophy", "weight": 25 },
{"name": "pistol", "weight": 20 },
];
// Rooms
const roomsArray = [
  { "name": "Dining Room" },
  { "name": "Conservatory" },
  { "name": "Kitchen" },
  { "name": "Study" },
  { "name": "Library" },
  { "name": "Billiard Room" },
  { "name": "Lounge" },
  { "name": "Ballroom" },
  { "name": "Hall" },
  { "name": "Spa" },
  { "name": "Living Room" },
  { "name": "Observatory" },
  { "name": "Theater" },
  { "name": "Guest House" },
  { "name": "Patio" },
];

// Characters Collection
const charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

function randomSelector(array) {
  let randomValue = Math.floor(Math.random() * array.length);
  return array[randomValue];
}

function pickMystery () {
  let characterPick = randomSelector(charactersArray);
  let weaponsPick = randomSelector(weaponsArray);
  let roomPick = randomSelector(roomsArray);

  let mysteryEnvelope = {"suspect": characterPick, "weapon": weaponsPick, "room": roomPick};
  return mysteryEnvelope;
}

function revealMystery (mysteryEnvelope) {
  let firstName = mysteryEnvelope.suspect.first_name;
  let lastName = mysteryEnvelope.suspect.last_name; 
  let weaponUsed = mysteryEnvelope.weapon.name;
  let roomUsed = mysteryEnvelope.room.name;
  return(firstName + " " + lastName + " killed Mr. Boddy using the " + weaponUsed + " in the " + roomUsed +"!!!!");
}