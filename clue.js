// Characters Collection
let charactersArray = [];

let mrGreen = {
  firstName: 'Jacob', 
  lastName: 'Green', 
  color: 'green', 
  description: 'He has a lot of connections',
  age: 45,
  image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation: 'Entrepreneur'
};
let drOrchid = {
  firstName: 'Doctor', 
  lastName: 'Orchid', 
  color: 'white', 
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age: 26,
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  occupation: 'Scientist'
};
let profPlum = {
  firstName: 'Victor', 
  lastName: 'Plum', 
  color: 'purple', 
  description: 'Billionare video game designer',
  age: 22,
  image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation: 'Designer'
};
let missScarlet = {
  firstName: 'Kasandra', 
  lastName: 'Scarlet', 
  color: 'red', 
  description: 'She is an A-list movie star with a dark past',
  age: 31,
  image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation: 'Actor'
};
let mrsPeacock = {
  firstName: 'Eleanor', 
  lastName: 'Peacock', 
  color: 'blue', 
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  age: 36,
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation: 'Socialité'
};
let mrMustard = {
  firstName: 'Jack', 
  lastName: 'Mustard', 
  color: 'yellow', 
  description: 'He is a former football player who tries to get by on his former glory',
  age: 62,
  image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation: 'Retired Football player'
};

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

// Rooms' Collection
var roomsArray = [];

let diningRoom = {
  name: 'Dining Room'
};
let conservatory = {
  name: 'Conservatory'
};
let kitchen = {
  name: 'Kitchen'
};
let study = {
  name: 'Study'
};
let library = {
  name: 'Library'
};
let billiardRoom = {
  name: 'Billiard Room'
};
let lounge = {
  name: 'Lounge'
};
let ballRoom = {
  name: 'Ball Room'
};
let hall = {
  name: 'Hall'
};
let spa = {
  name: 'Spa'
};
let livingRoom = {
  name: 'Living Room'
};
let observatory = {
  name: 'Observatory'
};
let theater = {
  name: 'Theater'
};
let guestHouse = {
  name: 'Guest House'
};
let patio = {
  name: 'Patio'
};

roomsArray.push(diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballRoom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);

// Weapons Collection
var weaponsArray = [];

let rope = {
  name: 'Rope',
  weight: 10
};
let knife = {
  name: 'Knife',
  weight: 8
};
let candleStick = {
  name: 'Candlestick',
  weight: 2
};
let dumbBell = {
  name: 'Dumbbell',
  weight: 30
};
let poison = {
  name: 'Poison',
  weight: 2
};
let axe = {
  name: 'Axe',
  weight: 15
};
let bat = {
  name: 'Bat',
  weight: 13
};
let trophy = {
  name: 'Trophy',
  weight: 25
};
let pistol = {
  name: 'Pistol',
  weight: 20
};

weaponsArray.push(rope, knife, candleStick, dumbBell, poison, axe, bat, trophy, pistol);

// let randomCharacters = charactersArray[Math.floor(Math.random() * charactersArray.length)];

// let weaponsArray = [Math.floor(Math.random() * weaponsArray.length)];

// console.log(weaponsArray[]);

function randomSelector(someArray) {
  return Math.floor(Math.random() * someArray.length);
}

// randomSelector(weaponsArray);

var misteryEnvelope = [];
function pickMistery(){
  // var randomSuspect = charactersArray[randomSelector(charactersArray)];
  // var randomWeapon = weaponsArray[randomSelector(weaponsArray)];
  // var randomRoom = roomsArray[randomSelector(roomsArray)];
  //-----the above are unnesecarry variables; you can use just the value instead-----
  // misteryEnvelope.push(randomSuspect, randomWeapon, randomRoom);
  misteryEnvelope.push(charactersArray[randomSelector(charactersArray)], weaponsArray[randomSelector(weaponsArray)], roomsArray[randomSelector(roomsArray)]);
  return misteryEnvelope;

}

pickMistery();

function revealMistery(someMistery){
  // console.log(someMistery[2].name)
  return `${someMistery[0].firstName} ${someMistery[0].lastName} killed Mr.Body using the ${someMistery[1].name} in the ${someMistery[2].name}`
}
revealMistery(misteryEnvelope)