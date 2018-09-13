var mrGreen = { 
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"};

var drOrchid = { 
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist" };

var profPlum = { 
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"};

var missScarlet = { 
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"};

var mrsPeacock = { 
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"};

var mrMustard = { 
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"};

var rope = {
name: "rope",
weight: 10
};

var knife = {
name: "knife",
weight: 8
};

var candlestick = {
name: "candlestick",
weight: 2
};

var dumbbell = {
name: "dumbbell",
weight: 30
};

var poison = {
name: "poison",
weight: 2
};

var axe = {
name: "axe",
weight: 15
};

var bat = {
name: "bat",
weight:13
};

var trophy = {
name: "trophy",
weight: 25
};

var pistol = {
name: "pistol",
weight: 20
};

var dinningRoom = {
room: "Dinning Room"
};

var conservatory = {
room: "Conservatory"
};

var kitchen = {
room: "Kitchen"
};

var study = {
room: "Study"
};

var library = {
room: "Library"
};

var billiardRoom = {
room: "Billiard Room"
};

var lounge = {
room: "Lounge"
};

var ballroom = {
room: "Ballroom"
};

var hall = {
room: "Hall"
};

var spa = {
room: "Spa"
};

var livingRoom = {
room: "Living Room"
};

var observatory = {
room: "Observatory"
};

var theater = {
room: "Theater"
};

var guestHouse = {
room: "Guest House"
};

var patio = {
room: "Patio"
};

var charactersArray = [];
var weaponsArray = [];
var roomsArray = [];

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

roomsArray.push(dinningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);

function randomSelector (array) {
return rand = array[Math.floor(Math.random() * array.length)];
}

randomSelector(charactersArray);

var misteryEnvelope = [];

function pickMistery (array1, array2, array3) {
  var killer = randomSelector(array1);
  var weapon = randomSelector(array2);
  var room = randomSelector(array3);
  return misteryEnvelope.push(killer, weapon, room);
}

pickMistery(charactersArray, weaponsArray, roomsArray);

function revealMistery(finalArray) {
  var firstName = (finalArray[0].first_name);
  var lastName = (finalArray[0].last_name);
  var theWeapon = (finalArray[1].name)
  var place = (finalArray[2].room);
  return solution = firstName + " " + lastName + " killed Mr.Boddy using the " + theWeapon + " in the " + place +"!!!!"
};

revealMistery(misteryEnvelope);
console.log(solution);