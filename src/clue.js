// ITERATION 1
//Suspects Collection
const suspectsArray = [
    {
        card: "mrGreen",
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
    },
    {
        card: "drOrchid",
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    },
    {
        card: "profPlum",
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
    },
    {
        card: "missScarlet",
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
    },
    {   card: 'mrsPeacock',
        firstName: 'Eleanor',
        lastName: 'Peacock', 
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
    },

    {   card: 'mrMustard',
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
    }   
];
// Rooms Collection
const roomsArray = [
    "Dining room",
    "Conservatory",
    'Dining Room',
    'Conservatory',
    'Kitchen',
    'Study',
    'Library',
    'Billiard Room',
    'Lounge',
    'Ballroom',
    'Hall',
    'Spa',
    'Living Room',
    'Observatory',
    'Theater',
    'Guest House',
    'Patio',
];
// Weapons Collection
const weaponsArray = [
    {
        name: "rope",
        weight: 10
    },
    {
        name: "knife",
        weight: 8
    },
    {
        name: 'candlestick',
        weight: 2
    },
    {
        name: 'dumbbell',
        weight: 30
    },
    {
        name: 'poison',
        weight: 2,
    },
    {
        name: 'axe',  
        weight: 15,
    },
    {
        name: 'bat',
        weight: 13,
    },
    {
        name: 'trophy',
        weight: 25,
    },
    {
        name: 'pistol',
        weight: 20,
    }

];
// ITERATION 2
function selectRandom(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return (arr[random]);
}
function pickMystery() {
    let randomObject = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
    return randomObject;
}
let envelope = pickMystery();
// ITERATION 3
function revealMystery(envelope) {
    let suspectFirstName = envelope.suspect.firstName;
    let suspectLastName = envelope.suspect.lastName;
    let murderWeapon = envelope.weapon.name;
    let murderRoom = envelope.room.name;
    return `${suspectFirstName} ${suspectLastName} killed Mr. Boddy using the ${murderWeapon} in the ${murderRoom}!`
}
console.log(revealMystery);