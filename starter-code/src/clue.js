charactersArray = [{
        nickname: 'mrGreen',
        first_name: 'Jacob',
        last_name: 'Green',
        color: 'green',
        description: 'He has a lot of connections',
        age: 45,
        image: 'https: //pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        occupation: 'Entrepreneur'
    },
    {
        nickname: 'drOrchid',
        first_name: 'Doctor',
        last_name: 'Orchid',
        color: 'white',
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        age: 26,
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        occupation: 'Scientist'
    },
    {
        nickname: 'profPlum',
        first_name: 'Victor',
        last_name: 'Plum',
        color: 'purple',
        description: 'Billionare video game designer',
        age: 22,
        image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
        occupation: 'Designer'
    },
    {
        nickname: 'missScarlet',
        first_name: 'Kasandra',
        last_name: 'Scarlet',
        color: 'red',
        description: 'She is an A-list movie star with a dark past',
        age: 31,
        image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
        occupation: 'Actress'
    },
    {
        nickname: 'mrsPeacock',
        first_name: 'Eleanor',
        last_name: 'Peacock',
        color: 'blue',
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        age: 36,
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        occupation: 'Socialité'
    },
    {
        nickname: 'mrMustard',
        first_name: 'Jack',
        last_name: 'Mustard',
        color: 'yellow',
        description: 'He is a former football player who tries to get by on his former glory',
        age: 62,
        image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
        occupation: 'Retired Football player'
    },
    {
        nickname: 'mrMustard',
        first_name: 'Jack',
        last_name: 'Mustard',
        color: 'yellow',
        description: 'He is a former football player who tries to get by on his former glory',
        age: 62,
        image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
        occupation: 'Retired Football player'
    },
];
weaponsArray = [{
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
    },
];


var dining = {
    name: 'Dinning Room'
};
var conservatory = {
    name: 'Conservatory'
};
var kitchen = {
    name: 'Kitchen'
};
var study = {
    name: 'Study'
};
var library = {
    name: 'Library'
};
var billard = {
    name: 'Billiard Room'
};
var lounge = {
    name: 'Lounge'
};
var ballroom = {
    name: 'Ballroom'
};
var hall = {
    name: 'Hall'
};
var spa = {
    name: 'Spa'
};
var living = {
    name: 'Living Room'
};
var observatory = {
    name: 'Observatory '
};
var theater = {
    name: 'Theater'
};
var guest = {
    name: 'Guest House'
};
var patio = {
    name: 'Patio'
};
var roomsArray = [dining, conservatory, kitchen, study, library, billard, lounge, ballroom, hall, spa, living, observatory, theater, guest, patio];

function randomSelector(arr) {
    if (arr.length === 0) {
        return undefined;
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        var carta = arr[Math.floor(Math.random() * arr.length)];
        return carta;
    }
}

function pickMistery() {
    var mysteryEnvelope = [];
    mysteryEnvelope.push(randomSelector(charactersArray));
    mysteryEnvelope.push(randomSelector(weaponsArray));
    mysteryEnvelope.push(randomSelector(roomsArray));
    return mysteryEnvelope;
}

function revealMistery(a) {
    var textoAsesino = a[0].first_name + ' ' + a[0].last_name + ' killed Mr.Boddy using the ' + a[1].name + ' in the ' + a[2].name + '!!!!';
    return textoAsesino;
}