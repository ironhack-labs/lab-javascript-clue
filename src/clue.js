// ITERATION 1

// Suspects Array

const suspectsArray = [];

let mrGreen = {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: ' He has a lot of connections',
    image:
      'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
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
    image:
      'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple'
  };
  
  let missScarlet = {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image:
      'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
  };
  
  let mrsPeacock = {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image:
      'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
  };
  
  let mrMustard = {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
  };

 suspectsArray.push(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard);

// Rooms Array

const roomsArray = [];
let room1 ={name: "Dining Room"};
let room2 = {name: "Conservatory"};
let room3 = {name: "Kitchen"};
let room4 = {name: "Study"};
let room5 = {name: "Library"};
let room6 = {name: "Billiard Room"};
let room7 = {name: "Lounge"};
let room8 = {name: "Ballroom"};
let room9 = {name: "Hall"};
let room10 = {name: "Spa"};
let room11 = {name: "Living Room"};
let room12 = {name: "Observatory"};
let room13 = {name: "Theater"};
let room14 = {name: "Guest House"};
let room15 = {name: "Patio"};

roomsArray.push(room1,room2,room3,room4,room5,room6,room7,room8,room9,room10,room11,room12,room13,room14,room15);


// Weapons Array

const weaponsArray = [
    { name: 'rope', weight: 10 },
    { name: 'knife', weight: 8 },
    { name: 'candlestick', weight: 2 },
    { name: 'dumbbell', weight: 30 },
    { name: 'poison', weight: 2 },
    { name: 'axe', weight: 15 },
    { name: 'bat', weight: 13 },
    { name: 'trophy', weight: 25 },
    { name: 'pistol', weight: 20 }



];


// ITERATION 2

function selectRandom(arr) {

    if(!arr.length ){
        return undefined;
    }
  if(arr.length === 1){
    return arr[0];
  }
  let numberOfElements = arr.length;
  let randomElement = Math.round(Math.random() * numberOfElements);
  return arr[randomElement];

}
 
function pickMystery() {

    const newObj = {};

     newObj['suspect'] = selectRandom(suspectsArray);
     newObj['weapon']= selectRandom(weaponsArray);
     newObj['room'] = selectRandom(roomsArray);
     
     return newObj;

}


// ITERATION 3

function revealMystery() {}

