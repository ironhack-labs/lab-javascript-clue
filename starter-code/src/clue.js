// Characters

function Character(first, last, color, description, age, image, occupation) {
  this.firstName = first;
  this.lastName = last;
  this.color = color;
  this.description = description;
  this.age = age;
  this.image = image;
  this.occupation = occupation;
}

var mrGreen = new Character("Jacob", "Green", "green", 
  "He has a lot of connections", 45, 
  "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur");

var drOrchid = new Character("Doctor", "Orchid", "white", 
  "PhD in plant toxicology. Adopted daughter of Mr. Boddy", 26, 
  "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "Scientist")

var profPlum = new Character("Victor", "Plum", "purple", 
  "Billionare video game designer", 22, 
  "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", "Designer")

var missScarlet = new Character("Kasandra", "Scarlet", "red", 
  "She is an A-list movie star with a dark past", 31,
  "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", "Actor")  

var mrsPeacock = new Character("Eleanor", "Peacock", "blue", 
  "She is from a wealthy family and uses her status and money to earn popularity", 36,
  "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "Socialité")

var mrMustard = new Character("Jack", "Mustard", "yellow", 
  "He is a former football player who tries to get by on his former glory", 62,
  "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", "Retired Football player")

// Weapons

function Weapon(name, weight) {
  this.name = name;
  this.weight = weight;
}

var rope = new Weapon("Rope", 10)
var knife = new Weapon("Knife", 8)
var candlestick = new Weapon("Candlestick", 2)
var dumbbell = new Weapon("Dumbbell", 30)
var poison = new Weapon("Poison", 2)
var axe = new Weapon("Axe", 15)
var bat = new Weapon("Bat", 13)
var trophy = new Weapon("Trophy", 25)
var pistol = new Weapon("Pistol", 20)


// Rooms
function Room(name) {
  this.name = name;
}

var diningRoom = new Room("Dinning Room")
var conservatory = new Room("Conservatory")
var kitchen = new Room("Kitchen")
var study = new Room("Study")
var library = new Room("Library")
var billiardRoom = new Room("Billiard Room")
var lounge = new Room("Lounge")
var ballroom = new Room("Ballroom")
var hall = new Room("Hall")
var spa = new Room("Spa")
var livingRoom = new Room("Living Room")
var observatory = new Room("Observatory")
var theater = new Room("Theater")
var guestHouse = new Room("Guest House")
var patio = new Room("Patio")

// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Weapons Collection
var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

// Rooms' Collection
var roomsArray = [diningRoom, conservatory, kitchen, study, library, billiardRoom, 
lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

//Game Object

function newGame(randomSelector, mysteryEnvelope, pickMystery, revealMystery) {
  this.randomSelector = randomSelector;
  this.mysteryEnvelope = mysteryEnvelope;
  this.pickMystery = pickMystery;
  this.revealMystery = revealMystery;
}

var game1 = new newGame(randomSelector, mysteryEnvelope, pickMystery, revealMystery)

function randomSelector(arr) {
  var randomValue = arr[Math.floor(Math.random() * arr.length)];
  return randomValue;
}

var mysteryEnvelope = {
  character: {},
  weapon: {},
  room: {}
}

function pickMystery(){
  mysteryEnvelope.character= randomSelector(charactersArray);
  mysteryEnvelope.weapon= randomSelector(weaponsArray);
  mysteryEnvelope.room= randomSelector(roomsArray);
  return mysteryEnvelope;
}

function revealMystery(){
  pickMystery()

  document.getElementById("character").setAttribute("src", mysteryEnvelope.character.image);
  document.getElementById("weapon").innerHTML = mysteryEnvelope.weapon.name;
  document.getElementById("room").innerHTML = mysteryEnvelope.room.name;

  document.getElementsByTagName("p")[0].innerHTML = `${mysteryEnvelope.character.firstName} ${mysteryEnvelope.character.lastName} killed Mr. Boddy using the ${mysteryEnvelope.weapon.name} in the ${mysteryEnvelope.room.name}!!!!`;
}

game1.revealMystery();

//Working Button

document.getElementById("play").addEventListener("click", function(){
game1.revealMystery();
})

document.getElementById("play").addEventListener("mouseenter", function(){
this.style.color = "red"
})

document.getElementById("play").addEventListener("mouseleave", function(){
this.style.color = "black"
})
