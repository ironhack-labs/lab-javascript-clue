// ITERATION 1
// Suspects Collection
const suspectsArray = [];
const mrGreen = {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green'

};
const drOrchid = {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
};
const profPlum = {
    first_name: 'Victor',
    last_name: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    color: 'purple'
};
const missScarlet = {
    first_name: 'Kasandra',
    last_name: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A - list movie star with a dark past',
    image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    color: 'red'
};
const mrsPeacock = {
    first_name: 'Eleanor',
    last_name: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
};
const mrMustard = {
    first_name: 'Jack',
    last_name: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation: 'Retired Football player',
    color: 'yellow'
};
suspectsArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)
// Rooms Collection
const roomsArray = [{
        name: 'Dining Room'
    },
    {
        name: 'Conservatory'
    },
    {
        name: 'Kitchen'
    },
    {
        name: 'Study'
    },
    {
        name: 'Library'
    },
    {
        name: 'Billiard Room'
    },
    {
        name: 'Lounge'
    },
    {
        name: 'Ballroom'
    },
    {
        name: 'Hall'
    },
    {
        name: 'Spa'
    },
    {
        name: 'Living Room'
    },
    {
        name: 'Observatory'
    },
    {
        name: 'Theater'
    },
    {
        name: 'Guest House'
    },
    {
        name: 'Patio'
    }
];
// Weapons Collection
const weaponsArray = [{
        name: 'rope',
        weight: 10
    },
    {
        name: 'knife',
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
        weight: 2
    },
    {
        name: 'axe',
        weight: 15
    },
    {
        name: 'bat',
        weight: 13
    },
    {
        name: 'trophy',
        weight: 25
    },
    {
        name: 'pistol',
        weight: 20
    }
];

// ITERATION 2

function selectRandom(array) {
    let index = Math.floor(Math.random() * array.length)
    if (array.length === 0) {
        return undefined
    }

    return array[index]

}

console.log(selectRandom(suspectsArray))

function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }

}
console.log(pickMystery())
// ITERATION 3

function revealMystery(object) {
    return `${object.suspect.first_name} ${object.suspect.last_name} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`
}

console.log(revealMystery(pickMystery()))