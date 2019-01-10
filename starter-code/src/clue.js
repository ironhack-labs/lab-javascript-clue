const mrGreen = {
first_name:   'Jacob',
last_name:    'Green',
color:        'green',
description:  'He has a lot of connections',
age:          45,
image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
occupation:   'Entrepreneur'};

const drOrchid = {
first_name:   'Doctor',
last_name:    'Orchid',
color:        'white',
description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
age:          26,
image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
ocupation:   'Scientist'};

const profPlum = {
first_name:   'Victor',
last_name:    'Plum',
color:        'purple',
description:  'Billionare video game designer',
age:          22,
image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
occupation:   'Designer'};

const missScarlet =
{first_name:   'Kasandra',
last_name:    'Scarlet',
color:        'red',
description:  'She is an A-list movie star with a dark past',
age:          31,
image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
occupation:   'Actor'};

const mrsPeacock = 
{first_name:   'Eleanor',
last_name:    'Peacock',
color:        'blue',
description:  'She is from a wealthy family and uses her status and money to earn popularity',
age:          36,
image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
occupation:   'Socialité'};

const mrMustard = 
{first_name:   'Jack',
last_name:    'Mustard',
color:        'yellow',
description:  'He is a former football player who tries to get by on his former glory',
age:          62,
image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
occupation:   'Retired Football player'};



// Weapons

const rope = {name: 'rope', weight: 10};
const knife = {name: 'knife', weight: 8};
const candlestick = {name: 'candlestick', weight: 2};
const dumbbell = {name: 'dumbbell', weight: 30};
const poison = {name: 'poison', weight: 2};
const axe = {name: 'axe ', weight: 15};
const bat = {name: 'bat', weight: 13};
const trophy = {name: 'trophy ', weight: 25};
const pistol = {name: 'pistol ', weight: 20};

// Rooms
room1 = {name: 'Dinning Room'};
room2 = {name: 'Conservatory'};
room3 = {name: 'Kitchen'};
room4 = {name: 'Study'};
room5 = {name: 'Library'};
room6 = {name: 'Billiard Room'};
room7 = {name: 'Lounge'};
room8 = {name: 'Ballroom'};
room9 = {name: 'Hall'};
room10 = {name: 'Spa'};
room11 = {name: 'Living Room'};
room12 = {name: 'Observatory'};
room13 = {name: 'Theater'};
room14 = {name: 'Guest House'};
room15 = {name: 'Patio'};


// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
// console.log(charactersArray);

// Rooms' Collection
var roomsArray = [];
roomsArray.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15);
// console.log(roomsArray);

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);
// console.log(weaponsArray);

function randomSelector(array) {
    if (array.length === 1) {
        return array[0];
    } 
    else if (array === []) {
        return undefined;
    }
    else
    {let randomIndex = Math.floor(Math.random() * (array.length));
    return array[randomIndex];}
}

//console.log(randomSelector(weaponsArray));

function pickMistery() {
    let character = randomSelector(charactersArray);
    let weapon = randomSelector(weaponsArray);
    let room = randomSelector(roomsArray);
    let misteryEnvelope = [];
    misteryEnvelope.push(character);
    misteryEnvelope.push(weapon);
    misteryEnvelope.push(room);
    //console.log(character, weapon, room);
    return misteryEnvelope;
}

console.log(pickMistery());

function revealMistery(misteryEnvelope) {
    return misteryEnvelope[0].first_name + ' ' + misteryEnvelope[0].last_name + ' killed Mr.Boddy using the ' + misteryEnvelope[1].name + ' in the ' + misteryEnvelope[2].name + '!!!!'
}

console.log(revealMistery(misteryEnvelope));
