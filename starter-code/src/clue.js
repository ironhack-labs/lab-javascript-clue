// Characters
const mrGreen = {
  first_name:   'Jacob',
  last_name:    'Green',
  color:        'green',
  description:  'He has a lot of connections',
  age:          45,
  image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation:   'Entrepreneur'
  }
  
const drOrchid = {
  frst_name:   'Doctor',
  lst_name:    'Orchid',
  color:        'white',
  description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age:          26,
  image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  ocupation:   'Scientist'
  }
  
const profPlum = {
  first_name:   'Victor',
  last_name:    'Plum',
  color:        'purple',
  description:  "Billionare video game designer",
  age:          22,
  image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation:   'Designer'
  }
  
const missScarlet = {
  first_name:   'Kasandra',
  last_name:    'Scarlet',
  color:        'red',
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation:   'Actor'
  }
  
const mrsPeacock = {
  first_name:   'Eleanor',
  last_name:    'Peacock',
  color:        'blue',
  description:  'She is from a wealthy family and uses her status and money to earn popularity',
  age:          36,
  image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation:   'Socialité'
  }
  
const mrMustard = {
  first_name:   'Jack',
  last_name:    'Mustard',
  color:        'yellow',
  description:  'He is a former football player who tries to get by on his former glory',
  age:          62,
  image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation:   'Retired Football player'
  }
  
// Weapons
const rope = {name: 'rope', weight: 10}
const knife = {name: 'knife', weight: 8}
const candlestick = {name: 'candlestick', weight: 2}
const dumbbell = {name: 'dumbbell', weight: 30}
const poison = {name: 'poison', weight: 2}
const axe = {name: 'axe', weight: 15}
const bat = {name: 'bat', weight: 13}
const trophy = {name: 'trophy', weight: 25}
const pistol = {name: 'pistol', weight: 20}
  
// Rooms
const Din = {name: 'Dinning Room'}
const Con = {name: 'Conservatory'}
const Kit = {name: 'Kitchen'}
const Stu = {name: 'Study'}
const Lib = {name: 'Library'}
const Bil = {name: 'Billiard Room'}
const Lou = {name: 'Lounge'}
const Bal = {name: 'Ballroom'}
const Hal = {name: 'Hall'}
const Spa = {name: 'Spa'}
const Liv = {name: 'Living Room'}
const Obs = {name: 'Observatory'}
const The = {name: 'Theater'}
const Gue = {name: 'Guest House'}
const Pat = {name: 'Patio'}
  
  
// Characters Collection
let charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
  
// Rooms' Collection
let roomsArray = [Din, Con, Kit, Stu, Lib, Bil, Lou, Bal, Hal, Spa, Liv, Obs, The, Gue, Pat];
  
// Weapons Collection
let weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

//Creating the mistery
let randomSelector = function(array) {
  let element = array[Math.floor(Math.random()*array.length)];
  return element;
}
let pickMistery = function() {
  let misteryEnvelope = [];
  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsArray));
  misteryEnvelope.push(randomSelector(roomsArray));

  return misteryEnvelope;
}

// Revealing the mistery
let revealMistery = function(misteryEnvelope) {
  let mystery = '<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!'
  mystery = mystery.replace('<FIRST NAME>', misteryEnvelope[0].first_name);
  mystery = mystery.replace('<LAST NAME>', misteryEnvelope[0].last_name);
  mystery = mystery.replace('<WEAPON>', misteryEnvelope[1].name);
  mystery = mystery.replace('<PLACE>', misteryEnvelope[2].name);
  return mystery;
}