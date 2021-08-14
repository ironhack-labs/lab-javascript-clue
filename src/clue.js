// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
      firstName: "Jacob",
      lastName: "Green",
      occupation: "Entrepreneur",
      age: 45,
      description: "He has a lot of connections",
      image: "https://carboncostume.com/wordpress/wp-content/uploads/2017/10/mrgreen3.jpg",
      color: "green ",
  },

  {
      firstName: "Doctor",
      lastName: "Orchid",
      occupation: "Scientist",
      age: 26,
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      image: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_2000,x_0,y_50/v1560965041/shape/mentalfloss/586055-hasbro.jpg?itok=x4QQWTxa",
      color: "white",
  },

  profPlum = {
      firstName: "Victor",
      lastName: "Plum",
      occupation: "Designer",
      age: 22,
      description: "Billionaire video game designer",
      image: "https://vignette.wikia.nocookie.net/cluedo/images/a/a4/2016C6.jpg/revision/latest?cb=20200927103539",
      color: "purple",
  },

  missScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  },

  mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description:
        "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://vignette.wikia.nocookie.net/cluedo/images/b/b0/2016C5.jpg/revision/latest?cb=20200927103538",
    color: "blue",
  },

  mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
        "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  }
];

// Rooms Array

const roomsArray = [
  diningRoom = {
    name: "Dining Room",
  },
 conservatory = {
    name: "Conservatory",
  },
 kitchen = {
    name: "Kitchen",
  },
 study = {
    name: "Study",
  },
 library = {
    name: "Library",
  },
 billiardRoom = {
    name: "Billiard Room",
  },
 lounge = {
    name: "Lounge",
  },
 ballroom = {
    name: "Ballroom",
  },
 hall = {
    name: "Hall",
  },
 spa = {
    name: "Spa",
  },
 livingRoom = {
    name: "Living Room",
  },
 observatory = {
    name: "Observatory",
  },
 theater = {
    name: "Theater",
  },
 guestHouse = {
    name: "Guest House",
  },
 patio = {
    name: "Patio"
 }
  ];

// Weapons Array

const weaponsArray = [
  rope = {
    name: "rope",
    weight: 10,
  },

  knife = {
      name: "knife",
      weight: 8,
  },

  candlestick = {
      name: "candlestick",
      weight: 2,
  },

  dumbbell = {
      name: "dumbbell",
      weight: 30,
  },

  poison = {
      name: "poison",
      weight: 2,
  },

  axe = {
      name: "axe",
      weight: 15,
  },

  bat = {
      name: "bat",
      weight: 13,
  },

  trophy = {
      name: "trophy",
      weight: 25,
  },

  pistol = {
      name: "pistol",
      weight: 20,
  }
];


// ITERATION 2

function selectRandom(arr) {
  if (arr !== undefined) {
    const randomIndex =   Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
  }
}

function pickMystery() {

  const room = selectRandom(roomsArray);
  const weapon = selectRandom(weaponsArray);
  const suspect = selectRandom(suspectsArray);

  return {suspect, weapon, room}
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
