function print(...param){
  console.log(...param)
}
///////////////////////
// ITERATION 1

//Suspects Collection
//mrGreen drOrchid profPlum missScarlet mrsPeacock mrMustard
const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",  
    },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", 
    color: "purple"
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue"
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow"
  }
];

// print(suspectsArray)

// Rooms Collection
const roomsArray = [
  {name: "Dinning Room"},
  {name: "Conservatory"},
  {name: "Kitchen"},
  {name: "Study"},
  {name: "Library"},
  {name: "Billiard Room"},
  {name: "Lounge"},
  {name: "Ballroom"},
  {name: "Hall"},
  {name: "Spa"},
  {name: "Living Room"},
  {name: "Observatory"},
  {name: "Theater"},
  {name: "Guest House"},
  {name: "Patio"}
  ];
  
// print(roomsArray)

// Weapons Collection
const weaponsArray = [
  {name: "rope", weight: 10},
  {name: "knife", weight: 8},
  {name: "candlestick", weight: 2},
  {name: "dumbbell", weight: 30},
  {name: "poison", weight: 2},
  {name: "axe", weight: 15},
  {name: "bat", weight: 13},
  {name: "trophy", weight: 25},
  {name: "pistol", weight: 20}
];

// print(weaponsArray)


// ITERATION 2

// let arr = [1,2,6,9,"yo",true]
// let arr2 = "word"
//  let arr3 = []
// function selectRandom(array){
//   if(Array.isArray(array) === false || array.length === 0) return undefined; 
//   let randomPick = array[Math.floor(Math.random() * array.length)];
//   return randomPick

// }

//or//

function selectRandom(array){
  let randomPick = array[Math.floor(Math.random() * array.length)];
  return Array.isArray(array) === true && array.length !== 0 ?  randomPick : undefined;
}

// print(selectRandom(arr))
// print(selectRandom(arr2))
// print(selectRandom(arr3))




function pickMystery(){
  let cardsObj = {suspect: selectRandom(suspectsArray), weapon: selectRandom(weaponsArray), room: selectRandom(roomsArray)};
  return cardsObj;
}
//print(pickMystery())


function revealMystery(envelope){
return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`

}

//print(revealMystery(pickMystery()))
