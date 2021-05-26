// LAB 03 - JavaScrip Clue --- 25.05.2021/26.05.2021 ---- Pedro e Renan
// ITERATION 1

// Suspects Collection
const suspectsArray = [

    mrGreen = {
        firstName: `Jacob`,
        lastName: `Green`,
        occupation: `Entrepreneur`,
        age: 45,
        description: `He has a lot of connections`,
        image: `https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg`,
        color: `green`
    }
    ,
    drOrchid = {
        firstName: `Doctor`,
        lastName: `Orchid`,
        occupation: `Scientist`,
        age: 26,
        description: `PhD in plant toxicology. Adopted daughter of Mr. Boddy`,
        image: `http://www.radiotimes.com/uploads/images/Original/111967.jpg`,
        color: `white`,
    }
    ,
    profPlum = {
        firstName: `Victor`,
        lastName: `Plum`,
        occupation: `Designer`,
        age: 22,
        description: `Billionaire video game designer`,
        image: `https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg`,
        color: `purple`,
    }
    ,
    missScarlet = {
        firstName: `Kasandra`,
        lastName: `Scarlet`,
        occupation: `Actor`,
        age: 31,
        description: `She is an A-list movie star with a dark past`,
        image: `https://www.radiotimes.com/uploads/images/Original/111967.jpg`,
        color: `red`,
    }
    ,
    mrsPeacock = {
        firstName: `Eleanor`,
        lastName: `Peacock`,
        occupation: `Socialité`,
        age: 36,
        description: `She is from a wealthy family and uses her status and money to earn popularity`,
        image: `https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg`,
        color: `blue`,
    }
    ,
    mrMustard = {
        firstName: `Jack`,
        lastName: `Mustard`,
        occupation: `Retired Football player`,
        age: 62,
        description: `He is a former football player who tries to get by on his former glory`,
        image: `https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg`,
        color: `yellow`,
    }
];

// Rooms Collection
const roomsArray = [

    room1 = {
        name: `Dining Room`
    },
    room2 = {
        name: `Conservatory`
    },
    room3 = {
        name: `Kitchen`
    },
    room4 = {
        name: `Study`
    },
    room5 = {
        name: `Library`
    },
    room6 = {
        name: `Billiard Room`
    },
    room7 = {
        name: `Lounge`
    },
    room8 = {
        name: `Ballroom`
    },
    room9 = {
        name: `Hall`
    },
    room10 = {
        name: `Spa`
    },
    room11 = {
        name: `Living Room`
    },
    room12 = {
        name: `Observatory`
    },
    room13 = {
        name: `Theater`
    },
    room14 = {
        name: `Guest House`
    },
    room15 = {
        name: `Patio`
    },
];

// Weapons Collection
const weaponsArray = [

    weapon1 = {
        name: `rope`,
        weight: 10,
    }
    ,
    weapon2 = {
        name: `knife`,
        weight: 8,
    }
    ,
    weapon3 = {
        name: `candlestick`,
        weight: 2,
    }
    ,
    weapon4 = {
        name: `dumbbell`,
        weight: 30,
    }
    ,
    weapon5 = {
        name: `poison`,
        weight: 2,
    }
    ,
    weapon6 = {
        name: `axe`,
        weight: 15,
    }
    ,
    weapon7 = {
        name: `bat`,
        weight: 13,
    }
    ,
    weapon8 = {
        name: `trophy`,
        weight: 25,
    }
    ,
    weapon9 = {
        name: `pistol`,
        weight: 20,
    }
];


// ITERATION 2
function selectRandom(array) {
    if (array.length === 0) {
        return null;
    }
    let randomElement = array[(Math.floor(Math.random() * array.length))];
    return randomElement;
}
//TESTING HERE//console.log(selectRandom(weaponsArray))

function pickMystery() {
    subjectMystery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray),
    }
    if (subjectMystery.suspect === null) {
        subjectMystery.suspect = `Oops, we need a subject!`
    } else if (subjectMystery.weapon === null) {
        subjectMystery.weapon = `Oops, we need a weapon!`
    } else if (subjectMystery.room === null) {
        subjectMystery.weapon = `Oops, we need some rooms!`
    }
    return subjectMystery
}
//TESTING HERE//
//console.log(pickMystery())
//console.log(pickMystery().suspect.firstName)

// ITERATION 3

function revealMystery (anyObject) {
   let message = `${anyObject().suspect.firstName} ${anyObject().suspect.lastName} killed Mr.Boddy using the ${anyObject().weapon.name} in the ${anyObject().room.name}! OMG ! RUN FOR YOUR LIFE!` 
   return message
}
//TESTING HERE//
console.log(revealMystery(pickMystery))    
