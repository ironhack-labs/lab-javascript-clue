// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'green'
    },

    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology.Adopted daughter of Mr.Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'white'
    },

    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        color: 'purple',
    },


    {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A- list movie star with a dark past',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'red',
    },

    {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue',
    },

    {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: 'yellow',
    }

];

// Weapons Array

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
        name: "candlestick",
        weight: 2
    },
    {
        name: "dumbbell",
        weight: 30
    },
    {
        name: "poison",
        weight: 2
    },
    {
        name: "axe",
        weight: 15
    },
    {
        name: "bat",
        weight: 13
    },
    {
        name: "trophy",
        weight: 25
    },
    {
        name: "pistol",
        weight: 20
    },
];

// Rooms Array

const roomsArray = [
    { name: "Dining" },
    { name: "Conservatory" },
    { name: "Kitchen" },
    { name: "Study" },
    { name: "Library" },
    { name: "Billiard" },
    { name: "Lounge" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa" },
    { name: "Living" },
    { name: "Observatory" },
    { name: "Theater" },
    { name: "Guest" },
    { name: "Patio" },
];



// ITERATION 2

function selectRandom(roomsArray) {
    if (roomsArray.lenght === 0) {
        return undefined;
    }
    const randomRoom = Math.floor(Math.random() * roomsArray.length);
    const resultRoom = roomsArray[randomRoom];
    return resultRoom;
}

function pickMystery() {
    return {
        suspect: suspectsArray[Math.floor(Math.random() * suspectsArray.length)],
        weapon: weaponsArray[Math.floor(Math.random() * weaponsArray.length)],
        room: roomsArray[Math.floor(Math.random() * roomsArray.length)],
    };

}

// ITERATION 3

function revealMystery() {
    const mystery = pickMystery()
    // return mystery.suspect.firstName + mystery.suspect.lastName + 'killed Mr. Boddy using the' + mystery.weapon.name + 'in the' + mystery.room.name + '!';
    return "<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <PLACE>!"
        .replace('<FIRST NAME>', mystery.suspect.firstName)
        .replace('<LAST NAME>', mystery.suspect.lastName)
        .replace('<WEAPON>', mystery.weapon.name)
        .replace('<PLACE>', mystery.room.name);
}