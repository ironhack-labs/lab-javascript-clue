// ITERATION 1

// Suspects Array

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  occupation: 'Entrepreneur',
  age: 45,
description: 'He has a lot of connections',
image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
color: 'green',
}

const drOrchid = {
  firstName: 'Doctor',
  lastName: 'Orchid',
  occupation: 'Scientist',
  age: '26',
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  color: 'white',
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  occupation: 'Designer',
  age: 22,
  description: 'Billionaire video game designer',
  image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
  color: 'purple',
}


const missScarlet = {
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  occupation: 'Actor',
  age: 31,
  description: 'She is an A-list movie star with a dark past',
  image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
  color: 'red',
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  occupation: 'Socialité',
  age: 36,
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  color: 'blue',
}

const mrMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  occupation: 'Retired Football player',
  age: 62,
  description: 'He is a former football player who tries to get by on his former glory',
  image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
  color: 'yellow',
}

// Rooms Array

const diningRoom = {
  name: 'Dining Room',
}
const Conservatory = {
  name: 'Conservatory',
}
const Kitchen = {
  name: 'Kitchen',
} 
const Study = {
  name: 'Study',
}

const Library = {
  name: 'Library',
}

const billiardRoom = {
  name: 'Billiard Room',
}
const Lounge = {
  name: 'Lounge',
}

const Ballroom = {
  name: 'Ballroom',
}

const Hall = {
  name: 'Hall',
}

const Spa = {
  name: 'Spa',
}

const livingRoom = {
  name: 'Living Room',
}

const Observatory = {
  name: 'Observatory',
}

const Theater = {
  name: 'Theater',
}

const guestHouse = {
  name: 'Guest House',
}

const Patio = {
  name: 'Patio'
}

// Weapons Array

const rope =
  {
   name: 'rope', 
   weight: 10
  }

  const knife =
  {
    name: 'knife',
    weight: 8
  }

  const candlestick =
  {
    name: 'candlestick',
    weight: 2
    }

    const dumbbell =
    {
  name: 'dumbbell',
    weight: 30
    }

    const poison =
    {
      name: 'poison',
      weight: 2
       }

       const axe =
       {    
         name: 'axe',
          weight: 15
          }

          const bat =
          {
            name: 'bat',
           weight: 13
          }

          const trophy =
            {
            name: 'trophy',
            weight: 25
            }

            const pistol =
            {name: 'pistol',
            weight: 20
             }

const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

const roomsArray = [diningRoom, Conservatory, Kitchen, Study, Library, billiardRoom, Lounge, Ballroom, Hall, Spa, livingRoom, Observatory, Theater, guestHouse, Patio
];

const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];



// ITERATION 2

//Declare a function named selectRandom to randomly select one element from a card stack. 
//The function should expect an array as an argument, and should return a random element from the array.

function selectRandom(cardDeckArray) {
  var randomCard = cardDeckArray[Math.floor(Math.random() * cardDeckArray.length)];
  return randomCard;
}

// // ITERATION 3

// #### Create the mystery

// Declare a function named `pickMystery` that takes no arguments and returns an object with three properties: _suspect_, _weapon_ and _room_, each holding as a value a card of that specific type. 
//You can get a random card of each type by calling `selectRandom` on each card stack.
function pickMystery() {
  const mystery = 
  {
    suspect: selectRandom (suspectsArray),
    weapon: selectRandom (weaponsArray),
    room: selectRandom (roomsArray),
  };
  return mystery;
}

// At last, we are ready to reveal the mystery.

// Declare a function named `revealMystery` that receives an _envelope_ `object` 
// (with the shape of the object returned by `pickMystery`) as the single argument, 
// and returns a reveal message in the following format:
// **\<FIRST NAME\> \<LAST NAME\> killed Mr. Boddy using the \<WEAPON\> in the \<ROOM\>!**

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}` 
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
