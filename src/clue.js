// ITERATION 1
// create an array for every card type, that is going contain the objects representing each card. These arrays should be named suspectsArray, weaponsArray, roomsArray.

// Suspects Collection
const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
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
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
  },

  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  },
    
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  },
  
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  }
];

// Rooms Collection
const roomsArray = [
  {name: "Dining Room"},
  {name: "Conservatory"},
  {name: "Kitchen"},
  {name: "Study"},
  {name: "Library"},
  {name: "Billiard Room"},
  {name: "Lounge"},
  {name: "Ballroom"},
  {name: "Hall"},
  {name: "Spa"},
  {name: "Living Room"},
  {name: "Observatory"},
  {name: "Theater"},
  {name: "Guest House"},
  {name: "Patio"}
];

// Weapons Collection
const weaponsArray = [
  {
    name: "rope",
    weight: 10
  },

  {
    name: "knife",
    weight: 8
  },

  {
    name: "candlestick",
    weight: 2
  },

  {
    name: "dumbbell",
    weight: 30
  },

  {
    name: "poison",
    weight: 2
  },

  {
    name: "axe",
    weight: 15
  },

  {
    name: "bat",
    weight: 13
  },

  {
    name: "trophy",
    weight: 25
  },

  {
    name: "pistol",
    weight: 20
  }
];

// ITERATION 2 Random selector
// Declare a function named selectRandom to randomly select one element from a card stack. The function should expect an array as an argument, and should return a random element from the array.

// Iteration 2: Create the mystery
// At the beginning of the game, players shuffle each of the card stacks to create a combination of suspect, weapon and room. This will be the mystery to solve.

// Create the mystery
// Declare a function named pickMystery that takes no arguments and returns an object with three properties: suspect, weapon and room, each holding as a value a card of that specific type. You can get a random card of each type by calling selectRandom on each card stack.
function selectRandom(array) {
  const result = array[Math.floor(Math.random() * array.length)]

  return result
}

console.log(suspectsArray)

function pickMystery() {

  const suspect = selectRandom(suspectsArray)
  const weapon = selectRandom(weaponsArray)
  const room = selectRandom(roomsArray)

  return { suspect, room, weapon }
}

// ITERATION 3 Reveal the mystery
// At last, we are ready to reveal the mystery.

// Declare a function named revealMystery that receives an envelope object (such as the one returned by pickMystery) as the single argument, and returns a reveal message in the following format:

// <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!
const revealMystery = (mystery) => {

return `${
    mystery.suspect.firstName} ${mystery.suspect.lastName} 
    killed Mr. Boddy using the ${mystery.weapon.name} 
    in the ${mystery.room.name}!
  `
}