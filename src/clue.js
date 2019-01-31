// Characters
var mrGreen = {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
}
var drOrchid = { 
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:    "Scientist"
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

// Weapons
function Weapon (name, weight){
  this.name = name;
  this.weight = weight;
}
var rope = new Weapon("Rope", 10);
var knife = new Weapon("knife", 8);
var candlestick = new Weapon("candlestick", 2);
var dumbbell = new Weapon("dumbbell", 30);
var poison = new Weapon("poison", 2);
var axe = new Weapon("axe", 15);
var bat = new Weapon("bat", 13);
var trophy = new Weapon("trophy", 25);
var pistol = new Weapon("pistol", 20);

// Rooms
function Room (name){
  this.name = name;
}
var dining = new Room("Dining Room");
var conservatory = new Room("Conservatory");
var kitchen = new Room("Kitchen");
var study = new Room("Study");
var library = new Room("Library");
var billard = new Room("Billard Room");
var lounge = new Room("Lounge");
var ballroom = new Room("Ballroom");
var hall = new Room("Hall");
var spa = new Room("Spa");
var living = new Room("Living Room");
var observatory = new Room("Observatory");
var theater = new Room("Theater");
var guest = new Room("Guest House");
var patio = new Room("Patio");

// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
var roomsArray = [dining, conservatory, kitchen, study, library, billard, lounge, ballroom, hall, spa, living, observatory, theater, guest, patio];

// Weapons Collection
var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

// Functions
function randomSelector(collectionArray){
  return collectionArray[Math.floor(Math.random()*collectionArray.length)];
}
function pickMistery(){
  var misteryEnvelope = [];
  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsArray));
  misteryEnvelope.push(randomSelector(roomsArray));
  return misteryEnvelope;
}
var aConcreteMistery = pickMistery()
function revealMistery(anyMistery){
  return anyMistery[0].first_name + " " + anyMistery[0].last_name + " killed Mr.Boddy using the " + anyMistery[1].name + " in the " + anyMistery[2].name + "!!!!"
}
console.log(revealMistery(aConcreteMistery))