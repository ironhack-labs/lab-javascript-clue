// ITERATION 1

// Suspects Array

const suspectsArray = [{
  firstName: "Jacob",
  lastName: "Green",
  occupation: "enterpreneur",
  age: 45,
  description: "He has a lot of connections",
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  color: "green",

},{
  firstName: "Doctor",
  lastName: "Orchid",
  occupation: "Scientist",
  age: 26,
  description: "PhD in plant toxicology",
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  color: "white",
},{
  firstName: "Victor",
  lastName: "Plum",
  occupation: "Designer",
  age: 22,
  description: "Billionaire video game designe",
  image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
  color: "purple",
},{
  firstName: "Kasandra",
  lastName: "Scarlet",
  occupation: "Actor",
  age: 31,
  description: "She is an A-list movie star with a dark past",
  image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
  color: "red",
},{
  firstName: "Eleanor",
  lastName: "Peacock",
  occupation: "Socialité",
  age: 36,
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  color: "blue",
},{
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

const roomsArray = [{
  name : "Dining Room"
},{
  name : "Conservatory"
},{
  name : "Kitchen"
},{
  name : "Study"
},{
  name : "Library"
},{
  name : "Billiard Room"
},{
  name : "Lounge"
},{
  name : "Ballroom"
},{
  name : "Hall"
},{
  name : "Spa"
},{
  name : "Living Room"
},{
  name : "Observatory"
},{
  name : "Theater"
},{
  name : "Guest House"
},{
  name : "Patio"
}
];

// Weapons Array

const weaponsArray = [{
  name : "rope",
  weight : 10,
},{
  name : "knife",
  weight : 8,
},{
  name : "candlestick",
  weight : 2,
},{
  name : "dumbell",
  weight : 30,
},{
  name : "axe",
  weight : 15,
},{
  name : "bat",
  weight : 13,
},{
  name : "trophy",
  weight : 25,
},{
  name : "pistol",
  weight : 20,
},{
  name : "poison",
  weight : 2,
}
];


// ITERATION 2

function selectRandom(someArray) {
  return someArray[Math.floor(Math.random()*someArray.length)];
}

let mystery = {
  suspect : "",
  room : "",
  weapon : "",
}

function pickMystery(someArray1, someArray2, someArray3) {

  let suspect = selectRandom(someArray1);
  //console.log(suspect);
  
  let room = selectRandom(someArray2);
  //console.log(room);

  let weapon = selectRandom(someArray3);
  //console.log(weapon);

  

  mystery.suspect = suspect.firstName += suspect.lastName;
  mystery.room = room.name;
  mystery.weapon = weapon.name;

  console.log(mystery);
  return mystery;
}


// ITERATION 3

function revealMystery(someObject) {
  console.log(`${someObject.suspect} killed Mr.Boddy using the ${someObject.weapon} in the ${someObject.room}!`)
  return `${someObject.suspect} killed Mr.Boddy using the ${someObject.weapon} in the ${someObject.room}!`
}

pickMystery(suspectsArray,roomsArray,weaponsArray);
revealMystery(mystery);

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
