// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    nameCard: mrGreen,
    firstName: Jacob,
    lastName: Green,
    occupation: Entrepreneur,
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: green
  },
  {
    nameCard: drOrchid,
    firstName: Doctor,
    lastName: Orchid,
    occupation: Scientist,
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: white
  },
  {
    nameCard: profPlum,
    firstName: Victor,
    lastName: Plum,
    occupation: Designer,
    age: 22,
    description: "Billionaire video game designer",
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: purple
  },
  {
    nameCard: missScarlet,
    firstName: Kasandra,
    lastName: Scarlet,
    occupation: Actor,
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: red
  },
  {
    nameCard: mrsPeacock,   
    firstName: Eleanor,
    lastName: Peacock,
    occupation: Socialité,
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: blue
  },
  {
    nameCard: mrMustard,
    firstName: Jack,
    lastName: Mustard,
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: yellow
  }
];

// Rooms Array

const roomsArray = [
{
  nameRoom: "Dining Room"
},
{
  nameRoom: Conservatory
},
{
  nameRoom: Kitchen
},
{
  nameRoom: Study
},
{
  nameRoom: Library
},
{
  nameRoom: "Billiard Room"
},
{
  nameRoom: Lounge
},
{
  nameRoom: Ballroom
},
{
  nameRoom: Hall
},
{
  nameRoom: Spa
},
{
  nameRoom: "Living Room"
},
{
  nameRoom: Observatory
},
{
  nameRoom: Theater
},
{
  nameRoom: "Guest House"
},
{
  nameRoom: Patio
}

];

// Weapons Array

const weaponsArray = [
  {
    nameWeapons: rope,
    weight: 10
  },
  
  {
    nameWeapons: knife,
    weight: 8
  },
  
  {
    nameWeapons: candlestick, 
    weight: 2
  },
  
  {
    nameWeapons: dumbbell,
    weight: 30
  },
  
  {
    nameWeapons: poison,
    weight: 2
  },
  
  {
    nameWeapons: axe,
    weight: 15
  },
  
  {
    nameWeapons: bat,
    weight: 13
  },
  {
    nameWeapons: trophy,
    weight: 25
  },
  {
    nameWeapons: pistol,
    weight: 20
  }
];


// ITERATION 2

function selectRandom() {}

console.log(weaponsArray, suspectsArray, roomsArray)

function pickMystery() {}


// ITERATION 3

function revealMystery() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. /*
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
*/