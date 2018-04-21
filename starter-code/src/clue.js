    // Characters
var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          "45",
image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
occupation:   'Entrepreneur'
};

let drOrchid ={
frst_name:   'Doctor',
lst_name:    'Orchid',
color:        'white',
description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
age:          '26',
image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
ocupation:   'Scientist'
};

let profPlum = {
first_name:   'Victor',
last_name:    'Plum',
color:        'purple',
description:  'Billionare video game designer',
age:          '22',
image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
occupation:   'Designer',
};

let missScarlet = {
first_name:   'Kasandra',
last_name:    'Scarlet',
color:        'red',
description:  'She is an A-list movie star with a dark past',
age:          '31',
image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
occupation:   'Actor',
};

let mrsPeacock = {
first_name:   'Eleanor',
last_name:    'Peacock',
color:        'blue',
description:  'She is from a wealthy family and uses her status and money to earn popularity',
age:          '36',
image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
occupation:   'Socialité',
};
var mrMustard = {
first_name:   'Jack',
last_name:    'Mustard',
color:        'yellow',
description:  'He is a former football player who tries to get by on his former glory',
age:          '62',
image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
occupation:   'Retired Football player',
};

// Weapons

const rope= {name: "rope", weight: 10};
const knife = {name: "knife", weight: 8};
const candlestick = {name: "candlestick", weight: 2};
const dumbbell = {name: 'dumbbell', weight: 30};
const poison = {name: 'poison', weight: 2};
const axe = {name: 'axe', weight: 15};
const bat = {name: 'bat', weight: 13};
const trophy = {name: 'trophy', weight: 25};
const pistol = {name: 'pistol', weight: 20};

// Rooms
const DiningRoom = {name: 'Dinning Room'};
const Conservatory = {name: 'Conservatory'};
const Kitchen = {name: 'Kitchen'};
const Study = {name: 'Study'};
const Library = {name: 'Library'};
const Lounge = {name: 'Lounge'};
const Ballroom = {name: 'Ballroom'};
const Hall = {name: 'Hall'};
const Spa = {name: 'Spa'};
const LivingRoom = {name: 'Living Room'};
const Observatory = {name: 'Observatory'};
const Theater = {name: 'Theater'};
const GuestHouse = {name: 'GuestHouse'};
const Patio = {name: 'Patio'};


// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
var roomsArray = [
    DiningRoom,
    Conservatory,
    Kitchen,
    Study,
    Library,
    Lounge,
    Ballroom,
    Hall,
    Spa,
    LivingRoom,
    Observatory,
    Theater,
    GuestHouse,
    Patio,
];

// Weapons Collection
var weaponsArray = [
rope,
knife,
candlestick,
dumbbell,
poison,
axe,
bat,
trophy,
pistol,
];


function randomSelector(array) {
    return array[Math.floor(Math.random()* array.length)]
  }


// var misteryEnvelope = pickMistery(charactersArray, weaponsArray, roomsArray);
// function pickMistery = (characters, weapons, rooms) {
//   var misteryEnvelope = [randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray)];
//   return misteryEnvelope;
// };

function pickMistery (characters, weapons, rooms) {
    misteryEnvelope = [
    randomSelector(charactersArray),
    randomSelector(weaponsArray),
    randomSelector(roomsArray),
    ];
    return misteryEnvelope;
};

revealMistery = function (misteryEnvelope) {
    var output = misteryEnvelope[0].first_name+" "+misteryEnvelope[0].last_name+" killed Mr.Boddy using the "+misteryEnvelope[1].name+" in the "+misteryEnvelope[2].name+"!!!!";
    return output;
};

