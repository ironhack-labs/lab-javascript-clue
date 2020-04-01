// ITERATION 1

// Suspects Collection
const suspectsArray = [
    //OBJ 1
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'green'
    },
    //OBJ 2
    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology.Adopted daughter of Mr.Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'white',
    },
    //OBJ 3
    {
        firstName: 'Victor',
        astName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        color: 'purple',
    },
    //OBJ 4

    {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A - list movie star with a dark past',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'red'
    },
    //OBJ 5
    {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue',
    },
    //OBJ 6
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


// Rooms Collection
const roomsArray = [
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
    //WEAPON 1
    {
        name: 'rope',
        weight: 10
    },
    //WEAPON 2
    {
        name: 'knife',
        weight: 8,
    },
    //WEAPON 3
    {
        name: 'candlestick',
        weight: 2,
    },
    //WEAPON 4
    {
        name: 'dumbbell',
        weight: 30,
    },
    //WEAPON 5
    {
        name: 'poison',
        weight: 2,
    },
    //WEAPON 6
    {
        name: 'axe',
        weight: 15,
    },
    //WEAPON 7
    {
        name: 'bat',
        weight: 13,
    },
    //WEAPON 8
    {
        name: 'trophy',
        weight: 25,
    },
    //WEAPON 9
    {
        name: 'pistol',
        weight: 20,
    }

];


// ITERATION 2
function selectRandom(array) {
    let randomNumber = Math.floor(Math.random() * array.length + 1);
    return array[randomNumber];
};

function pickMystery() {
    return mistery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    };
};

const cover = pickMystery();

function revealMystery(obj) {
    let name = obj.suspect.firstName;
    let surname = obj.suspect.lastName;
    let gun = obj.weapon.name;
    let hall = obj.room;
    console.log(`${name} ${surname} killed Mr. Boddy using the ${gun} in the ${hall}`);
};

revealMystery(cover);