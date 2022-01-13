// ITERATION 1

// Suspects Array

const suspectsArray = [{
  firstName: 'Jacob',
  lastName: 'Green',
  occupation: "Entrepreneur",
  age: 45,
  description: "He has a lot of connection",
  image:"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  color:"green",
},
{
  firstName: "Doctor",
  lastName: 'Orchid',
  occupation: "Scientist",
  age: 26,
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  color:"white"
},
{
  firstName: "Eleanor",
  lastName:"Peacock",
  occupation:"Socialité",
  age: 36,
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  color: "blue"
},
{
  firstName: "Jack",
  lastName: "Mustard",
  occupation: 'Entrepreneur',
  age: 62,
  description: "He is a former football player who tries to get by on his former glory",
  image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
  color: "yellow"
},
{
  firstName: "Victor",
  lastName: "Plum",
  occupation: "Designer", 
  age: 22,
  description: "Billionaire video game designer",
  image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
  color:"purple"
},
{
  firstName: "Kasandra",
  lastName: "Scarlet", 
  occupation: "Journalist",
  age: 31,
  description: "She is an A-list movie star with a dark past",
  image:"https://www.radiotimes.com/uploads/images/Original/111967.jpg",
  color:"red"
}
// ...
];
// Rooms Array

const roomsArray = [
  
  { name: 'Kitchen' },
  { name: 'Garden' },
  { name: 'Living Room' },
  { name: 'Bedroom' },
  { name: 'Bathroom' },
  { name: 'Dinnerroom' },
  { name: 'Study' },
  { name: 'Cellar' },
  { name: 'Addice' },
  { name: 'lounge' },
  { name: 'Hall' },
  { name: 'Libray' },
  { name: 'Ballroom' },
  { name: 'Questroom' },
  { name: 'Sauna' }
];

// Weapons Array

const weaponsArray = [
  {
    name: "candlestick",
    weight: 2
  },
  {
    name:"dumbbell",
    weight: 30
  },
  {
    name: "knife",
    weight:8
  },
  {
    name:"bat",
    weight: 13
  },
  {
    name: "pistol",
    weight: 20
  },
  {
    name: "rope",
    weight: 10
  },
  {
    name: "poison",
    weight: 2
  },
  {
    name:"axe",
    weight: 15
  },
  {
    name: "trophy",
    weight: 25
  }
];


// ITERATION 2

function selectRandom(selection) {
  let random = selection[Math.floor(Math.random()*selection.length)];
  return random;
}


function pickMystery() {
  let suspect = selectRandom(suspectsArray);
  let room = selectRandom(roomsArray);
  let weapon = selectRandom(weaponsArray);
  let mystery = {suspect, weapon, room};
  return mystery;
  

  


}
// ITERATION 3

function revealMystery(mystery) {
  let firstName = mystery.suspect.firstName;
  let lastName = mystery.suspect.lastName;
  let weapon = mystery.weapon.name;
  let room = mystery.room.name;
  return `${firstName} ${lastName} killed Mr. Boddy using the ${weapon} in the ${room}!`
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
