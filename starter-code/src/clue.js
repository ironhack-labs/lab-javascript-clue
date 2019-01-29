var mrGreen = {
  first_name: 'Jacob',
  last_name: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation:'Entrepreneur'
};
var drOrchid = {
  first_name:   'Doctor',
  last_name:    'Orchid',
  color:        'white',
  description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age:          26,
  image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  ocupation:   'Scientist'
};
var profPlum = {
  first_name:   'Victor',
  last_name:    'Plum',
  color:        'purple',
  description:  'Billionare video game designer',
  age:          22,
  image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation:   'Designer'
};
var missScarlet = {
  first_name:   'Kasandra',
  last_name:    'Scarlet',
  color:        'red',
  description:  'She is an A-list movie star with a dark past',
  age:          31,
  image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation:   'Actor'
};

var mrsPeacock = {
  first_name:   'Eleanor',
  last_name:    'Peacock',
  color:        'blue',
  description:  'She is from a wealthy family and uses her status and money to earn popularity',
  age:          36,
  image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation:   'Socialité'
};
var mrMustard = {
  first_name:   'Jack',
  last_name:    'Mustard',
  color:        'yellow',
  description:  'He is a former football player who tries to get by on his former glory',
  age:          62,
  image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation:   'Retired Football player'
};

// Weapons
var rope = { name: 'rope', weight: 10};
var knife = { name: 'knife', weight: 8};
var candlestick = {name: 'candlestick', weight: 2 };
var dumbbell = {name: 'dumbbell', weight: 30 };
var poison = { name: 'poison', weight: 2};
var axe = { name: 'axe', weight: 15 };
var bat = { name: 'bat', weight: 13};
var trophy = { name: 'trophy', weight: 25};
var pistol = { name: 'pistol' , weight: 20};





var rooms1 = { name: 'Dinning Room'};
var rooms2 = { name: 'Conservatory'};
var rooms3 = { name: 'Kitchen'};
var rooms4 = { name: 'Study'};
var rooms5 = { name: 'Library'};
var rooms6 = { name: 'Billiard Room'};
var rooms7 = { name: 'Lounge'};
var rooms8 = { name: 'Ballroom'};
var rooms9 = { name: 'Hall'};
var rooms10 = { name: 'Spa'};
var rooms11 = { name: 'Living Room'};
var rooms12 = { name: 'Observatory'};
var rooms13 = { name: 'Theater'};
var rooms14 = { name: 'Guest House'};
var rooms15 = { name: 'Patio'};
    

// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
// Rooms' Collection
var roomsArray = [];
roomsArray.push(rooms1, rooms2, rooms3, rooms4, rooms5, rooms6, rooms7, rooms8, rooms9, rooms10, rooms11, rooms12, rooms13, rooms14, rooms15);
// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);


//creamos un array con los tres tipos de cartas diferentes
var clue = [];
clue.push(charactersArray, roomsArray, weaponsArray);

//randomSelector, seleccionamos una carta al azar
function randomSelector (clue){
  var itemClue = clue[Math.floor(Math.random() * clue.length)];
  if(clue = ""){
    return undefined;
  } else {
    return itemClue;
  }
  

  //return clue;
  //return clue[Math.floor(Math.random() * clue.length)];
}
