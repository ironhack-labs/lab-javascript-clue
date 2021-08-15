// ITERATION 1

// Suspects Array



const mrGreen = 
 
 {
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation: 'Entrepreneur',
  }
  
  const drOrchid = {
    firstName: 'Doctor',
    lastName: 'Orchid',
    color: 'white',
    description:  `PhD in plant toxicology. Adopted daughter of Mr. Bo'dy`,
    age: 26,
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    ocupation: "Scientist",
  }
  
  const profPlum = {
    firstName: 'Victor', 
    lastName: 'Plum',
    color: 'purple',
    description: `Billionare video game desi'ner`,
    age: 22,
    image:'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation: 'Desiger',
  }
  
  const missScarlet = {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    color: 'red',
    description: `She is an A-list movie star' with a dark past`,
    age: 31,
    image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation: 'Actor',
  }
  
  const mrsPeacock = {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    color: 'blue',
    description: `She is from a wealthy famil'y and uses her status and money to earn popularity`,
    age: 36,
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation: 'Socialité',
    }
  
  const mrMustard = {
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: `He is a former football pla'yer who tries to get by on his former glory`,
    age: 62,
    image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation: 'Retired Football player'
  }


  // Weapons
  const weapons = [
    {name: 'rope', weight: 10},
    {name: 'knife', weight: 8},
    {name: 'candlestick', weight: 2},
    {name: 'dumbbell', weight: 30},
    {name: 'poison', weight: 2},
    {name: 'axe', weight: 15},
    {name: 'bat', weight: 13},
    {name: 'trophy', weight: 25},
    {name: 'pistol', weight: 20},
  ]
  
  // Rooms
  const rooms = [
    {name: 'Dinning Room'},
    {name: 'Conservatory'},
    {name: 'Kitchen'},
    {name: 'Study'},
    {name: 'Library'},
    {name: 'Billiard Room'},
    {name: 'Lounge'},
    {name: 'Ballroom'},
    {name: 'Hall'},
    {name: 'Spa'},
    {name: 'Living Room'},
    {name: 'Observatory'},
    {name: 'Theater'},
    {name: 'Guest House'},
    {name: 'Patio'}
  ]

  let suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard]
  let roomsArray = rooms
  let weaponsArray = weapons



// ITERATION 2

function selectRandom(array) 
{ let random = Math.floor (Math.random() * array.length)
  return array [random]

}

function pickMystery()  
{ let cardMistery= []; 
  let Suspects= selectRandom (suspectsArray);
  let weapons= selectRandom (weaponsArray);
  let rooms= selectRandom (roomsArray);

  cardMistery.push(suspects, weapons, rooms); 

    return cardMistery;
  }

    





// ITERATION 3

function revealMystery(array) {
let suspects = array [0];
let weapons = array [1];
let rooms = array [2];
return `${suspects.firstName} Killed Mr Boddy using the ${weapon.name} in the ${room.name}!!!!`;

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
