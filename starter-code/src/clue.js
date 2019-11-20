// ITERATION 1

let mrGreen = {
     firstName: "Jacob",
     lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
}
let drOrchid = {
     firstName: "Doctor",
     lastName: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
}
let profPlum = {
     firstName: "Victor",
     lastName: "Plum",
    color: "purple",
    description: "Billionaire video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
}
let missScarlet = {
     firstName: "Kasandra",
     lastName: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
}
let mrsPeacock = {
     firstName: "Eleanor",
     lastName: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
}
let mrMustard = {
     firstName: "Jack",
     lastName: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
}

// Weapons

const rope = {
    name: "Rope",
    weigth: 10
}
const knife = {
    name: "Knife",
    weigth: 8
}
const candlestick = {
    name: "Candlestick",
    weigth: 2
}
const dumbbell = {
    name: "Dumbbell",
    weigth: 30
}
const poison = {
    name: "Poison",
    weigth: 2
}
const axe = {
    name: "Axe",
    weigth: 15
}
const bat = {
    name: "Bat",
    weigth: 13
}
const trophy = {
    name: "Trophy",
    weigth: 25
}
const pistol = {
    name: "Pistol",
    weigth: 20
}
// Rooms
const diningRoom = {
    name: "Dining Room",
}
const conservatory = {
}
const kitchen = {
    name: "Kitchen"
}
const study = {
    name: "Study"
}
const library = {
    name: "Library"
}
const billiardRoom = {
    name: "Billiard Room"
}
const lounge = {
    name: "Lounge"
}
const ballroom = {
    name: "Ballroom"
}
const hall = {
    name: "Hall"
}
const spa = {
    name: "Spa"
}
const livingRoom = {
    name: "Living Room"
}
const observatory = {
    name: "Observatory"
}
const theater = {
    name: "Theater"
}
const guestHouse = {
    name: "Guest House"
}
const patio = {
    name: "Patio"
}
// Collections
const suspectsArray = 
[mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

const weaponsArray = 
[rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];
 
const roomsArray = 
[diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

//ITERATION 2

function selectRandom (array) {
    if (array.length != 0) 
      return array[Math.floor(Math.random() * array.length)];
}

function pickMystery () {
return {suspect:selectRandom(suspectsArray), 
    weapon:selectRandom(weaponsArray),
    room:selectRandom(roomsArray)};
}

//console.log (pickMystery());

//ITERATION 3

let mysteryEnvelope = pickMystery();

function revealMystery (envelope) {
  //console.log("Envelope argument:", envelope);  
  return `${envelope.suspect.firstName} ${envelope.suspect. lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

console.log (revealMystery(mysteryEnvelope));
