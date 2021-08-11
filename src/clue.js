// ITERATION 1
//Suspects 

let mrGreen = {
  firstName: "Jacob" ,
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
  image: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_2000,x_0,y_50/v1560965041/shape/mentalfloss/586055-hasbro.jpg?itok=x4QQWTxa",
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
  occupation: "SocialitÃ©",
  age: 36,
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  image: "https://vignette.wikia.nocookie.net/cluedo/images/b/b0/2016C5.jpg/revision/latest?cb=20200927103538",
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

let suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// ### Weapons

let rope = {
  name: 'rope',
  weight: 10,
};

let knife = {
  name: 'knife',
  weight: 8,
};

let candlestick = {
  name: 'candlestick',
  weight: 2,
};

let dumbbell = {
  name: 'dumbbell',
  weight: 30,
};

let poison = {
  name: 'poison',
  weight: 2,
};

let axe = {
  name: 'axe',
  weight: 15,
};

let bat = {
  name: 'bat',
  weight: 13,
};

let trophy = {
  name: 'trophy',
  weight: 25,
};

let pistol = {
  name: 'pistol',
  weight: 20,
};

let weaponsArray = [pistol, trophy, bat, axe, poison, dumbbell, candlestick, knife, rope];


// ### Rooms

let diningRoom = {
  name: "Dining Room",
};
let conservatory = {
  name: "Conservatory",
};
let kitchen = {
  name: "Kitchen",
};
let study = {
  name: "Study",
};
let library = {
  name: "Library",
};
let billiardRoom = {
  name: "Billiard Room",
};
let lounge = {
  name: "Lounge",
};
let ballroom = {
  name: "Ballroom",
};
let hall = {
  name: "Hall",
};
let spa = {
  name: "Spa",
};
let livingRoom = {
  name: "Living Room",
};
let observatory = {
  name: "Observatory",
};
let theater = {
  name: "Theater",
};
let guestHouse = {
  name: "Guest House",
};
let patio = {
  name: "Patio",
};

let roomsArray = [patio, guestHouse, theater, observatory, livingRoom, spa, ballroom, hall, lounge, billiardRoom, library, study, kitchen, conservatory, diningRoom];

// ITERATION 2

function selectRandom(array) {

  const randomElement = array[Math.floor(Math.random() * array.length)]
  
  return randomElement;

}

function pickMystery() {

  let varSuspect = selectRandom(suspectsArray);
  let varWeapon = selectRandom(weaponsArray);
  let varRoom = selectRandom(roomsArray) ;

  let randomCard = { 
    suspect: varSuspect,
    weapon: varWeapon,
    room: varRoom
  }
  return randomCard
}

// ITERATION 3

function revealMystery(randomCard) {
 
  return `${randomCard.suspect.firstName} ${randomCard.suspect.lastName} killed Mr. Boddy using the ${randomCard.weapon.name} in the ${randomCard.room.name}!`

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
