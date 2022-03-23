// ITERATION 1

// Suspects Array


const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
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
    image:     "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
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

// Rooms Array

const roomsArray = [
  {name: "Dining Room"}, 
  {name: "Conservatory"},
  {name: "Kitchen"},
  {name: "Study"},
  {name: "Librar"}, 
  {name: "Billiard Room"},
  {name: "Lounge"},
  {name: "Ballroom"},
  {name: "Hall"},
  {name: "Spa"},
  {name: "Living Room"},
  {name: "Observatory"},
  {name: "Theater"},
  {name: "Guest House"},
  {name: "Patio"}, 
   ];

// Weapons Array

const weaponsArray = [
  {name: "rope", weight: 10},
  {name: "knife", weight: 8},
  {name: "candlestick", weight: 2},
  {name: "dumbbell", weight: 30}, 
  {name: "poison", weight: 2}, 
  {name: "axe", weight: 15}, 
  {name: "bat", weight: 13},
  {name: "trophy", weight: 25},
  {name: "pistol", weight: 20}
];


// ITERATION 2

function selectRandom(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length)
  return arr[randomNumber];
}

// function pickMystery() {
//   const cards = [];  OUR SOLUTION (DIDNT WORK)
// for (let s = 0; s < suspectsArray.length; s++) {
//   for (let r = 0; r < roomsArray.length; r++) {
//     for (let w = 0; w < weaponsArray.length; w++) {
//     const suspect = suspectsArray[s];
//     const room = roomsArray[r];
//     const weapon = weaponsArray[w];
//     cards.push({ suspect, room, weapon });
//   }
// }
//   }
//   return cards
//   }
function pickMystery() {
  let suspect = selectRandom(suspectsArray);
  let weapon = selectRandom(weaponsArray);
  let room = selectRandom(roomsArray);
  return {
    suspect: suspect,
    weapon: weapon,
    room: room
  }
  //we need object with suspect, room and weapon
}

// ITERATION 3

function revealMystery() {}



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