// Characters

const mrGreen = {
    first_name:   'Jacob',
    last_name:    'Green',
    color:        'green',
    description:  'He has a lot of connections',
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   'Entrepreneur'    
};

const drOrchid = {
    first_name:   'Doctor',
    last_name:    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation:    'Scientist'    
};

const profPlum = {
    first_name:   'Victor',
    last_name:    'Plum',
    color:        'purple',
    description:  'Billionaire video game designer',
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   'Designer'    
};

const missScarlet = {
    first_name:   'Kasandra',
    last_name:    'Scarlet',
    color:        'red',
    description:  'She is an A-list movie star with a dark past',
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   'Actor' 
};

const mrsPeacock = {
    first_name:   'Eleanor',
    last_name:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   'Socialité'    
};

mrMustard = {
    first_name:   'Jack',
    last_name:    'Mustard',
    color:        'yellow',
    description:  'He is a former football player who tries to get by on his former glory',
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   'Retired Football player'    
};

// Weapons

const weapon1 = {name: 'rope', weight: 10};
const weapon2 = {name: 'knife', weight: 8};
const weapon3 = {name: 'knife', weight: 8};
const weapon4 = {name: 'candlestick', weight: 2};
const weapon5 = {wname: 'dumbbell', weight: 30};
const weapon6 = {name: 'poison', weight: 2};
const weapon7 = {name: 'axe', weight: 15};
const weapon8 = {name: 'bat', weight: 13};
const weapon9 = {name: 'trophy', weight: 25};
const weapon10 = {name: 'pistol', weight: 20};

// Rooms
const room1 = {name: 'Dining Room'};
const room2 = {name: 'Conservatory'};
const room3 = {name: 'Kitchen'};
const room4 = {name: 'Study'};
const room5 = {name: 'Library'};
const room6 = {name: 'Billiard Room'};
const room7 = {name: 'Lounge'};
const room8 = {name: 'Ballroom'};
const room9 = {name: 'Hall'};
const room10 = {name: 'Spa'};
const room11 = {name: 'Living Room'};
const room12 = {name: 'Observatory'};
const room13 = {name: 'Theater'};
const room14 = {name: 'Guest House'};
const room15 = {name: 'Patio'};


// Characters Collection
const charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Collection
const roomsArray = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15];

// Weapons Collection
const weaponsArray = [weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9, weapon10];

// let character = "";
// let room = "";
// let weapon = "";

function randomSelector (arr){
    if(arr.length === 0){
        return undefined;
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

// let mysteryEnvelop = "";
// function pickMystery (){
//     let character = randomSelector(charactersArray);
//     let room = randomSelector(roomsArray);
//     let weapon = randomSelector(weaponsArray);
//     return mysteryEnvelop =  {character: , room, weapon};

// pickMystery(character, room, weapon);



function pickMystery(){
    return {
        suspect: randomSelector(charactersArray),
        weapon: randomSelector(weaponsArray),
        room: randomSelector(roomsArray)
    }
};

function revealMystery(pickMystery) {
    return `${pickMystery.suspect.first_name} ${pickMystery.suspect.last_name} killed Mr. Boddy using the ${pickMystery.weapon.name} in the ${pickMystery.room.name}!!!`;
 };

// function revealMystery = (mysteryEnvelope) => {
//     return `${mysteryEvelope.suspect.first_name} ${mysteryEvelope.suspect.last_name} killed Mr. Boddy using the ${mysteryEvelope.weapon.name} in the ${mysteryEvelope.room.name}!!!`
// };

