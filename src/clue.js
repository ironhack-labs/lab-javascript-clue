// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: "Juanito",
        lastName: "Cardenas",
        occupation: "Doctor",
        age: 42,
        description: "Usa lentes",
        image: "🤓",
        color: "blue"
    },
    {
        firstName: "Pedro",
        lastName: "Fernandez",
        occupation: "Abogado",
        age: 40,
        description: "Moreno",
        image: "👨🏽",
        color: "red"
    },
    {
        firstName: "Arturo",
        lastName: "Espinoza",
        occupation: "Arquitecto",
        age: 36,
        description: "Tiene bigote",
        image: "👨🏻",
        color: "yellow"
    },
    {
        firstName: "Franciso",
        lastName: "Gutierrez",
        occupation: "Ingeniero",
        age: 32,
        description: "Tiene barba y bigote",
        image: "🧔🏻‍♂️",
        color: "green"
    },
    {
        firstName: "Ariadna",
        lastName: "Ostria",
        occupation: "Psicologa",
        age: 29,
        description: "cabello rizado",
        image: "👩🏼‍🦱",
        color: "white"
    },
    {
        firstName: "Karime",
        lastName: "Lozano",
        occupation: "Dentista",
        age: 31,
        description: "cabello pintado de blanco",
        image: "👩🏻‍🦳",
        color: "brown"
    }
];

// Rooms Array

const roomsArray = [
    {name: "room1"},
    {name: "room2"},
    {name: "room3"},
    {name: "room4"},
    {name: "room5"},
    {name: "room6"},
    {name: "room7"},
    {name: "room8"},
    {name: "room9"},
    {name: "room10"},
    {name: "room11"},
    {name: "room12"},
    {name: "room13"},
    {name: "room14"},
    {name: "room16"}
];

// Weapons Array

const weaponsArray = [
    {name: "sadf", weight: 9},
    {name: "asf", weight: 8},
    {name: "asf", weight: 7},
    {name: "asdf", weight: 6},
    {name: "asdf", weight: 5},
    {name: "asf", weight: 4},
    {name: "asf", weight: 3},
    {name: "asdf", weight: 2},
    {name: "asdf", weight: 1},
];


// ITERATION 2

function selectRandom(array) {
    if(array.length === 0) return undefined;
    let rand =  Math.floor(Math.random() * array.length);
    return array[rand];
}

function pickMystery() {
    const misterio = {};
    const randomSuspect = selectRandom(suspectsArray);
    const randomWeapon = selectRandom(weaponsArray);
    const randomRoom = selectRandom(roomsArray);

    misterio.suspect = randomSuspect;
    misterio.weapon = randomWeapon;
    misterio.room = randomRoom;


    return misterio;
}


// ITERATION 3

function revealMystery(mysteryObj) {
    return `${mysteryObj.suspect.firstName} ${mysteryObj.suspect.lastName} killed Mr. Boddy using the ${mysteryObj.weapon.name} in the ${mysteryObj.room.name}!`
}

