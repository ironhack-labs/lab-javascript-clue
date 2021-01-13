// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: '45',
        description: 'He has a lot of connections',
        image:
            'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'green',
    },
    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: '26',
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'white',
    },
    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: '22',
        description: 'Billionaire video game designer',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967',
        color: 'purple',
    },
    {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actress',
        age: '31',
        description: 'She is an A-list movie star with a dark past',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'red',
    },
    {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: '36',
        description:
            'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue',
    },
    {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: '62',
        description:
            'He is a former football player who tries to get by on his former glory',
        image:
            'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: 'yellow',
    },
];

// Weapon Collection
const weaponsArray = [
    {
        name: 'rope',
        weight: '10',
    },
    {
        name: 'knife',
        weight: '8',
    },
    {
        name: 'candlestick',
        weight: '2',
    },
    {
        name: 'dumbbell',
        weight: '30',
    },
    {
        name: 'poison',
        weight: '2',
    },
    {
        name: 'axe',
        weight: '15',
    },
    {
        name: 'bat',
        weight: '13',
    },
    {
        name: 'trophy',
        weight: '25',
    },
    {
        name: 'pistol',
        weight: '20',
    },
];

// Rooms Collection
const roomsArray = [
    { name: 'Dining Room' },
    { name: 'Conservatory' },
    { name: 'Kitchen' },
    { name: 'Study' },
    { name: 'Library' },
    { name: 'Billiard Room' },
    { name: 'Lounge' },
    { name: 'Ballroom' },
    { name: 'Hall' },
    { name: 'Spa' },
    { name: 'Living Room' },
    { name: 'Observatory' },
    { name: 'Theater' },
    { name: 'Guest House' },
    { name: 'Patio' },
];

// ITERATION 2
function selectRandom(arr) {
    let item = '';
    item = arr[Math.floor(Math.random() * arr.length)];
    return item;
}

function pickMystery() {
    let suspect = selectRandom(suspectsArray);
    let room = selectRandom(roomsArray);
    let weapon = selectRandom(weaponsArray);

    const guess = {
        suspect: {
            firstName: suspect.firstName,
            lastName: suspect.lastName,
        },
        weapon: weapon.name,
        room: room.name,
    };

    console.log('guess', guess);
    return guess;
}
const picked = pickMystery();

// ITERATION 3

function revealMystery(arr) {
    const revealed = `${arr.suspect.firstName} ${arr.suspect.lastName} killed Mr.Boddy using the ${arr.weapon.name} in the ${arr.room.name}`;
    console.log(revealed);
    return revealed;
}
revealMystery(picked);
