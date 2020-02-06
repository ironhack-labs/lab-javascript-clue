// ITERATION 1

// Suspects Collection
const suspectsArray = [
    //mrGreen <br>
    {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green",
    },

    //drOrchid, 
    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white",
    },

    //profPlum<br>
    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple",
    },

    //missScarlet<br>
    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red",
    },

    //mrsPeacock<br>
    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        color: "blue",
    },

    //mrMustard<br>
    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow",
    }
];

// Rooms Collection
const roomsArray = [{
        name: "Dining Room"
    },
    {
        name: "Conservatory"
    },
    {
        name: "Kitchen"
    },
    {
        name: "Study"
    },
    {
        name: "Library"
    },
    {
        name: "Billiard Room"
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
        name: "Living Room"
    },
    {
        name: "Observatory"
    },
    {
        name: "Theater"
    },
    {
        name: "Guest House"
    },
    {
        name: "Patio"
    }
];


// Weapons Collection
const weaponsArray = [{
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

function selectRandom(fromCardStack) {
    let ourRandomCard = Math.floor(Math.random() * fromCardStack.length);
    // console.log("ourRandomCard",ourRandomCard)
    // console.log("mir",fromCardStack[ourRandomCard])
    if (fromCardStack == suspectsArray) {
        return fromCardStack[ourRandomCard].firstName
    } else if (fromCardStack == roomsArray) {
        return fromCardStack[ourRandomCard].name
    } else {
        return fromCardStack[ourRandomCard].name

    }

    //return fromCardStack[ourRandomCard]
}

/*
selectRandom(suspectsArray)
console.log(selectRandom(suspectsArray))
selectRandom(roomsArray) 
console.log(selectRandom(roomsArray))
selectRandom(weaponsArray)
console.log(selectRandom(weaponsArray))
*/

function pickMystery() {
    let suspect = selectRandom(suspectsArray)
    //console.log(selectRandom(suspectsArray))
    let room = selectRandom(roomsArray)
    //console.log(selectRandom(roomsArray))
    let weapon = selectRandom(weaponsArray)
    //console.log(selectRandom(weaponsArray))
    let mystery = [suspect, room, weapon]
    return mystery
}

pickMystery()

// ITERATION 3