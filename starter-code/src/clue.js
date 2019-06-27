// -----------------------------------------------------------------------------
// 1. Create data structures for Characters, Weapons, Rooms
// -----------------------------------------------------------------------------

// Character constructor
function Character(first_name,last_name,color,description,age,image,occupation) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.color = color;
  this.description = description;
  this.age = age;
  this.image = image;
  this.occupation = occupation;
};

// Weapon constructor
function Weapon(name, weight) {
  this.name = name;
  this.weight = weight;
};

// Room constructor
function Room(name) {
  this.name = name;
};

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
var dinningRoom = new Room('Dinning Room');
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
// 3. Create the collections
// -----------------------------------------------------------------------------

// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];
