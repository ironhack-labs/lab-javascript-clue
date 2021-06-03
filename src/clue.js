// ITERATION 1

// Suspects Array
const suspectsArray = [ 
{
  name: "Jacob Green",
  occupation: "Entrepreneur",
  age: 45,
  description: "He has a lot of connections",
  image:
    "https://carboncostume.com/wordpress/wp-content/uploads/2017/10/mrgreen3.jpg",
  color: "green ",
},
{
  name: "Doctor Orchid",
  occupation: "Scientist",
  age: 26,
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  image: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_2000,x_0,y_50/v1560965041/shape/mentalfloss/586055-hasbro.jpg?itok=x4QQWTxa",
  color: "white",
},
{
  name: "Victor Plum",
  occupation: "Designer",
  age: 22,
  description: "Billionaire video game designer",
  image:
    "https://vignette.wikia.nocookie.net/cluedo/images/a/a4/2016C6.jpg/revision/latest?cb=20200927103539",
  color: "purple",
},
{
  name: "Kasandra Scarlet",
  occupation: "Actor",
  age: 31,
  description: "She is an A-list movie star with a dark past",
  image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
  color: "red",
},
{
  name: "Eleanor Peacock",
  occupation: "Socialité",
  age: 36,
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  image: "https://vignette.wikia.nocookie.net/cluedo/images/b/b0/2016C5.jpg/revision/latest?cb=20200927103538",
  color: "blue",
},
{
  name: "Jack Mustard",
  occupation: "Retired Football player",
  age: 62,
  description:
    "He is a former football player who tries to get by on his former glory",
  image:
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
  color: "yellow",
}
];

// Weapons Array
let weaponsArray = [

  {
  name: 'rope',
  weight: 10,
},
{
  name: 'knife',
  weight: 8,
},
{
  name: 'candlestick',
  weight: 2,
},
{
  name: 'dumbbell',
  weight: 30,
},
{
  name: 'poison',
  weight: 2,
},
{
  name: 'axe',
  weight: 15,
},
{
  name: 'bat',
  weight: 13,
},
{
  name: 'trophy',
  weight: 25,
},
{
  name: 'pistol',
  weight: 20,
}
];

// Rooms Array
const roomsArray = [
{
  name: "Dining Room",
},
{
  name: "Conservatory",
},
{
  name: "Kitchen",
},
{
  name: "Study",
},
{
  name: "Library",
},
{
  name: "Billiard Room",
},
{
  name: "Lounge",
},
{
  name: "Ballroom",
},
{
  name: "Hall",
},
{
  name: "Spa",
},
{
  name: "Living Room",
},
{
  name: "Observatory",
},
{
  name: "Theater",
},
{
  name: "Guest House",
},
{
  name: "Patio",
}
];

// ITERATION 2

function selectRandom(arr) {
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum]
}
selectRandom(suspectsArray);

// console.log(selectRandom(suspectsArray));

// selectRandom();

function pickMystery() {
const suspect = selectRandom(suspectsArray);
const weapon = selectRandom(weaponsArray);
const room = selectRandom(roomsArray);

return {suspect, weapon, room};
}

pickMystery();

// ITERATION 3

function revealMystery(obj) {
console.log(`It was ${obj.suspect.name} killing Mr. Boddy using ${obj.weapon.name} in ${obj.room.name}`);
}

revealMystery(pickMystery());



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
