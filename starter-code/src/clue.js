
//characters

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
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age: 26,
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation: 'Scientist',
}

const profPlum = {
    first_name: 'Victor',
    last_name: 'Plum',
    color: 'purple',
    description: 'Billionare video game designer',
    age: 22,
    image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation: 'Designer',
}

const missScarlet = {
    first_name: 'Kasandra',
    last_name: 'Scarlet',
    color: 'red',
    description: 'She is an A-list movie star with a dark past',
    age: 31,
    image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation: 'Actor',
}

const mrsPeacock = {
    first_name: 'Eleanor',
    last_name: 'Peacock',
    color: 'blue',
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    age: 36,
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation: 'Socialité',
}

const mrMustard = {
    first_name: 'Jack',
    last_name: 'Mustard',
    color: 'yellow',
    description: 'He is a former football player who tries to get by on his former glory',
    age: 62,
    image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation: 'Retired Football player',
}

//weapons

const w1 = {
    name: 'rope',
    weight: 10,
};
const w2 = {
    name: 'knife',
    weight: 8,
};
const w3 = {
    name: 'candlestick',
    weight: 2,
};
const w4= {
    name: 'dumbbell',
    weight: 30,
};
const w5 = {
    name: 'poison',
    weight: 2,
};
const w6 = {
    name: 'axe',
    weight: 15,
};
const w7 = {
    name: 'bat',
    weight: 13,
};
const w8 = {
    name: 'trophy',
    weight: 25,
};
const w9 = {
    name: 'pistol',
    weight: 20,
};

// Rooms

let r1 = {
    name: 'Dinning Room',
};
let r2 = {
    name: 'Conservatory',
};
let r3 = {
    name: 'Kitchen',
};
let r4 = {
    name: 'Study',
};
let r5 = {
    name: 'Library',
};
let r6 = {
    name: 'Billiard Room',
};
let r7 = {
    name: 'Lounge',
};
let r8 = {
    name: 'Ballroom',
};
let r9 = {
    name: 'Hall',
};
let r10 = {
    name: 'Spa',
};
let r11 = {
    name: 'Living Room',
};
let r12 = {
    name: 'Observatory',
};
let r13 = {
    name: 'Theater',
};
let r14 = {
    name: 'Guest House',
};
let r15 = {
    name: 'Patio',
};

// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
var roomsArray = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15];

// Weapons Collection
var weaponsArray = [w1, w2, w3, w4, w5, w6, w7, w8, w9];

function randomSelector(arr) {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

function pickMistery() {
    let misteryEnvelope = [];
    misteryEnvelope.push(randomSelector(charactersArray));
    misteryEnvelope.push(randomSelector(weaponsArray));
    misteryEnvelope.push(randomSelector(roomsArray));
    return misteryEnvelope;
};

function revealMistery(arr) {
    console.log(arr);
    return `${arr[0].first_name} ${arr[0].last_name} killed Mr.Boddy using the ${arr[1].name} in the ${arr[2].name}!!!!`;
}
/*
function revealMistery() {
    return [`${killer.first_name} ${killer.last_name} killed Mr. Boddy usind the ${weapon.name} in the ${room.name}!!!!`];
}
*/