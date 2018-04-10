// characters 

var mrGreen = {
  first_name: 'Jacob',
  last_name: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image:
    'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation: 'Entrepreneur'
};

var drOrchid = {
  first_name: 'Doctor',
  last_name: 'Orchid',
  color: 'white',
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age: 26,
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  occupation: 'Scientist'
};

var profPlum = {
  first_name: 'Victor',
  last_name: 'Plum',
  color: 'purple',
  description: 'Billionare video game designer',
  age: '22',
  image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation: 'Designer'
};

var missScarlet = {
  first_name: 'Kasandra',
  last_name: 'Scarlet',
  color: 'red',
  description: 'She is an A-list movie star with a dark past',
  age: 31,
  image: ' https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation: 'Actor'
};

var mrsPeacock = {
  first_name: 'Eleanor',
  last_name: 'Peacock',
  color: 'blue',
  description:
    'She is from a wealthy family and uses her status and money to earn popularity',
  age: 36,
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation: 'Socialité'
};

var mrMustard = {
  first_name: 'Jack',
  last_name: 'Mustard',
  color: 'yellow',
  description:
    'He is a former football player who tries to get by on his former glory',
  age: 62,
  image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation: 'Retired Football player'
};

// weapons
var rope = { name: 'rope', weight: 10 };
var knife = { name: 'knife', weight: 8 };
var candlestick = { name: 'candlestick', weight: 2 };
var dumbbell = { name: 'dumbbell', weight: 30 };
var poison = { name: 'poison', weight: 2 };
var axe = { name: 'axe', weight: 15 };
var bat = { name: 'bat', weight: 13 };
var trophy = { name: 'trophy', weight: 25 };
var pistol = { name: 'pistol', weight: 20 };


// rooms
var diningRoom = { name: 'Dining Room' };
var conservatory = { name: 'Conservatory' };
var kitchen = { name: 'Kitchen' };
var study = { name: 'Study' };
var library = { name: 'Library' };
var billiardRoom = { name: 'Billiard Room' };
var lounge = { name: 'Lounge' };
var ballroom = { name: 'Ballroom' };
var hall = { name: 'Hall' };
var spa = { name: 'Spa' };
var livingRoom = { name: 'Living Room' };
var observatory = { name: 'Observatory' };
var Theater = { name: 'Theater' };
var guestHouse = { name: 'Guest House' };
var patio = { name: 'Patio' };

// push weapons to array
var weaponsArray = [];
weaponsArray.push(
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
);

// push characters to array
var charactersArray = [];
charactersArray.push(
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
);

// push rooms to array
var roomsArray = [];
roomsArray.push(
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  Theater,
  guestHouse,
  patio
);
// console.log(roomsArray);

// function to return a random result
function randomSelector(arr) {
  var rand = arr[Math.floor(Math.random() * arr.length)];
  return rand;
}

// the envelope that contains the mystery
var misteryEnvelope = [];

// function to pick one card from characters, weapons and rooms and push to the envelope
function pickMistery() {
  misteryEnvelope = [];
  theChar = randomSelector(charactersArray);
  misteryEnvelope.push(theChar);
  theWeapon = randomSelector(weaponsArray);
  misteryEnvelope.push(theWeapon);
  theRoom = randomSelector(roomsArray);
  misteryEnvelope.push(theRoom);
  return misteryEnvelope;
}

// function to reveal the mystery with proper formatting
function revealMistery(misteryEnvelope) {
  return (
    misteryEnvelope[0].first_name +
    ' ' +
    misteryEnvelope[0].last_name +
    ' ' +
    'killed Mr.Boddy using the ' +
    misteryEnvelope[1].name +
    ' in the ' +
    misteryEnvelope[2].name +
    '!!!!'
  );
}

// console log the result
var theMistery = pickMistery();
console.log(revealMistery(theMistery));