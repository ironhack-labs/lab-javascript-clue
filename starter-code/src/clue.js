//1. Creating the cards 

// Characters

var mrGreen = {
first_name:  "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
}

var drOrchid = {
frst_name:   "Doctor",
lst_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"
}

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
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
occupation:   "Retired Football player"
}

// Weapons

var rope = { name: "rope", weight: 10 }
var knife = { name : "knife", weight: 8 }
var candlestick = { name: "candlestick", weight: 2 }
var dumbbell = { name: "dumbbell", weight: 30 }
var poison = { name: "poison", weight: 2 }
var axe = { name: "axe", weight: 15 }
var bat = { name: "bat", weight: 13 }
var trophy = { name: "trophy", weight: 25 }
var pistol = { name: "pistol", weight: 20 }

// Rooms//

var DinningRoom = { name: "Dinning Room" }
var Conservatory = {name: "Conservatory" } 
var Kitchen ={ name: "Kitchen" }
var Study = { name: "Study" } 
var Library = { name: "Library" } 
var BilliardRoom = { name: "Billiard Room" } 
var Lounge = { name: "Lounge" } 
var Ballroom = { name: "Ballroom" } 
var Hall = { name: "Hall" } 
var Spa = { name: "Spa" } 
var LivingRoom = { name: "Living Room" } 
var Observatory = { name: "Observatory" }   
var Theater = { name: "Theater" } 
var GuestHouse = { name: "Guest House" } 
var Patio = { name: "Patio" } 

//1 . Data structuring

// Characters Collection
var charactersArray = [ ];

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
//console.log(charactersArray);


// Rooms' Collection
var roomsArray = [];

roomsArray.push( DinningRoom, Conservatory, Kitchen, Study, Library, BilliardRoom, Lounge, Ballroom, Hall, Spa, LivingRoom, Observatory, Theater, GuestHouse, Patio );
//console.log(roomsArray);


// Weapons Collection
var weaponsArray = [];

weaponsArray.push( rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);
//console.log(weaponsArray);

//2. creating the mistery

/*
// random weapon
var randomWeaponIndex = Math.random(); // random nbr w/decimal 0<x<1
randomWeaponIndex = randomWeaponIndex * weaponsArray.length; // 
randomWeaponIndex = Math.floor(randomWeaponIndex); // nombre entier/integer
console.log(randomWeaponIndex);

var randomWeapon = weaponsArray[randomWeaponIndex];
console.log(randomWeapon)

// random room
var randomRoomIndex = Math.random(); // random nbr w/decimal 0<x<1
randomRoomIndex = randomRoomIndex * roomsArray.length; // 
randomRoomIndex = Math.floor(randomRoomIndex); // nombre entier/integer
console.log(randomRoomIndex);

var randomRoom = roomsArray[randomRoomIndex];
console.log(randomRoom);

// random character
var randomCharacterIndex = Math.random(); // random nbr w/decimal 0<x<1
randomCharacterIndex = randomCharacterIndex * charactersArray.length; // 
randomCharacterIndex = Math.floor(randomCharacterIndex); // nombre entier/integer
console.log(randomCharacterIndex);

var randomCharacter = charactersArray[randomCharacterIndex];
console.log(randomCharacter);
*/

function randomSelector (array){
  var index = Math.floor(Math.random()*array.length);
  return array[index];
}

//console.log(randomSelector(roomsArray)); // vérification

var mysteryEnveloppe = [];

var randomCharacter = randomSelector(charactersArray);
//console.log(randomCharacter)
var randomWeapon = randomSelector(weaponsArray);
//console.log(randomWeapon)
var randomRoom = randomSelector(roomsArray);
//console.log(randomRoom);

mysteryEnveloppe.push(randomCharacter, randomRoom, randomWeapon)
//console.log(mysteryEnveloppe);


// function to fix
function pickMystery (xxx) {

}