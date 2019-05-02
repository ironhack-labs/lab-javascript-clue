

// Characters
let mrGreen = {
        first_name:   'Jacob',
        last_name:    'Green',
        color:        'green',
        description:  'He has a lot of connections',
        age:          45,
        image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        occupation:   'Entrepreneur',
};


let drOrchid = {
        first_name:   'Doctor',
        last_name:    'Orchid',
        color:        'white',
        description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        age:          26,
        image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        ocupation:    'Scientist',
};

let profPlum = {
        first_name:   'Victor',
        last_name:    'Plum',
        color:        'purple',
        description:  'Billionare video game designer',
        age:          22,
        image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
        occupation:   'Designer',
};

let missScarlet = {
        first_name:   'Kasandra',
        last_name:    'Scarlet',
        color:        'red',
        description:  'She is an A-list movie star with a dark past',
        age:          31,
        image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',

        occupation:   'Actor',
};

let mrsPeacock = {
        first_name:   'Eleanor',
        last_name:    'Peacock',
        color:        'blue',
        description:  'She is from a wealthy family and uses her status and money to earn popularity',
        age:          36,
        image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        occupation:   'Socialité',
};

let mrMustard = {
        first_name:   'Jack',
        last_name:    'Mustard',
        color:        'yellow',
        description:  'He is a former football player who tries to get by on his former glory',
        age:          62,
        image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
        occupation:   'Retired Football player',
};

//array characters

let characters = [
        mrGreen,
        drOrchid,
        profPlum,
        missScarlet,
        mrsPeacock,
        mrMustard,
];


// Weapons
let rope = {name: 'rope', weight: 10};
let knife = {name: 'knife', weight: 8};
let candlestick = {name: 'candlestick',  weight: 2};
let dumbbell = {name: 'dumbbell', weight: 30};
let poison = {name: 'poison',  weight: 2};
let axe = {name: 'axe', weight: 15};
let bat = {name: 'bat', weight: 13};
let trophy = {name: 'trophy', weight: 25};
let pistol = {name: 'pistol', weight: 20};

//array weapons

let weapons = [
        rope,
        knife,
        candlestick,
        dumbbell,
        poison,
        axe,
        bat,
        trophy,
        pistol
];


let room = {
        dinRom: 'Dinning Room',
        cons: 'Conservatory',
        kit: 'Kitchen',
        stu: 'Study',
        libra: 'Library',
        billia: 'Billiard Room',
        loun: 'Lounge',
        ball: 'Ballroom',
        hall: 'Hall',
        spa: 'Spa',
        livin: 'Living Room',
        obse: 'Observatory',
        thea: 'Theater',
        guest: 'Guest House',
        pat: 'Patio',
};

// Characters Collection
var charactersArray = [];
charactersArray.push(...characters);

// Rooms' Collection
var roomsArray = [];
roomsArray.push(room);
// Weapons Collection
var weaponsArray = [];
weaponsArray.push(weapons);

let mistery = [charactersArray[0],roomsArray[0],weaponsArray[0]]
//functions

function randomSelector (randomsel){
  if (randomsel == 0){
    return undefined
  }
  let rand = ((Mat.floor(Mat.random))*randomsel.length);
  return randomsel (rand);
};

function pickMistery (){
        //characters
        let charactersCall = charactersArray(randomSelector);

        //rooms
        let roomsCall = roomsArray(randomSelector);

        //weapons

        let weaponsCall = weaponsArray(randomSelector);

        return misteryEnvelope [charactersCall[rand], roomsCall[rand],
                weaponsCall[rand]];
}

function revealMistery (misteryEnvelope){

};

/*
charactersArray.push(...characters);

roomsArray.push(...rooms);

weaponsArray.push(...weapons);

charactersArray [2];
*/





