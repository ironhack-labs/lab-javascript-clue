// ITERATION 1

// Suspects Array

const suspectsArray = [

    {
        firstName: "",
        lastName: "",
        occupation: "",
        age: 0,
        description: "",
        image: "",
        color: ""
    },
    {
        firstName: "",
        lastName: "",
        occupation: "",
        age: 0,
        description: "",
        image: "",
        color: ""
    },
    {
        firstName: "",
        lastName: "",
        occupation: "",
        age: 0,
        description: "",
        image: "",
        color: ""
    },
    {
        firstName: "",
        lastName: "",
        occupation: "",
        age: 0,
        description: "",
        image: "",
        color: ""
    },
    {
        firstName: "",
        lastName: "",
        occupation: "",
        age: 0,
        description: "",
        image: "",
        color: ""
    },
    {
        firstName: "",
        lastName: "",
        occupation: "",
        age: 0,
        description: "",
        image: "",
        color: ""
    }
];

// Rooms Array

const roomsArray = [
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" }
];

// Weapons Array

const weaponsArray = [
    { name: "", weight: 0 },
    { name: "", weight: 0 },
    { name: "", weight: 0 },
    { name: "", weight: 0 },
    { name: "", weight: 0 },
    { name: "", weight: 0 },
    { name: "", weight: 0 },
    { name: "", weight: 0 },
    { name: "", weight: 0 }
];


// ITERATION 2

function selectRandom(cardStack) {
    const randomCard = Math.floor(Math.random() * cardStack.length);

    return cardStack[randomCard];
}

function pickMystery() {

    const suspect = selectRandom(suspectsArray);
    const weapon = selectRandom(weaponsArray);
    const room = selectRandom(roomsArray);

    return {
        suspect: suspect,
        weapon: weapon,
        room: room
    }
}

// ITERATION 3

function revealMystery(assassin) {

    const firstName = assassin.suspect.firstName;
    const lastName = assassin.suspect.lastName;
    const weaponName = assassin.weapon.name;
    const roomName = assassin.room.name;

    return`${firstName} ${lastName} killed Mr. Boddy using the ${weaponName} in the ${roomName}!`;
}