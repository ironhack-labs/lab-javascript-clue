// Characters
const characters = {
  mrGreen: {
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation: 'Entrepreneur',
  },
  drOrchid: {
    firstName: 'Doctor',
    lastName: 'Orchid',
    color: 'white',
    description:  `PhD in plant toxicology. Adopted daughter of Mr. Bo'dy`,
    age: 26,
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    ocupation: 'Scientist',
  },
  profPlum: {
    firstName: 'Victor', 
    lastName: 'Plum',
    color: 'purple',
    description: `Billionare video game desi'ner`,
    age: 22,
    image:'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation: 'Designer',
  },
  missScarlet: {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    color: 'red',
    description: `She is an A-list movie star' with a dark past`,
    age: 31,
    image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation: 'Actor',
  },
  mrsPeacock: {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    color: 'blue',
    description: `She is from a wealthy famil'y and uses her status and money to earn popularity`,
    age: 36,
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation: 'Socialité',
  },
  mrMustard: {
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: `He is a former football pla'yer who tries to get by on his former glory`,
    age: 62,
    image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation: 'Retired Football player'
  },
}

// Weapons
const weapons = {
  rope: {weight: 10},
  knife: {weight: 8},
  candlestick: {weight: 2},
  dumbbell: {weight: 30},
  poison: {weight: 2},
  axe: {weight: 15},
  bat: {weight: 13},
  trophy: {weight: 25},
  pistol: {weight: 20},
}

// Rooms
const rooms = {
dinning: 'dinning room',
conservatory: 'conservatory',
kitchen: 'kitchen',
study: 'study',
library: 'library',
billiard: 'billiard room',
lounge: 'lounge',
ballroom: 'ballroom',
hall: 'hall',
spa: 'spa',
living: 'living room',
observatory: 'observatory',
theater: 'theater',
guest: 'guest house',
patio: 'patio',
}

// console.log(characters.mrMustard.age)
// console.log(weapons.trophy.weight)
// console.log(rooms.lounge)


/* After creating the data structure, push every document into their corresponding array. charactersArray, weaponsArray, roomsArray */

function objectsArray(object) {
  let objectArray = [];
  for (const char in object) {
    objectArray.push(char)
    }
    return objectArray;
}

// Characters Collection
let charactersArray = objectsArray(characters);

// Rooms' Collection
let roomsArray = objectsArray(rooms);

// Weapons Collection
let weaponsArray = objectsArray(weapons);

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

// console.log(pickMistery())

/* Finally, we need to reveal the mystery. Create a revealMistery method, that will receive our misteryEnvelope array as an argument and return the revealed mystery like this:

<FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!! */
let misteryEnvelope = pickMistery();

console.log(misteryEnvelope[0])

function revealMistery (array) {
  let char = array[0];
  let weapon = array[1];
  let room = array[2];
  return `${characters[char].firstName} ${characters[char].lastName} killed Mr.Boddy using the ${weapon} in the ${rooms[room]}!!!!`;
}

console.log(revealMistery(misteryEnvelope))
