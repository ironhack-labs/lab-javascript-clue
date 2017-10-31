var mrGreen =
  {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur",
};

var drOrchid =
  {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist",
};

var profPlum =
  {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer",
};

var missScarlet =
  {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor",
};

var mrsPeacock =
  {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité",
};

var mrMustard =
  {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player",
};

var rope = {
name: "Rope",
Weight: 10};

var knife = {
name: "Knife",
Weight: 8};

var candelStick = {
name: "Candlestick",
Weight: 2};

var dumbbell ={
name: "Dumbbell",
Weight: 30};

var poison = {
name: "Poison",
Weight: 2};

var axe = {
name: "Axe",
Weight: 15};

var bat = {
name: "Bat",
Weight: 13};

var trophy = {
name: "Trophy",
Weight: 25};

var pistol = {
name: "Pistol",
Weight: 20};

var dinningRoom = {
  name: "Dinning Room"
};

var conservatory = {
  name: "Conservatory"
};

var kitchen = {
  name: "Kitchen"
};

var study = {
  name: "Study"
};

var library = {
  name: "Library"
};

var billiardRoom = {
  name: "Billiard Room"
};

var lounge = {
  name: "Lounge"
};

var ballroom = {
  name: "Ballroom"
};

var hall = {
  name: "Hall"
};

var spa = {
  name: "Spa"
};

var livingRoom = {
  name: "Living Room"
};

var observatory = {
  name: "Observatory"
};

var theater = {
  name: "Theater"
};

var guestHouse = {
  name: "Guest House"
};

var patio = {
  name: "Patio"
};


var suspects = [mrGreen, profPlum, drOrchid, missScarlet, mrsPeacock, mrMustard];
var weapons = [rope, knife, candelStick, dumbbell, poison, axe, bat, trophy, pistol];
var rooms = [dinningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];



function random_selector(array) {
var randNumber = Math.floor(Math.random() * array.length);
return array[randNumber];
}



function cardStack() {
  var suspectRandom = random_selector(suspects);
  var weaponRandom = random_selector(weapons);
  var roomRandom = random_selector(rooms);
  var cardPick = {suspectCard: suspectRandom, weaponCard: weaponRandom, roomCard: roomRandom};
  return cardPick;
}

console.log(cardStack());

function pick_mistery() {

}

function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
