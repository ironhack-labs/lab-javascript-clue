// Suspects
let mrGreen = {
    first_name:   'Jacob',
    last_name:    'Green',
    color:        'green',
    description:  'He has a lot of connections',
    age:          '45',
    image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation:   'Entrepreneur'
  };
let drOrchid = {
    first_name:   'Doctor',
    last_name:    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          '26',
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation:   'Scientist'
  };
let profPlum = {
    first_name:   'Victor',
    last_name:    'Plum',
    color:        'purple',
    description:  'Billionare video game designer',
    age:          '22',
    image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation:   'Designer'
  };
let missScarlet = {
    first_name:   'Kasandra',
    last_name:    'Scarlet',
    color:        'red',
    description:  'She is an A-list movie star with a dark past',
    age:          '31',
    image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation:   'Actor'
  };
let mrsPeacock = {
    first_name:   'Eleanor',
    last_name:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          '36',
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité'
  };
let mrMustard = {
    first_name:   'Jack',
    last_name:    'Mustard',
    color:        'yellow',
    description:  'He is a former football player who tries to get by on his former glory',
    age:          '62',
    image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation:   'Retired Football player'
  };

// Weapons
const rope        = { name: 'rope',         weight: 10 };
const knife       = { name: 'knife',        weight: 8 };
const candlestick = { name: 'candlestick',  weight: 2 };
const dumbbell    = { name: 'dumbbell',     weight: 30 };
const poison      = { name: 'poison',       weight: 2 };
const axe         = { name: 'axe',          weight: 15 };
const bat         = { name: 'bat',          weight: 13 };
const trophy      = { name: 'trophy',       weight: 25 };
const pistol      = { name: 'pistol',       weight: 20 };
// Rooms
const diningRoom   = { name: 'Dinning Room' };
const conservatory = { name: 'Conservatory' };
const kitchen      = { name: 'Kitchen' };
const study        = { name: 'Study' };
const library      = { name: 'Library' };
const billiardRoom = { name: 'Billiard Room' };
const lounge       = { name: 'Lounge' };
const ballroom     = { name: 'Ballroom' };
const hall         = { name: 'Hall' };
const spa          = { name: 'Spa' };
const livingRoom   = { name: 'Living Room' };
const observatory  = { name: 'Observatory' };
const theater      = { name: 'Theater' };
const guestHouse  =  { name: 'Guest House' };
const patio        = { name: 'Patio' };

// ITERATION 1



// Suspects Collection
const suspectsArray = [
    mrGreen, dr0rchid, profPlum, missScarlet, mrsPeacock, mrMustard
];
// Rooms Collection
const roomsArray = [
    diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio
];
// Weapons Collection
const weaponsArray = [
    rope, knife, candlestick, dumbbell, posion, axe, bat, trophy, pistol
];
// ITERATION 2
// random selector
function selectRandom(arr) {
    var random = Math.floor((Math.random() * array.length) + 1);
    return arr[random]
}
// create the mystery
function pickMystery() {
    var picksus = selectRandom(suspectsArray);
    var pickroom = selectRandom(roomsArray);
    var pickwea = selectRandom(weaponsArray);
    return {
        suspect: picksus,
        room: pickroom,
        weapon: pickwea,
    }
}
// ITERATION 3
funciton revealMystery(env) {
    return env.suspect.first_name + ' ' + env.suspect.last_name + ' killed Mr.Boddy using the ' + evn.weapon + ' in the ' + evn.room + '!';
}