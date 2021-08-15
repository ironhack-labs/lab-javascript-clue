// ITERATION 1

// Suspects Array

const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];


let mrGreen = {

firstName: 'Jacob',
lastName: 'Green',
occupation: 'Entrepreneur',
age: 45,
description: 'He has a lot of connections',
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
color: 'green'
};

let drOrchid = {

  firstName: 'Doctor',
lastName: 'Orchid',
occupation: 'Scientist',
age: 26,
description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
color: 'white'

};


let profPlum = {

  firstName: 'Victor',
lastName: 'Plum',
occupation: 'Designer',
age: 22,
description: 'Billionaire video game designer',
image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
color: 'purple'
};


let missScarlet = {

  firstName: 'Kasandra',
lastName: 'Scarlet',
occupation: 'Actor',
age: 31,
description: 'She is an A-list movie star with a dark past',
image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
color: 'red'
};


let mrsPeacock = {

  firstName: 'Eleanor',
lastName: 'Peacock',
occupation: 'Socialité',
age: 36,
description: 'She is from a wealthy family and uses her status and money to earn popularity',
image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
color: 'blue'
};


let mrMustard = {

  firstName: 'Jack',
lastName: 'Mustard',
occupation: 'Retired Football player',
age: 62,
description: 'He is a former football player who tries to get by on his former glory',
image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
color: 'yellow'
};



// Rooms Array

const roomsArray = [DiningRoom, Conservatory, Kitchen, Study, Library, BilliardRoom, Lounge, Ballroom, Hall, Spa, LivingRoom, Observatory, Theater, GuestHouse, Patio];

let DiningRoom = {
  name: 'Dining Room'
};

let Conservatory ={
  name: 'Conservatory'
};

let Kitchen = {
  name: 'Kitchen'
};

let Study = {
  name: 'Study'
};

let Library = {
  name: 'Library'
};

let BilliardRoom= {
  name: 'Billiard Room'
};

let Lounge = {
  name: 'Lounge'
};

let Ballroom = {
  name: 'Ballroom'
};

let Hall = {
  name: 'Hall'
};

let Spa = {
  name: 'Spa'
};


let LivingRoom = {
  name: 'Living Room'
};

let Observatory = {
  name: 'Observatory'
};

let Theater = {
  name: 'Theater'
};


let GuestHouse = {
  name: 'Guest House'
};

let Patio = {
  name: 'Patio'
};

// Weapons Array

const weaponsArray = [ rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

let rope = {
  name: 'rope' ,
 weight: 10
};

let knife = {
  name: 'knife', 
 weight: 8

};

let candlestick = {
  name: 'candlestick', 
 weight: 2
};

let dumbbell = {
  name: 'dumbbell', 
 weight: 30

};

let poison = {

  name: 'poison', 
 weight: 2
};

let axe = {

  name: 'axe' ,
 weight: 15
};

let bat = {
  name: 'bat', 
 weight: 13

};

let trophy = {
  name: 'trophy',
 weight: 25
};

let pistol = {
  name: 'pistol', 
 weight: 20

};







// ITERATION 2

function selectRandom() {

  let randomSuspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
  let randomWeapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
  let randomRoom = roomsArray[Math.floor(Math.random() * roomsArray.length)];

  let randomCard = [randomSuspect + randomWeapon + randomRoom]
  return {randomCard}
  
}

let randomCard = selectRandom ();

function pickMystery([]) {

  let Suspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
  let Weapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
  let Room = roomsArray[Math.floor(Math.random() * roomsArray.length)];
  return {suspect, weapon, room}
  



}

let mystery = pickMystery();


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
