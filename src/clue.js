// ITERATION 1

// Array
const suspectsArray = [

  {
    name: "mrGreen",
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: "He has a lot of connections",
    image: " https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"

  },

  {
    name: "drOrchid",
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: "PhD in plant toxicology. ",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "white"

  },

  {
    name: "profPlum",
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: "Billionaire video game designer",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "purple"

  },

  {
    name: "missScarlet",
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "red"

  },

  {
    name: "mrsPeacock",
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "blue"

  },

  {
    name: "mrMustard",
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "yellow"

  }
]

// Weapons Array
const weaponsArray = [

  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "dumbbell", weight: 30 },
  { name: "candlestick", weight: 2 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "trophy", weight: 25 },
  { name: "bat", weight: 13 },
  { name: "pistol", weight: 20 }

]

// Rooms Array
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
  { name: "Patio" }

]

// ITERATION 2
function selectRandom(arr) {

  if (arr.length === 0) return undefined;
  let selectArr = Math.floor(Math.random() * arr.length)
  return arr[selectArr]
}

function pickMystery() {

  let suspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)]
  let weapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)]
  let room = roomsArray[Math.floor(Math.random() * roomsArray.length)]

  return { suspect, weapon, room }

}

// ITERATION 3
function revealMystery(pickMystery) {

  return `${pickMystery.suspect.firstName} ${pickMystery.suspect.lastName} killed Mr. Boddy using the ${pickMystery.weapon.name} in the ${pickMystery.room.name}!`

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
