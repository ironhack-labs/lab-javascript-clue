
var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur",
}


var drOrchid = {
frst_name:   "Doctor",
lst_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist",
}

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer",
}

var missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
}

var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
}

var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player",
}

// Weapons

var rope        = {weight: 10, name:"rope",}
var knife       = {weight: 8,name:"knife",}
var candlestick = {weight: 2, name: "candlestick",}
var dumbbell    = {weight: 30, name: "dumbbell",}
var poison      = {weight: 2, name: "poison",}
var axe         = {weight: 15, name: "axe",}
var bat         = {weight: 13, name: "bat",}
var trophy      = {weight: 25, name: "trophy",}
var pistol      = {weight: 20, name: "pistol",}

// Rooms
var DinningRoom = {name: "Dinning Room",}
var Conservatory = {name: "Conservatory",}
var Kitchen = {name: "Kitchen",}
var Study = {name: "Study",}
var Library = {name: "Library",}
var BillardRoom = {name: "Billiard Room",}
var Lounge = {name: "Lounge",}
var Ballroom = {name: "Ballroom",}
var Hall = {name: "Hall",}
var Spa = {name: "Spa",}
var LivingRoom = {name: "Living Room",}
var Observatory = {name: "Observatory",}
var Theater = {name: "Theater",}
var GuestHouse = {name: "Guest House",}
var Patio = {name: "Patio",}


// Characters Collection
var charactersArray = [mrGreen, drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];



// Rooms' Collection
var roomsArray = [DinningRoom, Conservatory, Kitchen, Study, Library, BillardRoom, Lounge, Ballroom, Hall, Spa, LivingRoom, Observatory, Theater, GuestHouse, Patio];

// Weapons Collection
var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];


function randomSelector(array)
{
  if(array.length===0) return undefined;
 return array[Math.floor(Math.random()*array.length)];
}

function pickMistery()
{
  var misteryEnvelope = [];
  misteryEnvelope = [randomSelector(charactersArray),randomSelector(weaponsArray),randomSelector(roomsArray) ];
  return misteryEnvelope;
}

//receives mistery envelope

function revealMistery(misteryEnvelope)
{
 
return (misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + 
  " killed Mr.Boddy using the " +  misteryEnvelope[1].name + " in the " +  misteryEnvelope[2].name +  "!!!!");
}