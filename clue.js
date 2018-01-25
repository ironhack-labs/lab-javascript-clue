var mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  occupation: 'Reverend',
  age: 54,
  image: 'https://spandrella.files.wordpress.com/2012/06/mrgreen.gif'
};

var drOrchid = {
  firstName: 'Doctor',
  lastName: 'Orchid',
  occupation: 'Doctor',
  age: 30,
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg'
};

var mrPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  occupation: 'Game Designer',
  age: 40,
  image: 'http://img.photobucket.com/albums/v617/Cluedokid25/Sims%202%20Cluedo/ProfessorPlum-3.jpg'
};

var msScarlet = {
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  occupation: 'Actor',
  age: 50,
  image: 'http://www.miicharacters.com/miis/large/10830_kasandrascarlet.jpg'
};


var diningRoom = { name: 'Dining room' };
var conservatory = { name: 'Conservatory' };
var kitchen = { name: 'Kitchen' };
var study = { name: 'Study' };
var library = { name: 'Library' };
var billiardRoom = { name: 'Billiard room' };
var lounge = { name: 'Lounge' };
var ballroom = { name: 'Ballroom' };
var hall = { name: 'Hall' };
var aSpa = { name: 'A spa' };
var livingRoom = { name: 'Living room' };
var observatory = { name: 'Observatory' };
var theater = { name: 'Theater' };
var guestHouse = { name: 'Guest house' };
var aPatio = { name: 'A patio' };



var rope = {
  name: 'Rope',
  weight: 10,
  pain: 2
};
var knife = {
  name: 'Knife',
  weight: 3,
  pain: 9
};
var candlestick = {
  name: 'Candlestick',
  weight: 8,
  pain: 6
};
var dumbbell = {
  name: 'Dumbbell',
  weight: 20,
  pain: 6
};
var poison = {
  name: 'Poison',
  weight: 1,
  pain: 10
};
var axe = {
  name: 'Axe',
  weight: 15,
  pain: 10
};
var bat = {
  name: 'Bat',
  weight: 11,
  pain: 8
};
var trophy = {
  name: 'Trophy',
  weight: 8,
  pain: 6
};
var pistol = {
  name: 'Pistol',
  weight: 15,
  pain: 10
};


var weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

var rooms = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  aSpa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  aPatio
];

var suspects = [ mrGreen, drOrchid, mrPlum, msScarlet ];

var randomSuspectIndex = Math.floor(Math.random() * suspects.length);
var randomRoomIndex = Math.floor(Math.random() * rooms.length);
var randomWeaponIndex = Math.floor(Math.random() * weapons.length);

var theSuspect = suspects[randomSuspectIndex].firstName + ' ' + suspects[randomSuspectIndex].lastName;
var theRoom = rooms[randomRoomIndex].name;
var theWeapon = weapons[randomWeaponIndex].name;


console.log('It was "'+ theSuspect +'" in the '+ theRoom +' with the '+ theWeapon +'.');
