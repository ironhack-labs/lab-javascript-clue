// ITERATION 1

// Suspect Objects
const mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
    }
    
    const drOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
    }
    
    const profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
    }
    
    const missScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
    }
    
    const mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
    }
    
    const mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow"
    }

// Suspects Array
const suspectsArray = [];
suspectsArray.push(mrGreen, drOrchid, profPlum,  missScarlet, mrsPeacock, mrMustard)


// Room Objects
const rmDining = {
    name: "Dining Room"
}

const rmConservatory = {
    name: "Conservatory"
}

const rmKitchen = {
    name: "Kitchen"
}

const rmStudy = {
    name: "Study"
}

const rmLibrary = {
    name: "Library"
}

const rmBilliards = {
    name: "Billiard Room"
}

const rmLounge = {
    name: "Lounge"
}

const rmBallroom = {
    name: "Ballroom"
}

const rmHall = {
    name: "Hall"
}

const rmSpa = {
    name: "Spa"
}

const rmLiving = {
    name: "Living Room"
}

const rmObservatory = {
    name: "Observatory"
}

const rmTheater = {
    name: "Theater"
}

const rmGuestHouse = {
    name: "Guest House"
}

const rmPatio = {
    name: "Patio"
}

// Rooms Array
const roomsArray = [];

roomsArray.push(rmDining, rmConservatory, rmKitchen, rmStudy, rmLibrary, rmBilliards, rmLounge, rmBallroom, rmHall, rmSpa, rmLiving, rmObservatory, rmTheater, rmGuestHouse, rmPatio);


// Weapon Objects
const wpnRope = {
    name: "rope" ,
    weight: 10
}

const wpnKnife = {
    name: "knife",
    weight: 8
}

const wpnCandlestick = {
    name: "candlestick",  
    weight: 2
}

const wpnDumbbell = {
    name: "dumbbell",
    weight: 30
}

const wpnPoison = {
    name: "poison",
    weight: 2
}

const wpnAxe = {
    name: "axe",
    weight: 15
}

const wpnBat = {
    name: "bat",
    weight: 13
}

const wpnTrophy = {
    name: "trophy",
    weight: 25
}

const wpnPistol = {
    
    name: "pistol",
    weight: 20  
}

// Weapons Array
const weaponsArray = [];
weaponsArray.push(wpnRope, wpnKnife, wpnCandlestick, wpnDumbbell, wpnPoison, wpnAxe, wpnBat, wpnTrophy, wpnPistol);

// ITERATION 2
function selectRandom(myArray) {
    if (!Array.isArray(myArray)) {
        return undefined;
    }

    if (myArray.length < 1) {
        return undefined;
    }

    let randomPick = Math.floor(Math.random()*myArray.length);
    return myArray[randomPick];
}


function pickMystery() {
    const mystery = {};
    mystery.suspect = selectRandom(suspectsArray);
    mystery.weapon = selectRandom(weaponsArray);
    mystery.room = selectRandom(roomsArray);

    return mystery;
}

// ITERATION 3

function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}

console.log(revealMystery(pickMystery()));
