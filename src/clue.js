// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    mrGreen: {
      firstName: 'Jacob',
      lastName: 'Green',
      occupation: 'Entrepreneur',
      age: 45,
      description: 'He has a lot of connections',
      imgUrl:
        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
      color: 'green'
    }
  },
  {
    drOrchid: {
      firstName: 'Doctor',
      lastName: 'Orchid',
      occupation: 'Scientist',
      age: 26,
      description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
      imgUrl: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
      color: 'white'
    }
  },
  {
    profPlum: {
      firstName: 'Victor',
      lastName: 'Plum',
      occupation: 'Designer',
      age: 22,
      description: 'Billionaire video game designer',
      imgUrl:
        'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
      color: 'purple'
    }
  },

  {
    missScarlet: {
      firstName: 'Kasandra',
      lastName: 'Scarlet',
      occupation: 'Actor',
      age: 31,
      description: 'She is an A-list movie star with a dark past',
      imgUrl: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
      color: 'red'
    }
  },

  {
    mrsPeacock: {
      firstName: 'Eleanor',
      lastName: 'Peacock',
      occupation: 'Socialité',
      age: 36,
      description:
        'She is from a wealthy family and uses her status and money to earn popularity',
      imgUrl: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
      color: 'blue'
    }
  },
  {
    mrMustard: {
      firstName: 'Jack',
      lastName: 'Mustard',
      occupation: 'Retired Football player',
      age: 62,
      description:
        'He is a former football player who tries to get by on his former glory',
      imgUrl:
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
      color: 'yellow'
    }
  }
];

// Rooms Array

const roomsArray = [
  {
    name: 'Dining Room'
  },
  {
    name: 'Conservatory'
  },
  {
    name: 'Kitchen'
  },
  {
    name: 'Study'
  },
  {
    name: 'Billiard Room'
  },
  {
    name: 'Lounge'
  },
  {
    name: 'Ballroom'
  },
  {
    name: 'Hall'
  },
  {
    name: 'Spa'
  },
  {
    name: 'Guest House'
  },
  {
    name: 'Living Room'
  },
  {
    name: 'Observatory'
  },
  {
    name: 'Theater'
  },
  {
    name: 'Patio'
  }
];

// Weapons Array

const weaponsArray = [
  {
    name: 'Rope',
    weight: 10
  },
  {
    name: 'Knifee',
    weight: 8
  },
  {
    name: 'Candlestick',
    weight: 2
  },
  {
    name: 'Dumbbell',
    weight: 30
  },
  {
    name: 'Poison',
    weight: 2
  },
  {
    name: 'Axe',
    weight: 15
  },
  {
    name: 'Bat',
    weight: 13
  },
  {
    name: 'Trophy',
    weight: 25
  },
  {
    name: 'Pistol',
    weight: 20
  }
];

// ITERATION 2

function selectRandom(cards) {
  let randomIndex = Math.floor(Math.random() * (cards.length - 1));
  // console.log("returning card number" + randomIndex);
  return cards[randomIndex];
}

// function getThreeCards(deck1, deck2, deck3) {
//  let cardsOne = selectRandom(deck1);
//  let cardsTwo = selectRandom(deck2);
//  let cardsThree = selectRandom(deck3);

// return 'Card one:' + cardsOne + 'Card two:' + cardsTwo + 'Card three:' + cardsThree; }

getThreeCards(weaponsArray);

function getThreeCards() {
  let weapon = selectRandom(weaponsArray);
  let killer = Object.keys(selectRandom(suspectsArray));

  let location = selectRandom(roomsArray);
  return { usedWeapon: weapon, usedKiller: killer, usedLocation: location };
}
// console.log(weapon, killer, location)

console.log(
  `The used weapon is: ${getThreeCards().usedWeapon.name} was used by ${
    getThreeCards().usedKiller
  } in ${getThreeCards().usedLocation.name}`
);

//---------------------------------------------

function selectRandom(cards) {
  let randomIndex = Math.floor(Math.random() * (array.length - 1));
  console.log(randomIndex);
}
selectRandom(weaponsArray);

// function pickMystery() {}

// let randomSuspect = suspectsArray[math.floor(math.random()* suspectsArray.length)];
// let randomWeapon = weaponsArray[math.floor(math.random()* weaponsArray.length)];
// let randomRoom = roomsArray[math.floor(math.random()* roomsArray.length)];
// // ITERATION 3

// function revealMystery() {}
// //
// // The following is required to make unit tests work.
// /* Environment setup. Do not modify the below code. */
// if (typeof module !== 'undefined') {
//   module.exports = {
//     suspectsArray,
//     roomsArray,
//     weaponsArray,
//     pickMystery,
//     revealMystery,
//     selectRandom
//   };
// }
