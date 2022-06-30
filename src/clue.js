// ITERATION 1

const mrGreen = {firstName: "Jacob",
lastName: "Green",
occupation: "Entrepreneur",
age: 45,
description: "He has a lot of connections",
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
color: "green"}

const drOrchid = {firstName: "Doctor",
lastName: "Orchid",
occupation: "Scientist",
age: 26,
 description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
color: "white"}

const profPlum = {firstName: "Victor",
lastName: "Plum",
occupation: "Designer",
age: 22,
description: "Billionaire video game designer",
image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
color: "purple"}

const missScarlet =  {firstName: "Kasandra",
lastName: "Scarlet",
occupation: "Actor",
age: 31,
description: "She is an A-list movie star with a dark past",
image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
color: "red"}

const mrsPeacock = {firstName: "Eleanor",
lastName: "Peacock",
occupation: "Socialité",
age: 36,
description: "She is from a wealthy family and uses her status and money to earn popularity",
image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
color: "blue"}

const mrMustard =  {firstName: "Jack",
lastName: "Mustard",
occupation: "Retired Football player",
age: 62,
description: "He is a former football player who tries to get by on his former glory",
image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
color: "yellow"}

// Suspects Array

const suspectsArray = [
  {firstName: "Jacob",
  lastName: "Green",
  occupation: "Entrepreneur",
  age: 45,
  description: "He has a lot of connections",
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  color: "green"},

  {firstName: "Doctor",
  lastName: "Orchid",
  occupation: "Scientist",
  age: 26,
   description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  color: "white"},

    {firstName: "Victor",
      lastName: "Plum",
      occupation: "Designer",
      age: 22,
      description: "Billionaire video game designer",
      image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
      color: "purple"},

      {firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red"},

        {firstName: "Eleanor",
          lastName: "Peacock",
          occupation: "Socialité",
          age: 36,
          description: "She is from a wealthy family and uses her status and money to earn popularity",
          image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
          color: "blue"},

          {firstName: "Jack",
            lastName: "Mustard",
            occupation: "Retired Football player",
            age: 62,
            description: "He is a former football player who tries to get by on his former glory",
            image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
            color: "yellow"}
];

let rope = {weight: 10, nombre: "rope"}
let knife= {weight: 8, nombre: "knife"}
let candlestick= {weight: 2, nombre: "candlestick"}
let dumbbell = {weight: 30, nombre: "dumbell"}
let poison= {weight: 2, nombre: "poison"}
let axe = {weight: 15, nombre: "axe"}
let bat = {weight: 13, nombre: "bat"}
let trophy = {weight: 25, nombre: "trophy"}
let pistol = {weight: 20, nombre: "pistol"}



console.log(suspectsArray)

// Rooms Array

const roomsArray = ["Dining Room",
"Conservatory",
"Kitchen",
"Study",
"Library",
"Billiard Room",
"Lounge",
"Ballroom",
"Hall",
"Spa",
"Living Room",
"Observatory",
"Theater",
"Guest House",
"Patio"];

// Weapons Array

const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];


// ITERATION 2

function selectRandom(array) {
  let numItems = array.length
  let randomNum = Math.random()* numItems
  let numExact = Math.floor(randomNum)
  let randomItem = array[numExact]

  return randomItem
}

console.log(selectRandom(suspectsArray))

function pickMystery() {
  let suspect = selectRandom(suspectsArray)
  let weapon = selectRandom(weaponsArray)
  let room = selectRandom(roomsArray)
  let randomObject = [suspect, weapon, room]
  return randomObject
}

let result = pickMystery()

console.log(pickMystery())


// ITERATION 3

function revealMystery(result) {
  console.log(result)
  let firstName = result[0].firstName
  let lastName = result[0].lastName
  let arma = result[1].nombre
  let room = result[2]
  
  return `${firstName} ${lastName} killed Mr. Boddy using the ${arma} in the ${room}`
}

console.log(revealMystery(result))


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
