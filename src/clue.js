// ITERATION 1

// Suspects Collection

const suspectsArray = [
    
{
nickName:    "mrGreen",
firstName:   "Jacob",
lastName:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
},
  
{
nickName:    "drOrchid",
firstName:   "Doctor",
lastName:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"
},
  
{
nickName:    "profPlum",
firstName:   "Victor",
lastName:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
},
  
{
nickName:    "missScarlet",
firstName:   "Kasandra",
lastName:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
},
  
{
nickName:    "mrsPeacock",
firstName:   "Eleanor",
lastName:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
},
  
{
nickName:    "mrMustard",
firstName:   "Jack",
lastName:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"
}
];

// Rooms Collection

const roomsArray = [
{name: "Dining Room"},
{name: "Conservatory"},
{name: "Kitchen"},
{name: "Study"},
{name: "Library"},
{name: "Billiard Room"},
{name: "Lounge"},
{name: "Ballroom"},
{name: "Hall"},
{name: "spa"},
{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"}   
];

// Weapons Collection

const weaponsArray = [
{name: "rope", weight: 10},
{name: "knife", weight: 8},
{name: "candlestick", weight: 2},
{name: "dumbbell" , weight: 30},
{name: "poison", weight: 2},
{name: "axe", weight: 15},
{name: "bat", weight: 13},
{name: "trophy", weight: 25},
{name: "pistol", weight: 20}
];

// ITERATION 2


function selectRandom(array) {

  const pickedCard = Math.floor(Math.random() * array.length);

  return array[pickedCard];

}

// CreateMystery

function PickMystery () {

const mysteryEnvelope = {
suspect: selectRandom(suspectsArray),
room: selectRandom(roomsArray),
weapon: selectRandom(weaponsArray)
}

return mysteryEnvelope;
}


// ITERATION 3

const envelope = PickMystery();

function revealMystery(envelope) {

  const solution = `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
  
  return solution;
};

revealMystery(envelope);
