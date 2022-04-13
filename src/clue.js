/* Clue has three different card types: suspects, rooms, and weapons.

Let's create an array for every card type. These arrays should be named suspectsArray, weaponsArray, roomsArray. Each array will contain objects, 
where each object represents one card.

All of the information you need about suspects, rooms, and weapons can be found on the DATA.md file.

Suggestion: Copy this data into the clue.js file and model it into objects nested inside your cards arrays. This is a great chance for you to experiment with IDE shortcuts, multiple-line selection, find and replace, and other great features that VS Code provides.

 */

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
    color: "green"
  },
    {
    lastName: "Orchid",
    occupation: "Scientist",
    firstName: "Doctor",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
  },
    {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
  },
    {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"
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
    color: "yellow"
}
  ];

// Rooms Array

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
/* At the beginning of the game, players shuffle each of the card stacks to create a combination of suspect, weapon and room. 
This will be the mystery to solve. */

/* Declare a function named selectRandom to randomly select one element from a card stack. 
The function should expect an array as an argument, and should return a random element from the array. */

function selectRandom(array) {
  let randomArray= [];
  
  randomArray.push(array[Math.floor( Math.random() * array.length)]);

  return randomArray[0];
}

console.log(selectRandom (suspectsArray))


/* Declare a function named pickMystery that takes no arguments and returns an object with three properties: 
suspect, weapon and room, each holding as a value a card of that specific type. 
You can get a random card of each type by calling selectRandom on each card stack. */


function pickMystery() {
  const suspicion= {};

  suspicion.suspect = selectRandom(suspectsArray);
  suspicion.weapon = selectRandom(weaponsArray);
  suspicion.room = selectRandom(roomsArray);

  return suspicion;
}

console.log(pickMystery())




// ITERATION 3
/* At last, we are ready to reveal the mystery.

Declare a function named revealMystery that receives an envelope object 
(with the shape of the object returned by pickMystery) as the single argument,
 and returns a reveal message in the following format:

<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>! */

function revealMystery(murder) {

  return `${murder.suspect.firstName} ${murder.suspect.lastName} killed Mr. Boddy using the ${murder.weapon.name} in the ${murder.room.name}!`
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
