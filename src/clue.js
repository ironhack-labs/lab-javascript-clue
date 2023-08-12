// ITERATION 1

// Suspects Array

const suspectsArray = [
{
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
},
{
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"
},
{
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
},
{
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
},
{
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
},
{
    firstName: "Jack",
    lastName: "Musta",
    occupation: "Retotball player",
    age: 62,
    description: "Former football playeries to get by on his glory",
    image: "https://,independent.co.,-public/thumbnails/imag,07/04/08/unspecified-",
    color: "yellow"
}
];

// Rooms Array

const roomsArray = [
{name: "Dining Room"},
{name: "Conservatory"},
{name: "Kitchen"},
{name: "Study"},
{name: "Library"},
{name: "Billiard Room"},
{name: "Lounge"},
{name: "Ballroom"},
{name: "Hall"},
{name: "Spa"},
{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"},
];

// Weapons Array

const weaponsArray = [
    {
        name: "rope ---" ,weight: 10
    },
    {
        name: "knife ---",
        weight: 8
    },
    {
        name: "candlestick ---",
        weight: 2
    },
    {
        name: "dumbbell --- ",
        weight: 30
    },
    {
        name: "poison ---",
        weight: 2
    },
    {
        name: "axe ---",
        weight: 15
    },
    {
        name: "bat --- ",
        weight: 13
    },
    {
        name: "trophy ---",
        weight: 25
    },
    {
        name: "pistol ---",
        weight: 20
    }
];


// ITERATION 2

function selectRandom(arr) {
    const randomCard = arr[Math.floor(Math.random() * arr.length)]

    return randomCard;
}

function pickMystery() {
    const mysteryDeck = {};
    mysteryDeck.suspect =
    selectRandom(suspectsArray);

    mysteryDeck.weapon = selectRandom(weaponsArray);
    
    mysteryDeck.room = selectRandom(roomsArray);

    return mysteryDeck;
}

// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}

selectRandom(weaponsArray);