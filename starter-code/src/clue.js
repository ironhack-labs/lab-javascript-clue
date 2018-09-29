// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
frst_name:   Doctor
lst_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ,  weight: 10
name: knife       ,  weight: 8
name: candlestick ,  weight: 2
name: dumbbell    ,  weight: 30
name: poison      ,  weight: 2
name: axe         ,  weight: 15
name: bat         ,  weight: 13
name: trophy      ,  weight: 25
name: pistol      ,  weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/



// Characters Collection
var charactersArray = [
  mrGreen= {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
  } 
  ,
  drOrchid= {
  first_name:    "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:       " http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:    "Scientist"
  }
  ,
  profPlum= {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
  }
  ,
  missScarlet= {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
  }
  ,
  mrsPeacock= {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
  }
  ,
  mrMustard=  {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player",
  }
];

// Rooms' Collection
var roomsArray = [
{name: "namesDinning Room"},
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

// Weapons Collection
var weaponsArray = [

{name: "rope"        ,  weight: 10},
{name: "knife"       ,  weight: 8},
{name: "candlestick" ,  weight: 2},
{name: "dumbbell"    ,  weight: 30},
{name: "poison"      ,  weight: 2},
{name: "axe"         ,  weight: 15},
{name: "bat"         ,  weight: 13},
{name: "trophy"      ,  weight: 25},
{name: "pistol"      ,  weight: 20}
];

function randomSelector(sourceArray) {



  var keysArr = Object.keys(sourceArray);
  var numbers = keysArr.length;
  var pick = Math.floor(Math.random() * numbers);

  var randomKey = keysArr[pick];

  return sourceArray[randomKey];
}


function pickMistery(charactersArray, roomsArray, weaponsArray) {
  var randomChar = randomSelector(charactersArray);
  var randomRoom = randomSelector(roomsArray);
  var randomWeapon = randomSelector(weaponsArray);

  var misteryEnvelope = [randomChar, randomRoom, randomWeapon];

  return misteryEnvelope ;
}

 
function revealMistery(misteryEnvelope) {
   var result =  misteryEnvelope[0].first_name + " " 
   + misteryEnvelope[0].last_name + " killed Mr.Boddy using the " 
   + misteryEnvelope[2].name + " in the " 
   + misteryEnvelope[1].name + " !!!!";

   return result;
}


console.log(revealMistery(pickMistery(charactersArray, roomsArray, weaponsArray)));





/*
function randomSelector(sourceArray) {
    if (typeof(sourceArray) != 'object') return undefined;
    var keysArr = Object.keys(sourceArray);
    var numberOfKeys = keysArr.length;
    if (0 == numberOfKeys) return undefined;
    var rndIndx = Math.floor(Math.random() * numberOfKeys);
    var randomKey = keysArr[rndIndx];
    return sourceArray[randomKey];
}

function pickMistery() {
    return [
        randomSelector(charactersArray),
        randomSelector(weaponsArray),
        randomSelector(roomsArray)
    ];
}

function revealMistery(mistyEnvelope) {
    var ret = mistyEnvelope[0].first_name + " "
    + mistyEnvelope[0].last_name
    + " killed Mr.Boddy using the "
    + mistyEnvelope[1].name + " in the "
    + mistyEnvelope[2].name + "!!!!";
    return ret ;
} 
*/
