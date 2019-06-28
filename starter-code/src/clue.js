// -----------------------------------------------------------------------------
// 1. Create data structures for Characters, Weapons, Rooms
// -----------------------------------------------------------------------------


// Create some array placeholders (decks of cards)

var charactersArray = [];
var weaponsArray = [];
var roomsArray = [];


// Character constructor
function Character(first_name,last_name,color,description,age,image,occupation) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.color = color;
  this.description = description;
  this.age = age;
  this.image = image;
  this.occupation = occupation;

  this.addToArr = function(char) {
    charactersArray.push(char);
  }
  this.addToArr(this);
};

// Weapon constructor
function Weapon(name, weight) {
  this.name = name;
  this.weight = weight;

  this.addToArr = function(weapon) {
    weaponsArray.push(weapon);
  }
  this.addToArr(this);
};

// Room constructor
function Room(name) {
  this.name = name;

  this.addToArr = function(room) {
    roomsArray.push(room);
  }
  this.addToArr(this);
};

// MysteryEnvelope constructor
function MysteryEnvelope(character, weapon, room) {
  this.character = character;
  this.weapon = weapon;
  this.room = room;
  this.solutionMessage = `${this.character.first_name} ${this.character.last_name} killed Mr.Boddy using the ${this.weapon.name} in the ${this.room.name}!!!!`
}




// -----------------------------------------------------------------------------
// 2. Create the instances
// -----------------------------------------------------------------------------

// Characters
var mrGreen = new Character('Jacob',	'Green',	'green',	'He has a lot of connections',	'45',	'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',	'Entrepreneur');
var drOrchid = new Character('Doctor',	'Orchid',	'white',	'PhD in plant toxicology. Adopted daughter of Mr. Boddy',	'26',	'http://www.radiotimes.com/uploads/images/Original/111967.jpg',	'Scientist');
var profPlum = new Character('Victor',	'Plum',	'purple',	'Billionare video game designer',	'22',	'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',	'Designer');
var missScarlet = new Character('Kasandra',	'Scarlet',	'red',	'She is an A-list movie star with a dark past',	'31',	'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',	'Actor');
var mrsPeacock = new Character('Eleanor',	'Peacock',	'blue',	'She is from a wealthy family and uses her status and money to earn popularity',	'36',	'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',	'Socialité');
var mrMustard = new Character('Jack',	'Mustard',	'yellow',	'He is a former football player who tries to get by on his former glory',	'62',	'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',	'Retired Football player');

// Weapons
var rope = new Weapon('rope', 10);
var knife = new Weapon('knife', 8);
var candlestick = new Weapon('candlestick', 2);
var dumbbell = new Weapon('dumbbell', 30);
var poison = new Weapon('poison', 2);
var axe = new Weapon('axe', 15);
var bat = new Weapon('bat', 13);
var trophy = new Weapon('trophy', 25);
var pistol = new Weapon('pistol', 20);

// Rooms
var diningRoom = new Room('Dining Room');
var conervatory = new Room('Conservatory');
var kitchen = new Room('Kitchen');
var study = new Room('Study');
var library = new Room('Library');
var billiardRoom = new Room('Billiard Room');
var lounge = new Room('Lounge');
var ballroom = new Room('Ballroom');
var hall = new Room('Hall');
var spa = new Room('Spa');
var livingRoom = new Room('Living Room');
var observatory = new Room('Observatory');
var theater = new Room('Theater');
var guestHouse = new Room('Guest House');
var patio = new Room('Patio');


// -----------------------------------------------------------------------------
// 3. Create the game
// -----------------------------------------------------------------------------

// Constructor to create games of Clue
function Clue(charactersArray, weaponsArray, roomsArray) {

  this.randomSelector = function(arr) {
    return arr[ Math.floor( Math.random() * arr.length ) ];
  };

  this.pickMystery = function() {
    var mysteryEnvelope = new MysteryEnvelope( this.randomSelector(charactersArray),
                                              this.randomSelector(weaponsArray),
                                              this.randomSelector(roomsArray)  )
    return mysteryEnvelope;
  }

  this.revealMystery = function(mysteryEnvelope) {
    return mysteryEnvelope.solutionMessage;
  }

  this.startGame = function() {
    let mysteryEnvelope = this.pickMystery();    

    // Display solution in console
    let solutionMessage = this.revealMystery(mysteryEnvelope);
    console.log(solutionMessage);

    return mysteryEnvelope;        
  }
}

// -----------------------------------------------------------------------------
// 4. Set up the game
// -----------------------------------------------------------------------------

let firstGameOfClue = new Clue(charactersArray, weaponsArray, roomsArray);

// -----------------------------------------------------------------------------
// 5. Control the game from html
// -----------------------------------------------------------------------------

document.getElementById("start-button").addEventListener("click", function() {
  mysteryEnvelope = firstGameOfClue.startGame()
  document.getElementById("solutionMessage").innerHTML = mysteryEnvelope.solutionMessage;
  document.getElementById("characterImage").setAttribute("src", mysteryEnvelope.character.image);
  document.getElementById("characterDescription").innerHTML = mysteryEnvelope.character.description;  
});

