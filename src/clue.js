// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstName: 'Jacob ',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: '45 ',
        description: 'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg ',
        color: 'green ',
    },
    {
        firstName: 'Docto',
        lastName: 'Orchi',
        occupation: 'Scientis',
        age: '2',
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Bodd',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jp',
        color: 'white'
    },
    {
        firstName: 'Victo',
        lastName: 'Plu',
        occupation: 'Designe',
        age: '2',
        description: 'Billionaire video game designe',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        color: 'purple'
    },
    {
        firstName: 'Kasandr',
        lastName: 'Scarle',
        occupation: 'Acto',
        age: '3',
        description: 'She is an A-list movie star with a dark pas',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jp',
        color: 'red'
    },
    {
        firstName: 'Eleano',
        lastName: 'Peacoc',
        occupation: 'Socialit',
        age: '3',
        description: 'She is from a wealthy family and uses her status and money to earn popularit',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jp',
        color: 'blue'
    },
    {
        firstName: 'Jac',
        lastName: 'Mustar',
        occupation: 'Retired Football playe',
        age: '6',
        description: 'He is a former football player who tries to get by on his former glor',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jp',
        color: 'yellow'
    }
];

// Weapons Collection
const roomsArray = [
    { name: "Dining Room" },
    { name: "Conservatory" },
    { name: "Kitchen" },
    { name: "Study" },
    { name: "Library" },
    { name: "Billiard Room" },
    { name: "Lounge" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa" },
    { name: "Living Room" },
    { name: "Observatory" },
    { name: "Theater" },
    { name: "Guest House" },
    { name: "Patio" },
];

// Rooms Collection
const weaponsArray = [
    {
        name: "rope",
        weight: "10"
    },
    {
        name: "knife",
        weight: "8"
    },
    {
        name: "candlestick",
        weight: "2"
    },
    {
        name: "dumbbell",
        weight: "30"
    },
    {
        name: "poison",
        weight: "2"
    },
    {
        name: "axe",
        weight: "15"
    },
    {
        name: "bat",
        weight: "13"
    },
    {
        name: "trophy",
        weight: "25"
    },
    {
        name: "pistol",
        weight: "20"
    }
];



// ITERATION 2
const selectRandom = arr => {
    let randomSelected = parseInt(Math.random() * arr.length);
    return arr[randomSelected];
}

const pickMystery = () => {
    let mystery = {
        suspect: selectRandom(suspectsArray),
        room: selectRandom(roomsArray),
        weapon: selectRandom(weaponsArray)
    }
    return mystery
}

// ITERATION 3
const revealMystery = envelope => {
    let reveal = envelope
    return `${reveal.suspect.firstName} ${reveal.suspect.lastName} killed Mr. Boddy using the ${reveal.weapon.name} in the ${reveal.room.name}!` 
}