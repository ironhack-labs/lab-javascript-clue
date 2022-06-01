// ITERATION 1

// Suspects Array

const suspectsArray = [ {
  nickname: "mrGreen",
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"},
  
  {nickname:    "drOrchid",
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist"},
  
  {nickname:    "profPlum",
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"},
  
  {nickname:    "missScarlet",
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"},
  
  {nickname:    "mrsPeacock",
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"},
  
  {nickname:    "mrMustard",
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"}
  ];

// Rooms Array

const roomsArray = [ {
  room:"Dinning Room"},
  {room:"Conservatory"},
  {room:"Kitchen"},
  {room:"Study"},
  {room:"Library"},
  {room:"Billiard Room"},
  {room:"Lounge"},
  {room:"Ballroom"},
  {room:"Hall"},
  {room:"spa"},
  {room:"Living Room"},
  {room:"Observatory"},
  {room:"Theater"},
  {room:"Patio"}, 
  {room:"Guest House"},
];


// Weapons Array

const weaponsArray = [ {
   name: "rope", weight: 10},
  {name: "knife", weight: 8},
  {name: "candlestick", weight: 2},
  {name: "dumbbell" , weight: 30},
  {name: "poison", weight: 2},
  {name: "axe", weight: 15},
  {name: "bat", weight: 13},
  {name: "trophy", weight: 25},
  {name: "pistol", weight: 20},
];


// ITERATION 2

function selectRandom(cards) {
  let deck = cards.length;
  
  let someCard = Math.floor(Math.random() * deck);
  return cards[someCard];

  }

function pickMystery() {
 let obj = {}
obj.weapons = selectRandom(weaponsArray)
obj.suspect = selectRandom(suspectsArray)
obj.room = selectRandom(roomsArray)
return obj
}


// ITERATION 3

function revealMystery(envelope) {
tempw = envelope.weapons;
temps = envelope.suspect;
tempr = envelope.rooms;
return temps.first_name + temps.last_name;
}
console.log(revealMystery(pickMystery()))


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
