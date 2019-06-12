// Characters Collection
// Characters

var charactersArray = [

mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
},

drOrchid = { 
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"
},

profPlum = { 
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
},

missScarlet = { 
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
},

mrsPeacock = { 
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité",
}, 

mrMustard = { 
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"
} 
]


// Weapons Collection
// Weapons
var weaponsArray = [

{name: "rope"        ,  weight:10},
{name: "knife"       ,  weight: 8},
{name: "candlestick" ,  weight: 2},
{name: "dumbbell"    ,  weight: 3},
{name: "poison"      ,  weight: 2},
{name: "axe"         ,  weight: 1},
{name: "bat"         ,  weight: 1},
{name: "trophy"      ,  weight: 2},
{name: "pistol"      ,  weight: 2}

]

// Rooms' Collection
// Rooms

var roomsArray = [

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

]

function randomSelector(array){
  // let currentGame = [];
 
 if(array.length==0)return undefined;
//  else if(array[0].length == 0){return undefined;}
//  else if(array[1].length == 0){return undefined;} 
//  else if(array[2].length == 0){return undefined;}


let random1 = Math.floor((Math.random()* array.length));
// let random2 = Math.floor((Math.random()* array[1].length));
// let random3 = Math.floor((Math.random()* array[2].length));

// if(array.length == 1) random1=0;
//  else if(weaponsArray.length == 1)random2=0;
//  else if(roomArray.length == 1)random3=0;
    
// currentGame = [array.charactersArray[random1], array.weaponsArray[random2], array.roomsArray[random3]];

return array[random1];
}

// CREATE MYSTERY
function pickMistery(){

  let misteryEnvelope = [];

misteryEnvelope.push(charactersArray(randomSelector), weaponsArray(randomSelector), roomArray(randomSelector));

return misteryEnvelope; 
}

// REVEALING THE MYSTERY 
function revealMistery(){
}