// Characters Collection
var charactersArray = [];

var mrGreen = {
firstName: "Jacob",
lastName: "Green",
color: "green",
description: "He has a lot of connections",
age: 45,
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation: "Entrepreneur"
}

var drOrchid = {
firstName: "Doctor",
lastName: "Orchid",
color: "white",
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age: 26,
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation: "Scientist"
}

var profPlum = {
firstName: "Victor",
lastName: "Plum",
color: "purple",
description: "Billionare video game designer",
age: 22,
image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation: "Designer"
}

var missScarlet = {
firstName: "Kasandra",
lastName: "Scarlet",
color: "red",
description: "She is an A-list movie star with a dark past",
age: 31,
image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation: "Actor"
}

var mrsPeacock = {
firstName: "Eleanor",
lastName: "Peacock",
color: "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age: 36,
image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation: "Socialité"
}

var mrMustard = {
firstName: "Jack",
lastName: "Mustard",
color: "yellow",
description: "He is a former football player who tries to get by on his former glory",
age: 62,
image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation: "Retired Football player"
}

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)

// Rooms' Collection
var roomsArray = [];

var dinningRoom = {
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

roomsArray.push(dinningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);

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

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

//Create a method randomSelector to randomly select one 
//element from a card stack. The method should receive an array 
//as an argument, and return randomly one of the elements of the array.

function randomSelector(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

randomSelector(charactersArray);

//We need to create a pickMistery method that will call randomSelector 
//for each card stack, and return an array with the 3 picked cards, 
//a character, a weapon and a room. Our mystery should be stored on a 
//misteryEnvelope variable.

var misteryEnvelope = [];

function pickMistery(arr1, arr2, arr3) {
misteryEnvelope.push(randomSelector(arr1));
misteryEnvelope.push(randomSelector(arr2));
misteryEnvelope.push(randomSelector(arr3));
}

pickMistery(charactersArray, roomsArray, weaponsArray);

//Finally, we need to reveal the mystery. 
//Create a revealMistery method, that will receive our misteryEnvelope 
//array as an argument and return the revealed mystery like this:

function revealMistery(arr) {
  console.log(misteryEnvelope[0].firstName + " " + misteryEnvelope[0].lastName + " killed Mr.Boddy using the " + misteryEnvelope[2].name + " in the " + misteryEnvelope[1].name + "!!!!")
}

revealMistery(misteryEnvelope);







