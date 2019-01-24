// Characters
let mrGreen = {
first_name: "Jacob",
last_name: "Green",
color: "green",
description: "He has a lot of connections",
age: 45,
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation: "Entrepreneur"
}

let drOrchid = {
first_name: "Doctor",
last_name: "Orchid",
color: "white",
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age: 26,
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation: "Scientist"
}

let profPlum = {
first_name: "Victor",
last_name: "Plum",
color: "purple",
description: "Billionare video game designer",
age: 22,
image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation: "Designer"
}

let missScarlet = {
first_name: "Kasandra",
last_name: "Scarlet",
color: "red",
description: "She is an A-list movie star with a dark past",
age: 31,
image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation: "Actor"
}

let mrsPeacock = {
first_name: "Eleanor",
last_name: "Peacock",
color: "blue",
description: "She is from a wealthy family and uses her status and money to earn popularity",
age: 36,
image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation: "Socialité"
}

let mrMustard = {
first_name: "Jack",
last_name: "Mustard",
color: "yellow",
description: "He is a former football player who tries to get by on his former glory",
age: 62,
image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation: "Retired Football player"
}

// Weapons
let rope = {
  name: "rope",
  weight: 10
}

let knife = {
  name: "knife",
  weight: 8
}

let candlestick = {
  name: "candlestick",
  weight: 2
}

let dumbbell = {
  name: "dumbbell",
  weight: 30
}

let poison = {
  name: "poison",
  weight: 2
}

let axe =  {
  name: "axe",
  weight: 15
}

let bat = {
  name: "bat",
  weight: 13
}

let trophy = {
  name: "trophy",
  weight: 25
}

let pistol = {
  name: "pistol",
  weight: 20
}


// Rooms
let dinningRoom = {
  name: 'Dinning Room'
}

let conservatory = {
  name: 'Conservatory'
}

let kitchen = {
  name: 'Kitchen'
}

let study = {
  name: 'Study'
}

let library = {
  name: 'Library'
}

let billiardRoom = {
  name: 'Billiard room'
}

let lounge = {
  name: 'Lounge'
}

let ballroom = {
  name: 'Ballroom'
}

let hall = {
  name: 'Hall'
}

let spa = {
  name: 'Spa'
}

let livingRoom = {
  name: 'Living Room'
}

let observatory = {
  name: 'Observatory'
}

let theater = {
  name: 'Theater'
}

let guestHouse = {
  name: 'Guest House'
}

let patio = {
  name: 'Patio'
}

// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

// Rooms' Collection
var roomsArray = [];
roomsArray.push(dinningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);


function randomSelector(array) {
  if (array.length <= 0 ) return undefined;
  if (array.length == 1) return array[0];
  for (i=0; i<array.length; i++) {
    return array[Math.floor(Math.random(array[i]) * array.length)];
  }
}

randomSelector(weaponsArray);

function pickMistery() {
  let misteryEnvelope = [];
  misteryEnvelope.push(randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray));
  return misteryEnvelope;
}

pickMistery();

function revealMistery(misteryEnvelope) {
  return misteryEnvelope[0].first_name + ' ' + misteryEnvelope[0].last_name + ' ' + 'killed Mr.Boddy using the' + ' ' + misteryEnvelope[1].name + ' ' + 'in the' + ' ' + misteryEnvelope[2].name + '!!!!';
}

revealMistery(misteryEnvelope);