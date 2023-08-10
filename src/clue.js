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
        description: 'He has a lot of connections',
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
        color: 'purple'
    },
    {
        firstName: 'Eleanorr',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue'
    },
    {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football playerr',
        age: 45,
        description: 'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'green'
    },
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 62,
        description: 'he is a former football player who tries to get by on his former glory',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: 'yellow'
    }

];
// Rooms Array

const roomsArray = [{

    name: 'Dining Room',
    name: 'Conservatory',
    name: 'Kitchen',
    name: 'Study',
    name: 'Library',
    name: 'Billiard Room',
    name: 'Lounge',
    name: 'Ballroom',
    name: 'Hall',
    name: 'Spa',
    name: 'Living Room',
    name: 'Observatory',
    name: 'Theater',
    name: 'Guest House',
    name: 'Patio'
}
];


// Weapons Array

const weaponsArray = [
    { name: 'rope', weight: 10 },
    { name: 'knife', weight: 8 },
    { name: 'candlestick', weight: 2 },
    { name: 'dumbbell', weight: 30 },
    { name: 'poison', weight: 2 },
    { name: 'axe', weight: 15 },
    { name: 'bat', weight: 13 },
    { name: 'trophy', weight: 25 },
    { name: 'pistol', weight: 20 }
];




// ITERATION 2

function selectRandom(array) {
    // const keys = suspectsArray.keys(suspectsArray);
    const random = Math.floor(Math.random() * array.length)
    // console.log(suspectsArray[0][keys[random]])
    return array[random];
}

console.log(selectRandom(suspectsArray))


function pickMystery() {
    const randomSuspectIndex = Math.floor(Math.random() * suspectsArray.length);
    const randomWeaponIndex = Math.floor(Math.random() * weaponsArray.length);
    const randomRoomIndex = Math.floor(Math.random() * roomsArray.length);

    const mystery = {
        suspect: suspectsArray[randomSuspectIndex],
        weapon: weaponsArray[randomWeaponIndex],
        room: roomsArray[randomRoomIndex]
    };

    return mystery;
}
console.log(pickMystery(suspectsArray))
console.log(pickMystery(weaponsArray))
console.log(pickMystery(roomsArray))

// ITERATION 3

function revealMystery() { }

