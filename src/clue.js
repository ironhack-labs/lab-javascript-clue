// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob" ,
    lastName: "Green" ,
    ocupation: "Entrepreneur" ,
    age: 45 ,
    description: "He has a lot of connections" ,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpg" ,
    color: "green" ,
  } ,
  { 
    firstName: "Doctor" ,
    lastName: "Orchid" ,
    ocupation: "Scientist" ,
    age: 26 ,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy" ,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg" ,
    color: "white" ,
  } ,
  {
    firstName: "Victor" ,
    lastName: "Plum" ,
    ocupation: "Designer" ,
    age: 22 ,
    description: "Billionaire video game designer" ,
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg" ,
    color: "purple" ,
  } ,
  {
    firstName: "Kasandra" ,
    lastName: "Scarlet" ,
    ocupation: "Actor" ,
    age: 31 ,
    description: "She is an A-list movie star with a dark past" ,
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg" ,
    color: "red" ,
  } ,
  {
    firstName: "Eleanor" ,
    lastName: "Peacock" ,
    ocupation: "Socialité" ,
    age: 36 ,
    description: "She is from a wealthy family and uses her status and money to earn popularity" ,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg" ,
    color: "blue" ,
  } ,
  {
    firstName: "Jack" , 
    lastName: "Mustard" ,
    ocupation: "Retired Football player" ,
    age: 62 ,
    description: "He is a former football player who tries to get by on his former glory" ,
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg" ,
    color: "yellow" ,
  } 
] ;

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
    name: "living Room",
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
  },
];

// Weapons Array,

const weaponsArray = [ 
  { name : "cuerda" ,  weight : 10 } ,
  { name : "cuchillo" ,  weight : 8 } ,
  { name : "vela" ,  weight : 2 } ,
  { name : "mancuerna"  ,  weight : 30 } ,
  { name : "veneno" ,  weight : 2 } ,
  { name : "hacha" ,  weight : 15 } ,
  { name : "murciélago" ,  weight : 13 } ,
  { name : "trofeo" ,  weight : 25 } ,
  { name : "pistola" ,  weight : 20 }
  ] ;


// ITERATION 2

function selectRandomRoom(rooms) {
  let room = rooms[Math.floor(Math.random() * rooms.length)];
  return room 
  }

function selectRandomWeapon (weapons) {
  let weapon = wapons[Math.floor(Math.random() * weapons.lenght)]
  return weapon
}

function selectRandomSuspect (suspects) {
  let suspect = suspects[Math.floor(Math.random() * suspects.lenght)]
  return suspect
}


function pickMystery() {

let misteryEnvelope =[];
misteryEnvelope.push(selectRandomRoom(roomsArray));
misteryEnvelope.push(selectRandomSuspect(suspectsArray));
misteryEnvelope.push(selectRandomWeapon(weaponsArray));
return misteryEnvelope;
}

// ITERATION 3

function revealMystery() {
  let misteryArray = pickMystery ();
  return (mysteryArray[1].firstName +" "+ mysteryArray[1].lastName + " killed Mr.Boddy using the "+ mysteryArray[2].weapon+ " in the " +  mysteryArray[0].room+ "!");

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
    selectRandom,
    selectRandomSuspect,
    selectRandomRoom,
    selectRandomWeapon
  };
}
