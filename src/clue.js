// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Laura',
    lastName: 'de Cos',
    occupation: 'ET',
    age: 26,
    description: "Love patitos, she's not trustworthy",
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'Black'
  },
  {
    firstName: 'Alvaro',
    lastName: 'Teran',
    occupation: 'Web-Developer student in Ironhack',
    age: 24,
    description: 'Good guy, play rugby',
    image:
      'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'Grenn'
  },
  {
    firstName: 'David',
    lastName: 'Villacañas',
    occupation: 'Web-Developer student in Ironhack',
    age: 24,
    description: 'Rayo Vallecano fan',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'Blue'
  },
  {
    firstName: 'Sara',
    lastName: 'Mansori',
    occupation: 'IT Professor',
    age: 25,
    description: 'Master of layout',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'Red'
  },
  {
    firstName: 'Barbara',
    lastName: 'Monzu',
    occupation: 'Web-Developer student in Ironhack',
    age: 26,
    description: 'Love sing and dance',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'Purple'
  },
  {
    firstName: 'Guille',
    lastName: 'Concepcion',
    occupation: 'IT Chief',
    age: 23,
    description: "Sara AND Laura's chief",
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'Yellow'
  }
];

const roomsArray = [
  {
    name: 'Classroom 1'
  },
  {
    name: 'Classroom 2'
  },
  {
    name: 'Classroom 3'
  },
  {
    name: 'Classroom 4'
  },
  {
    name: 'Classroom 5'
  },
  {
    name: 'Classroom 6'
  },
  {
    name: 'Classroom 7'
  },
  {
    name: 'Classroom 8'
  },
  {
    name: 'Classroom 9'
  },
  {
    name: 'Classroom 10'
  },
  {
    name: 'Classroom 11'
  },
  {
    name: 'Ladies Bathroom'
  },
  {
    name: 'Gentlenmen Bathroom'
  },
  {
    name: 'Social Room'
  },
  {
    name: 'Dining Room'
  }
];

const weaponsArray = [
  {
    name: 'Laptop',
    weight: 400
  },
  {
    name: 'Chair',
    weight: 200
  },
  {
    name: 'Projector',
    weight: 900
  },
  {
    name: 'Fork',
    weight: 40
  },
  {
    name: 'Knife',
    weight: 800
  },
  {
    name: 'Hammer',
    weight: 220
  },
  {
    name: 'Chainsaw',
    weight: 400
  },
  {
    name: 'Axe',
    weight: 275
  },
  {
    name: 'Gun',
    weight: 327
  }
];

// ITERATION 2

function selectRandom(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }
}

function pickMystery() {
  let mystery = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
  };
  return mystery;
}

// ITERATION 3

function revealMystery(object) {
  return `${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`;
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
