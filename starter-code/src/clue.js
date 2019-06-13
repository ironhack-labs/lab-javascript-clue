// Characters

let mrGreen = {
  first_name:   'Jacob',
  last_name:    'Green',
  color:        'green',
  description:  'He has a lot of connections',
  age:          45,
  image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation:   'Entrepreneur',
}

let drOrchid = {
  first_name:   'Doctor',
  last_name:    'Orchid',
  color:        'white',
  description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age:          26,
  image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  ocupation:   'Scientist'
}

let profPlum = {
  first_name:   'Victor',
  last_name:    'Plum',
  color:        'purple',
  description:  'Billionare video game designer',
  age:          22,
  image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation:   'Designer',

}

let missScarlet = {
  first_name:   'Kasandra',
  last_name:    'Scarlet',
  color:        'red',
  description:  'She is an A-list movie star with a dark past',
  age:          31,
  image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation:   'Actor',
}

let mrsPeacock = {
  first_name:   'Eleanor',
  last_name:    'Peacock',
  color:        'blue',
  description:  'She is from a wealthy family and uses her status and money to earn popularity',
  age:          36,
  image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation:   'Socialité',
}

let mrMustard = {
  first_name:   'Jack',
  last_name:    'Mustard',
  color:        'yellow',
  description:  'He is a former football player who tries to get by on his former glory',
  age:          62,
  image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation:   'Retired Football player',

};

// Weapons

let weapon1 = {name: 'rope', weight: 10,};
let weapon2 = {name: 'knife', weight: 8,};
let weapon3 = {name: 'candlestick', weight: 2,};
let weapon4 = {name: 'dumbbell',  weight: 30};
let weapon5 = {name: 'poison', weight: 2};
let weapon6 = {name: 'aleteweapon', weight: 15};
let weapon7 = {name: 'bat', weight: 13};
let weapon8 = {name: 'trophy', weight: 25};
let weapon9 = {name: 'pistol' , weight: 20};


// Rooms
let room1 = {name:  'Dinning Room'};     
let room2 = {name:  'Conservatory'};     
let room3 = {name:  'Kitchen'};     
let room4 = {name:  'Study'};     
let room5 = {name:  'Library'};     
let room6 = {name:  'Billiard Room'};     
let room7 = {name:  'Lounge'};     
let room8 = {name:  'Ballroom'};     
let room9 = {name:  'Hall'};     
let room10 = {name:  'Spa'};     
let room11 = {name:  'Living Room'};     
let room12 = {name:  'Observatory'};     
let room13 = {name:  'Theater'};     
let room14 = {name:  'Guest House'};     
let room15 = {name:  'Patio'};     


// Characters Collection
let charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
let roomsArray = [room1, room2, room3,room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14];

// Weapons Collection

let weaponsArray = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9];

function randomSelector(array) {
    index = Math.floor(Math.random() * array.length);
    return array[index];
} 


function pickMistery() {
  let misteryEnvelope = [];
  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsArray));
  misteryEnvelope.push(randomSelector(roomsArray));
  console.log(misteryEnvelope)
  return misteryEnvelope;
}; 

function revealMistery(misteryEnvelope) {
 return `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`
}