const mrGreen = {
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation: 'Entrepreneur'
};

const drOrchid = {
    firstName: 'Doctor',
    lastName: 'Orchid',
    color: 'white',
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age: 26,
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation: 'Scientist'
};

const profPlum = {
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    description: 'Billionare video game designer',
    age: 22,
    image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation: 'Designer'
};

const missScarlet = {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    color: 'red',
    description: 'She is an A-list movie star with a dark past',
    age: 31,
    image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation: 'Actor'
};

const mrsPeacock = {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    color: 'blue',
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    age: 36,
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation: 'Socialité'
};

const mrMustard = {
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: 'He is a former football player who tries to get by on his former glory',
    age: 62,
    image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation: 'Retired Football player'
};

// Weapons
const rope = {
    name: 'rope',
    weight: 10
};

const knife = {
    name: 'knife',
    weight: 8
};

const candleStick = {
    name: 'candlestick',
    weight: 2
};

const dumbBell = {
    name: 'dumbbell',
    weight: 30
};

const poison = {
    name: 'poison',
    weight: 2
};

const axe = {
    name: 'axe',
    weight: 15
};

const bat = {
    name: 'bat',
    weight: 13
};

const trophy = {
    name: 'trophy',
    weight: 25
};

const pistol = {
    name: 'pistol',
    weight: 20
};


// Rooms

const dinningRoom = {name: 'Dinning Room'};
const conservatory = {name: 'Conservatory'};
const kitchen = {name: 'Kitchen'};
const study = {name: 'Study'};
const library = {name: 'Library'};
const billiardRoom = {name: 'Billiard Room'};
const lounge = {name: 'Lounge'};
const ballroom = {name: 'Ballroom'};
const hall = {name: 'Hall'};
const spa = {name: 'Spa'};
const livingRoom = {name: 'Living Room'};
const observatory = {name: 'Observatory'};
const theater = {name: 'Theater'};
const guestHouse = {name: 'Guest House'};
const patio = {name: 'Patio'};


// ITERATION 1

// Suspects Collection
const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard,];

// Rooms Collection
const roomsArray = [dinningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

// Weapons Collection
const weaponsArray = [rope, knife, candleStick, dumbBell, poison, axe, bat, trophy, pistol];

// ITERATION 2

const selectRandom = (arr) => {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
};

selectRandom(suspectsArray);


const pickMystery = () => {
    let newObj = {};
    newObj.suspect = selectRandom(suspectsArray);
    newObj.weapon = selectRandom(weaponsArray);
    newObj.room = selectRandom(roomsArray);
    return newObj;
};

pickMystery();

// ITERATION 3

const revealMystery = (obj) => {

    let nomSuspect = obj.suspect.firstName;
    let cognomSuspect = obj.suspect.lastName;
    let arma = obj.weapon.name;
    let hab = obj.room.name;
    return `${nomSuspect} ${cognomSuspect} killed Mr. Boddy using the ${arma} in the ${hab}!`;
};

const mystery = pickMystery();
console.log(revealMystery(mystery));
