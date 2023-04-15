// ITERATION 1

// Suspects Array

const suspectsArray = [

    {
        name: "mrGreen",
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green",
    },
    {
        name: "drOrchid",
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology.Adopted daughter of Mr.Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white",
    },

    {
        name: "profPlum",
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple",
    },
    {
        name: "dmissScarlet",
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A - list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red",
    },
    {
        name: "mrsPeacock",
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        color: "blue",
    },
    {
        name: "mrMustard",
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow",
    },

];


// Rooms Array

const roomsArray = [

    {
        name: "Dining Room",
    },
    {
        name: "Conservatory",
    },
    {
        name: "Kitchen",
    },
    {
        name: "Study",
    },
    {
        name: "Library",
    },
    {
        name: "Billiard Room",
    },
    {
        name: "Lounge",
    },
    {
        name: "Ballroom",
    },
    {
        name: "Hall",
    },
    {
        name: "Spa",
    },
    {
        name: "Living Room",
    },
    {
        name: "Observatory",
    },
    {
        name: "Theater",
    },
    {
        name: "Guest House",
    },
    {
        name: "Patio",
    },

];

// Weapons Array

const weaponsArray = [
    {
        name: "rope",
        weight: 10,
    },
    {
        name: "knife",
        weight: 8,
    },

    {
        name: "candlestick",
        weight: 2,
    },
    {
        name: "dumbbell",
        weight: 30,
    },

    {
        name: "poison",
        weight: 2,
    },
    {
        name: "axe",
        weight: 15,
    },

    {
        name: "bat",
        weight: 13,
    },

    {
        name: "trophy",
        weight: 25,
    },

    {
        name: "pistol",
        weight: 20,
    },


];


// ITERATION 2

function selectRandom(array) {
    if (array.length === 0) return undefined;
    let selectArray = Math.floor(Math.random() * array.length)

    return array[selectArray];

}


function pickMystery() {

    let suspect = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
    let weapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
    let room = roomsArray[Math.floor(Math.random() * roomsArray.length)];
    console.log({ suspect, weapon, room })
    return { suspect, weapon, room }
}


// ITERATION 3


function revealMystery(pickMystery) {

    return (`${pickMystery.suspect.firstName} ${pickMystery.suspect.lastName} killed Mr. Boddy using the ${pickMystery.weapon.name} in the ${pickMystery.room.name}!`)

}


/* intentando otra forma: si las cartas son clases¿?

//Card
class Card {
    constructor(name) {
        this.name = name
 
    }
 
}
 
 
// Suspect
 
class Suspect extends Card {
    constructor(name, firstName, lastName, occupation, age, description, image, color) {
        super(name)
        this.firstName = firstName
        this.lastName = lastName
        this.occupation = occupation
        this.age = age
        this.description = description
        this.image = image
        this.color = color
 
    }
}
 
// Room
 
class Room extends Card {
    constructor(name) {
        super(name)
 
    }
}
 
// Weapon
 
class Weapon extends Card {
    constructor(name, weight) {
        super(name)
        this.weight = weight
    }
}



// let randomCard = array[Math.floor(Math.random() * array.length)];


/*let todas = [suspectsArray, roomsArray, weaponsArray]

let random = []
for (let i = 0; i < todas.length; i++) {
    todas[Math.floor(Math.todas() * todas.length)]
}
;

array.forEach(selectRandom()
); {
    return random
}

}
*/
