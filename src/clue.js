// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName : "Jacob",
    lastName : "Green",
    occupation: "Entrepreneur",
    age : 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
  },
  {
    firstName : "Doctor",
    lastName : "Orchid",
    occupation: "Scientist",
    age : 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "ttp://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
  },
  {
    firstName : "Victor",
    lastName : "Plum",
    occupation: "Designer",
    age : 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
  },
  {
    firstName : "Kasandra",
    lastName : "Scarlet",
    occupation: "Actor",
    age : 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"
  },
  {
    firstName : "Eleanor",
    lastName : "Peacock",
    occupation: "Socialité",
    age : 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue"
  },
  {
    firstName : "Jack",
    lastName : "Mustard",
    occupation: "Retired Football player",
    age : 62,
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


// ITERATION 2

function selectRandom(arr) {
  //Should return undefined if the array is empty
  if (arr.length === 0) {
    return undefined;
  }
  //Should return the element of a single value array
  else if (arr.length===1) {
    return arr[0];
  } 
  //should return a random element of the array
  else {
  /*
  Create the random aspect: 
  Math.Random() creates a random floating number between 0 and 1, but never 1 itself. 
  E.g. 0,123 ; 0.567; 0.999
  
  Make the random aspect fit the number of indexes:
  Math.random() * arr.length.
  E.g. Imagine arr.length is 5, it means 0.123 * 5 = 0.615; 0.999 * 5 = 4.995

  Make sure the result is always an integer within the valid index range of the array:
  Math.floor()
  E.g. Math.floor(0.615) === 0; Math.floor(4.995) === 4
  */
    const randomIndex = Math.floor(Math.random() * arr.length);
  //Should return an element of the array
    return arr[randomIndex];
  }
}

console.log(selectRandom(suspectsArray))

function pickMystery() {
  //Should return an object
  let mystery = {};

  //Should return a random object with 3 properties: `suspect`, `weapon`, `room`, with a value in each
  /*
  Can't use push() to add anything, as it's not an array. Instead, for adding to objects, we use the 'fullstop notation'. 
  E.g. object.key

  Instead of rewriting the code for getting a random index from an array, we can simply use the function from before, thus what you see
  */
  mystery.suspect = selectRandom(suspectsArray);
  mystery.weapon = selectRandom(weaponsArray);
  mystery.room = selectRandom(roomsArray);

  return mystery;
}

console.log(pickMystery())
// ITERATION 3

function revealMystery(envelope) {
  let message = `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
  return message;
}

// const envelope = {
//   suspect: { firstName: "Jacob", lastName: "Green" },
//   weapon: { name: "knife" },
//   room: { name: "Kitchen" },
// };

// console.log(revealMystery(envelope))