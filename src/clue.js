// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    name: "mrGreen",
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
    name: "drOrchid",
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
  },

  {
    name: "profPlum",
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
    name: "missScarlet",
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  },

  {
    name: "mrsPeacock",
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "Wealthy family, uses status and money for popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  },

  {
    name: "mrMustard",
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "Former football player trying to get by on former glory",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  },
];

// Rooms Array

const roomsArray = [
  "Dining Room",
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
  "Patio",
];

// Weapons Array

const weaponsArray = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 },
];

console.log("Suspects:", suspectsArray);
console.log("Weapons:", weaponsArray);
console.log("Rooms:", roomsArray);

// ITERATION 2

function selectRandom() {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function pickMystery() {
  const randomSuspect = selectRandom(suspectsArray);
  const randomWeapon = selectRandom(weaponsArray);
  const randomRoom = selectRandom(roomsArray);
}

return {
  suspect: randomSuspect,
  weapon: randomWeapon,
  room: randomRoom,
};

const mystery = pickMystery();
console.log("Mystery:", mystery);

// ITERATION 3

function revealMystery() {
  function revealMystery(envelope) {
    const { suspect, weapon, room } = envelope;

    const firstName = suspect.firstName;
    const lastName = suspect.lastName;
    const weaponName = weapon.name;
    const roomName = room;

    const revealMessage = `${firstName} ${lastName} killed Mr. Boddy using the ${weaponName} in the ${roomName}!`;

    return revealMessage;
  }

  const revealMessage = revealMystery(mystery);
  console.log(revealMessage);
}
