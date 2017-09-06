var cards = [
  { type: 'suspects', valueCards: [] },
  { type: 'rooms', valueCards: [] },
  { type: 'weapons', valueCards: [] },
];

var  mrGreen = {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

var drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};

var profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer",
};

var missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

var mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité",
};

var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};

var rope = {
  name: "Rope",
  weight: 10
};

var knife = {
  name: "Knife",
  weight: 8
};

var candlestick = {
  name: "Candlestick",
  weight: 2
};

var dumbell = {
  name: "Dumbell",
  weight: 30
};

var poison = {
  name: "Poison",
  weight: 2
};

var axe = {
  name: "Axe",
  weight: 15
};

var bat = {
  name: "Bat",
  weight: 13
};

var trophy = {
  name: "Trophy",
  weight: 25
};

var pistol = {
  name: "Pistol",
  weight: 20
};

var dinningRoom ={
  name: "dinningRoom"
};
var conservatory ={
  name: "conservatory"
};
var kitchen ={
  name: "kitchen"
};
var study ={
  name: "study"
};
var library ={
  name: "library"
};
var billiardRoom ={
  name: "billiardRoom"
};
var lounge ={
  name: "lounge"
};
var ballroom ={
  name: "ballroom"
};
var hall ={
  name: "hall"
};
var spa ={
  name: "spa"
};
var livingRoom ={
  name: "livingRoom"
};
var observatory ={
  name: "observatory"
};
var theater ={
  name: "theater"
};
var guestHouse ={
  name: "guestHouse"
};
var patio ={
  name: "patio"
};

var suspects = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
var weapons = [rope, knife, candlestick, dumbell, poison, axe, bat, trophy, pistol];
var rooms = [dinningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];


function random_selector(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function pick_mistery() {
  var suspect = random_selector(suspects);
  var weapon = random_selector(weapons);
  var room = random_selector(rooms);

  var mistery = {
    suspect: suspect,
    weapon: weapon,
    room: room
  };
  return mistery;
}

function reveal_mistery(mistery) {
  console.log("The killer is " + mistery.suspect.firstName + " " + mistery.suspect.lastName);
  console.log("with the " + mistery.weapon.name);
  console.log("In the " + mistery.room.name);
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
