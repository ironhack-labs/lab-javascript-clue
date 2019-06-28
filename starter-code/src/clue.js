// CONSTRUCTORS


// Characters' Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];

function Character(firstName,lastName,color,description,age,image,occupation) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.color = color;
  this.description = description;
  this.age = age;
  this.image = image;
  this.occupation = occupation;
  this.addToArray = function(char){
    charactersArray.push(char)
  }
  this.addToArray(this)
}

function Weapon(name,weight){
  this.name = name;
  this.weight = weight;
  this.addToArray = function(weapon){
    weaponsArray.push(weapon)
  }
  this.addToArray(this)
}

function Room(name){
  this.name = name;
  this.addToArray = function(room){
    roomsArray.push(room)
  }
  this.addToArray(this)
}

// DATA

// Characters

var mrGreen = new Character(
  "Jacob",
  "Green",
  "green",
  "He has a lot of connections",
  45,
  "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  "Entrepreneur"
)

var drOrchid = new Character(
  "Doctor",
  "Orchid",
  "white",
  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  26,
  "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  "Scientist"
)

var profPlum = new Character(
  "Victor",
  "Plum",
  "purple",
  "Billionare video game designer",
  22,
  "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  "Designer"
)

var missScarlet = new Character(
  "Kasandra",
  "Scarlet",
  "red",
  "She is an A-list movie star with a dark past",
  31,
  "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  "Actor"
)

var mrsPeacock = new Character(
  "Eleanor",
  "Peacock",
  "blue",
  "She is from a wealthy family and uses her status and money to earn popularity",
  36,
  "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  "Socialité"
)

var mrMustard = new Character(
  "Jack",
  "Mustard",
  "yellow",
  "He is a former football player who tries to get by on his former glory",
  62,
  "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  "Retired Football player"
)

// Weapons

var rope = new Weapon("rope",10);
var knife = new Weapon("knife",8);
var candlestick = new Weapon("candlestick",2);
var dumbbell = new Weapon("dumbbell",30);
var poison = new Weapon("poison",2);
var axe = new Weapon("axe",15);
var bat = new Weapon("bat",13);
var trophy = new Weapon("trophy",25);
var pistol = new Weapon("pistol",20);

// Rooms

var dinningRoom = new Room("Dinning Room");
var conservatory = new Room("Conservatory");
var kitchen = new Room("Kitchen");
var study = new Room("Study");
var library = new Room("Library");
var billiard = new Room("Billiard Room");
var lounge = new Room("Lounge");
var ballroom = new Room("Ballroom");
var hall = new Room("Hall");
var spa = new Room("Spa");
var livingRoom = new Room("Living Room");
var observatory = new Room("Observatory");
var theater = new Room("Theater");
var guestHouse = new Room("Guest House");
var patio = new Room("Patio");


// FIRST METHOD WITH FUNCTIONS  

// RANDOM SELECTOR

function randomSelector(array){
  return array[Math.floor(Math.random() * array.length)];
}


// CREATE THE MYSTERY

function pickMistery() {
  var misteryEnvelope = [randomSelector(charactersArray),randomSelector(weaponsArray),randomSelector(roomsArray)];
  return misteryEnvelope;
}


// REVEAL MYSTERY 

function revealMistery(envelope) {
  console.log(
    `${envelope[0].firstName} ${envelope[0].lastName} killed Mr.Boddy using the ${envelope[1].name} in the ${envelope[2].name}!!!!`
    );
}


//SECOND METHOD WITH METHODS

function Game(weapons,characters,rooms) {

  this.weapons=weapons;
  this.characters=characters;
  this.rooms=rooms;
  this.misteryEnvelope = [];

  this.randomSelector = function(array){
    return array[Math.floor(Math.random() * array.length)];
  };

  this.pickMistery = function() {
    this.misteryEnvelope = [this.randomSelector(charactersArray),this.randomSelector(weaponsArray),this.randomSelector(roomsArray)];
  };

  // change charactersArray into this.charaters; same for the others

  this.revealMistery = function() {
    var envelope = this.misteryEnvelope;
    console.log(
      `${envelope[0].firstName} ${envelope[0].lastName} killed Mr.Boddy using the ${envelope[1].name} in the ${envelope[2].name}!!!!`
    );
  };

  this.restart = function() {
    this.pickMistery();
  };

  this.pickMistery();
  this.revealMistery();

}