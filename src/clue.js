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
    {name: "Basement"},
    {name: "Bedroom 1"},
    {name: "Dining room"},
    {name: "Garage"},
    {name: "Kitchen"},
    {name: "Laundry room"},
    {name: "Attic"},
    {name: "Bathroom"},
    {name: "Living room"},
    {name: "Pool"},
    {name: "Sitting room"},
    {name: "Study"},
    {name: "Bedroom 2"},
    {name: "Garden"},
    {name: "Vestibule"}
];

// Weapons Array

const weaponsArray = [
    {name: "gun", weight: 10},
    {name: "knife", weight: 5},
    {name: "shotgun", weight: 20},
    {name: "sword", weight: 12},
    {name: "katana", weight: 5},
    {name: "rifle", weight: 4},
    {name: "bate", weight: 3},
    {name: "fist", weight: 2},
    {name: "stick", weight: 1},
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


