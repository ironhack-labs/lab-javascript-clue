// ITERATION 1

// Suspects Array

const suspectsArray = [{
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 40,
        description: "He has a dark past",
        image: "",
        color: "green"
    },

    {
        firstName: "Suzan",
        lastName: "Smith",
        occupation: "Singer",
        age: 42,
        description: "She used to be rich",
        image: "",
        color: "blue"
    },

    {
        firstName: "Betty",
        lastName: "Boop",
        occupation: "Actress",
        age: 31,
        description: "She is a great dancer",
        image: "",
        color: "red"
    },

    {
        firstName: "Christopher",
        lastName: "Crazy",
        occupation: "Web Developer",
        age: 35,
        description: "He is a vinyl collector",
        image: "",
        color: "purple"
    },

    {
        firstName: "Jason",
        lastName: "Jester",
        occupation: "Astronomer",
        age: 29,
        description: "He has a PhD",
        image: "",
        color: "yellow"
    },

    {
        firstName: "Helen",
        lastName: "Hell",
        occupation: "Archaeologist",
        age: 32,
        description: "She speaks 6 languages",
        image: "",
        color: "white"
    }
];

// Rooms Array

const roomsArray = [
    { name: "Dinning Room" },
    { name: "Loft" },
    { name: "Kitchen" },
    { name: "Study room" },
    { name: "Library" },
    { name: "Billiard room" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa room" },
    { name: "Living Room" },
    { name: "Gym Room" },
    { name: "Attic" },
    { name: "Guest House" },
    { name: "Nursery" },
    { name: "Lounge" }
];

// Weapons Array

const weaponsArray = [
    { name: "knife", weight: 20 },
    { name: "axe", weight: 22 },
    { name: "pistol", weight: 31 },
    { name: "javelin", weight: 30 },
    { name: "poison", weight: 20 },
    { name: "rope", weight: 3 },
    { name: "bat", weight: 13 },
    { name: "stone", weight: 5 },
    { name: "sabre", weight: 29 }
];


// ITERATION 2

function selectRandom(array) {
    let randomItem = Math.floor(Math.random() * (array.length));
    return array[randomItem];
}


function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
}

let envelope = pickMystery()

console.log(pickMystery());


// ITERATION 3

function revealMystery(envelope) {

    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}
console.log(revealMystery(pickMystery()));



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        suspectsArray,
        roomsArray,
        weaponsArray,
        pickMystery,
        revealMystery,
        selectRandom
    };
}