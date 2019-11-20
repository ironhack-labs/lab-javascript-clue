// ITERATION 1

// Suspects Collection

function Suspect(first, last, occupation, age, description, image, color) {
  this.firstName = first;
  this.lastName = last;
  this.occupation = occupation
  this.age = age;
  this.description = description;
  this.image = image;
  this.color = color;
};

var mrGreen = new Suspect('Jacob', 'Green', 'Entrepreneur', 45, 'He has a lot of connections', 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg','green');

var drOrchid = new Suspect('Doctor', 'Orchid', 'Scientist', 26, 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'white');

var profPlum = new Suspect('Victor', 'Plum', 'Designer', 22, 'Billionaire video game designer', 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', 'purple');

var missScarlet = new Suspect('Kasandra', 'Scarlet', 'Actor', 31, 'She is an A-list movie star with a dark past', 'https://www.radiotimes.com/uploads/images/Original/111967.jpg', 'red');

var mrsPeacock = new Suspect('Eleanor', 'Peacock', 'Socialite', 36, 'She is from a wealthy family and uses her status and money to earn popularity', 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', 'blue');

var mrMustard = new Suspect('Jack', 'Mustard', 'Retired Football player', 62, 'He is a former football player who tries to get by on his former glory', ' https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg', 'yellow');


// Suspects Array
const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];


// Weapons Collection

function Weapons(name, weight){
  this.nameOf = name;
  this.weightOf = weight;
}

// weapon variables

var ropeWeapon = new Weapons('rope', 10);

var knifeWeapon = new Weapons('knife', 8);

var candlestickWeapon = new Weapons('candlestick', 2);

var dumbbellWeapon = new Weapons('dumbbell', 30);

var poisonWeapon = new Weapons('poison', 2);

var axeWeapon = new Weapons('axe', 15);

var batWeapon = new Weapons('bat', 13);

var trophyWeapon = new Weapons('trophy', 25);

var pistolWeapon = new Weapons('pistol', 20);


var ropeWeapon = new Weapons('rope', 10);

const weaponsArray = [ropeWeapon, knifeWeapon, candlestickWeapon, dumbbellWeapon, poisonWeapon, axeWeapon, batWeapon, trophyWeapon, pistolWeapon]

// Rooms Collection

function Rooms(name){
  this.roomName = name
}

var diningRoom = new Rooms('Dining Room');

var conservatoryRoom = new Rooms('Conservatory');

var kitchenRoom = new Rooms('Kitchen');

var studyRoom = new Rooms('Study');

var libraryRoom = new Rooms('Library');

var billiardRoom = new Rooms('Billiard Room');

var loungeRoom = new Rooms('Lounge');

var ballRoom = new Rooms('Ballroom');

var hallRoom = new Rooms('Hall');

var spaRoom = new Rooms('Spa')

var livingRoom = new Rooms('Living Room');

var observatoryRoom = new Rooms('Observatory');

var theaterRoom = new Rooms('Theater');

var guestHouse = new Rooms('Guest House')

var patioRoom = new Rooms('Patio')

const roomsArray = [diningRoom, conservatoryRoom, kitchenRoom, studyRoom, libraryRoom, billiardRoom, loungeRoom, ballRoom, hallRoom, spaRoom, livingRoom, observatoryRoom, theaterRoom, guestHouse, patioRoom]


// ITERATION 2
function selectRandom(arr){
  return arr[Math.floor(Math.random() * arr.length)];
};


function pickMystery(){
  return mysteries; 
}

var mysterySuspects = selectRandom(suspectsArray);

var mysteryWeapons = selectRandom(weaponsArray);

var mysteryRooms = selectRandom(roomsArray)

const mysteries = [mysterySuspects, mysteryWeapons, mysteryRooms]


//console.log(pickMystery());

// ITERATION 3

function revealMystery(){
  return envelope;
}

var envelopeArray = [mysterySuspects.firstName, mysterySuspects.lastName, mysteryWeapons.nameOf, mysteryRooms.roomName]

var envelope = 
  console.log(envelopeArray[0], envelopeArray[1] + ' killed Mr. Boddy with a ' + envelopeArray[2] + ' in the ' + envelopeArray[3] + '.')

console.log(revealMystery())
