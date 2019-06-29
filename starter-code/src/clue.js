// Characters
const mrGreen = {
  first_name: 'Jacob',
  last_name: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation: 'Entrepreneur',
}

const drOrchid = {
  first_name: 'Doctor',
  last_name: 'Orchid',
  color: 'white',
  description:  `PhD in plant toxicology. Adopted daughter of Mr. Bo'dy`,
  age: 26,
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  ocupation: 'Scientist',
}

const profPlum = {
  first_name: 'Victor', 
  last_name: 'Plum',
  color: 'purple',
  description: `Billionare video game desi'ner`,
  age: 22,
  image:'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation: 'Designer',
}

const missScarlet = {
  first_name: 'Kasandra',
  last_name: 'Scarlet',
  color: 'red',
  description: `She is an A-list movie star' with a dark past`,
  age: 31,
  image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation: 'Actor',
}

const mrsPeacock = {
  first_name: 'Eleanor',
  last_name: 'Peacock',
  color: 'blue',
  description: `She is from a wealthy famil'y and uses her status and money to earn popularity`,
  age: 36,
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation: 'Socialité',
  }

const mrMustard = {
  first_name: 'Jack',
  last_name: 'Mustard',
  color: 'yellow',
  description: `He is a former football pla'yer who tries to get by on his former glory`,
  age: 62,
  image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation: 'Retired Football player'
}

// Weapons
const weapons = [
  {name: 'rope', weight: 10},
  {name: 'knife', weight: 8},
  {name: 'candlestick', weight: 2},
  {name: 'dumbbell', weight: 30},
  {name: 'poison', weight: 2},
  {name: 'axe', weight: 15},
  {name: 'bat', weight: 13},
  {name: 'trophy', weight: 25},
  {name: 'pistol', weight: 20},
]

// Rooms
const rooms = [
  {name: 'Dinning Room'},
  {name: 'Conservatory'},
  {name: 'Kitchen'},
  {name: 'Study'},
  {name: 'Library'},
  {name: 'Billiard Room'},
  {name: 'Lounge'},
  {name: 'Ballroom'},
  {name: 'Hall'},
  {name: 'Spa'},
  {name: 'Living Room'},
  {name: 'Observatory'},
  {name: 'Theater'},
  {name: 'Guest House'},
  {name: 'Patio'}
]

// Characters Collection
let charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard]

// Rooms' Collection
let roomsArray = rooms

// Weapons Collection
let weaponsArray = weapons

/* Random Selector
Create a method randomSelector to randomly select one element from a card stack. The method should receive an array as an argument, and return randomly one of the elements of the array. */
function randomSelector(array) {
  let random = Math.floor(Math.random() * array.length)
  return array[random]
}

/* Create the mystery
We need to create a pickMistery method that will call randomSelector for each card stack, and return an array with the 3 picked cards, a character, a weapon and a room. Our mystery should be stored on a misteryEnvelope variable. */
function pickMistery() {
  let misteryEnvelope = [];
  let char = randomSelector(charactersArray);
  let weapon = randomSelector(weaponsArray);
  let room = randomSelector(roomsArray);
  misteryEnvelope.push(char, weapon, room);
 
  return misteryEnvelope;
}

/* Finally, we need to reveal the mystery. Create a revealMistery method, that will receive our misteryEnvelope array as an argument and return the revealed mystery like this:
<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!! */
function revealMistery (array) {
  let char = array[0];
  let weapon = array[1];
  let room = array[2];
  return `${char.first_name} ${char.last_name} killed Mr.Boddy using the ${weapon.name} in the ${room.name}!!!!`;
}

// let misteryEnvelope = pickMistery();
// console.log(revealMistery(misteryEnvelope))