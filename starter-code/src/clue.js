// Characters
function createCharacter(first_name, last_name, color, description, age, image, occupation){
    return {
        first_name,
        last_name,
        color,
        description,
        age,
        image,
        occupation,
    };
}

function createWeapon(name, weight){
    return {
        name,
        weight
    };
}

function createRoom(name){
    return {
        name
    };
}

function randomBetween(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomSelector(arreglo){
    if(arreglo.length == 0)
        return undefined;
    return arreglo[randomBetween(0, arreglo.length-1)];
}



const mrGreen = createCharacter(
    'Jacob',
    'Green',
    'green',
    'He has a lot of connections',
    45,
    'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    'Entrepreneur'
);

const drOrchid = createCharacter(
    'Doctor',
    'Orchid',
    'white',
    'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    26,
    'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    'Scientist',
);

const profPlum = createCharacter(
    'Victor',
    'Plum',
    'purple',
    'Billionaire video game designer',
    22,
    'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    'Designer',
);


const missScarlet = createCharacter(
    'Kasandra',
    'Scarlet',
    'red',
    'She is an A-list movie star with a dark past',
    31,
    'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    'Actor',
);

const mrsPeacock = createCharacter(
    'Eleanor',
    'Peacock',
    'blue',
    'She is from a wealthy family and uses her status and money to earn popularity',
    36,
    'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    'Socialité',
);

const mrMustard = createCharacter(
    'Jack',
    'Mustard',
    'yellow',
    'He is a former football player who tries to get by on his former glory',
    62,
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    'Retired Football player  ',
);

const rope = createWeapon('rope', 10);
const knife = createWeapon('knife', 8);
const candlestick = createWeapon('candlestick', 2);
const dumbbell = createWeapon('dumbbell', 30);
const poison = createWeapon('poison', 2);
const axe = createWeapon('axe', 15);
const bat = createWeapon('bat', 13);
const trophy = createWeapon('trophy', 25);
const pistol = createWeapon('pistol', 20);



// Characters Collection
const charactersArray = [
    mrGreen,
    drOrchid,
    profPlum,
    missScarlet,
    mrsPeacock,
    mrMustard
];

const dining = createRoom('Dining Room')
const conservatory = createRoom('Conservatory')
const kitchen = createRoom('Kitchen')
const study = createRoom('Study')
const library = createRoom('Library')
const billiard = createRoom('Billiard Room')
const lounge = createRoom('Lounge')
const ballroom = createRoom('Ballroom')
const hall = createRoom('Hall')
const spa = createRoom('Spa')
const living = createRoom('Living Room')
const observatory = createRoom('Observatory')
const theater = createRoom('Theater')
const guest = createRoom('Guest House')
const patio = createRoom('Patio')

// Rooms Collection
const roomsArray = [
    dining,
    conservatory,
    kitchen,
    study,
    library,
    billiard,
    lounge,
    ballroom,
    hall,
    spa,
    living,
    observatory,
    theater,
    guest,
    patio
];

// Weapons Collection
const weaponsArray = [
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

function pickMystery(){
    return {
        suspect: randomSelector(charactersArray),
        weapon: randomSelector(weaponsArray),
        room: randomSelector(roomsArray)
    };
}

let mysteryEnvelope = pickMystery();

function revealMystery(mysteryEnvelope){
    // return "<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <PLACE>!!!!";
    return `${mysteryEnvelope.suspect.first_name} ${mysteryEnvelope.suspect.last_name} killed Mr. Boddy using the ${mysteryEnvelope.weapon.name} in the ${mysteryEnvelope.room.name}!!!!`;
}
