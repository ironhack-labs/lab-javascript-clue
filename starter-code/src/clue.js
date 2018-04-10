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

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

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
var charactersArray = []

var mrGreen = { 
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
};

var drOrchid = {
first_name:   "Doctor",
last_name:    "Orchid",
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

// Rooms' Collection
var roomsArray = [];

var diningRoom = {
  name: "Dinning Room"
}
var conservatory = {
  name: "Conservatory"
}
var kitchen = {
  name: "Kitchen"
}
var study = {
  name: "Study"
}
var library = {
  name: "Library"
}
var billiardRoom = {
  name: "Billiard Room"
}
var lounge = {
  name: "Lounge"
}
var ballroom = {
  name: "Ballroom"
}
var hall = {
  name: "Hall"
}
var spa = {
  name: "Spa"
}
var livingRoom = {
  name: "Living Room"
}
var observatory = {
  name: "Observatory"
}
var theater = {
  name: "Theater"
}
var guestHouse = {
  name: "Guest House"
}
var patio = {
  name: "Patio"
}

// Weapons Collection
var weaponsArray = [];

var rope = { 
  name: "rope",   
  weight: 10
}
var knife = {
  name: "knife", 
  weight: 8
}
var candlestick = { 
  name: "candlestick",
  weight: 2
}
var dumbbell = { 
  name: "dumbbell",
  weight: 30
}
var poison = {
  name: "poison", 
  weight: 2
}
var axe = {
  name: "axe", 
  weight: 15
}
var bat = {
  name: "bat", 
  weight: 13
}
var trophy = {
  name: "trophy",
  weight: 25
}
var pistol = {
  name: "pistol",
  weight: 20
}

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)
// console.log(charactersArray);

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol)
//console.log(weaponsArray);

roomsArray.push(diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom,hall, spa, livingRoom, observatory, theater, guestHouse, patio)
//console.log(roomsArray);


//----------Random Selector----------//

function randomSelector(array){
  var random = array[Math.floor(Math.random()*array.length)];
  
  return random
}


//----------Pick Mystery----------//

var char = "";
var weapon = "";
var room = "";
var mysteryEnvelope;

function pickMistery(){
  mysteryEnvelope = [];
  var char = randomSelector(charactersArray);
  var weapon = randomSelector(weaponsArray);
  var room = randomSelector(roomsArray);
  mysteryEnvelope.push(char, weapon, room)
  return mysteryEnvelope
}

//pickMistery()

mysteryEnvelope.push(char, weapon, room)


//----------Reveal Mystery----------//

function revealMistery(theEnvelope){
  return theEnvelope[0].first_name + " " + theEnvelope[0].last_name + " killed Mr.Boddy using the " + theEnvelope[1].name + " in the " + theEnvelope[2].name + "!!!!" 
}

//revealMistery()




