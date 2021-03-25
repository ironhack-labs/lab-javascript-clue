// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: "green"
    },
    {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: "white"
    },
    {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: "purple"
    },
    {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: "red"
    },
    {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: "blue"
    },
    {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: "yellow"
    }
];

// Rooms Collection
const roomsArray = [
    {
        name: 'Dining Room'
    },
    {
        name: 'Conservatory',
    },
    {
        name: "Kitchen",
    },
    {
        name: "Study",
    },
    {
        name: "Library"
    },
    {
        name: "BilliardRoom"
    },
    {
        name: "Lounge"
    },
    {
        name: "Ballroom"
    },
    {
        name: "Hall"
    },
    {
        name: "Spa"
    },
    {
        name: "LivingRoom"
    },
    {
        name: "Observatory"
    },
    {
        name: "Theater"
    },
    {
        name: "GuestHouse"
    },
    {
        name: "Patio"
    }
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
    }
];

// ITERATION 2

for (i = 0; i < suspectsArray; i++) {
  suspectName = suspectsArray[i].lastName
  suspectFirstName = suspectsArray[i].firstName
}

for (i = 0; i < roomsArray; i++) {
  roomName = roomsArray[i].name
}

for (i = 0; i < weaponsArray; i++) {
  weaponName = weaponsArray[i].name
}


function selectRandom () { 
if (suspectsArray.length === 0 || roomsArray.length === 0 || weaponsArray.length === 0) {
    return undefined
} else {
    let randomSuspect = suspectName[Math.floor(Math.random() * suspectsArray.length)]
    let randomWeapons = roomName[Math.floor(Math.random() * weaponsArray.length)]
    let randomRoom = weaponName[Math.floor(Math.random() * roomsArray.length)]
    return randomSuspect, randomWeapons, randomRoom
}
}

function pickMystery () {
    selectRandom()
    return {randomSuspect, randomWeapons, randomRoom}
}

function revealMystery () {
    let randomSuspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)]
    let randomWeapons = weaponsArray[Math.floor(Math.random() * weaponsArray.length)]
    let randomRoom = roomsArray[Math.floor(Math.random() * roomsArray.length)]

    return `${randomSuspect} killed Mr. Boddy using the ${randomWeapons} in the ${randomRoom}!"`
}

// ITERATION 3