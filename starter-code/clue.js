
var mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation: 'Enterpreneur'
};

var drOrchid = {
  firstName: 'Doctor',
  lastName: 'Orchid',
  color: 'white',
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age: 26,
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  occupation: 'Scientist'
};

var profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'Billionare video game designer',
  age: '22',
  image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation: 'Designer'
};

var missScarlet = {
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is an A-list movie star with a dark past',
  age: '31',
  image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation: 'Actor'
};

var mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  age: '36',
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation: 'Socialité'
};

var mrMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a former football player who tries to get by on his former glory',
  age: '62',
  image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation: 'Retired Football player'
};


// Deck of cards

var suspects = ['mrGreen','drOrchid','profPlum','missScarlet','mrsPeacock','mrMustard'];
var weapons = ['rope','Knife','candleStick','dumbbell','poison','axe','bat','trophy','pistol'];
var rooms = ['dinningRoom','conservatory','kitchen','study','library','billiardRoom','lounge','ballRoom','hall','spa','livingRoom','observatory','theater','guestHouse','patio'];

function random_selector(array) {
  var randomIndex = Math.floor(Math.random()*array.length);
  return array[randomIndex];
}


function pick_mistery() {
  var mistery=[];
  mistery[0] = random_selector(suspects);
  mistery[1] = random_selector(weapons);
  mistery[2] = random_selector(rooms);
  return mistery;
}

function reveal_mistery(mistery) {
  console.log("the murder was " + mistery[0] + ' and the weapon used was a ' + mistery[1] + ' in the ' + mistery[2]);
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
