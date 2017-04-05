//Array of Person Objects
var characters = [
    { name: "Jacob", surname: "Green", color: "green", occupation: "Programmer", age: 33 },
    { name: "Doctor", surname: "Orchid", color: "white", occupation: "Biologist", age: 48 },
    { name: "Victor", surname: "Plum", color: "purple", occupation: "Game Designer", age: 27 },
    { name: "Kasandra", surname: "Scarlet", color: "red", occupation: "Movie Star", age: 30 },
    { name: "Eleanor", surname: "Peacock", color: "blue", occupation: "Singer", age: 40 },
    { name: "Jack", surname: "Mustard", color: "yellow", occupation: "Football Player", age: 24 }
];

//Array of Weapon Objects
var weapons = [
    { name: "Rope", weight: 1, color: "brown", damage: 25 },
    { name: "Knife", weight: 1, color: "brown", damage: 25 },
    { name: "Candlestick", weight: 1, color: "brown", damage: 25 },
    { name: "Dumbbell", weight: 1, color: "brown", damage: 25 },
    { name: "Poison", weight: 1, color: "brown", damage: 25 },
    { name: "Axe", weight: 1, color: "brown", damage: 25 },
    { name: "Bath", weight: 1, color: "brown", damage: 25 },
    { name: "Trophy", weight: 1, color: "brown", damage: 25 },
    { name: "Pistol", weight: 1, color: "brown", damage: 25 }
];

//Array of rooms
var rooms = [
    "Dinning Room",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "Billiard Room",
    "Lounge",
    "Hall",
    "A Spa",
    "Living Room",
    "Observatory",
    "Theatre",
    "Guest House",
    "A Patio"
];

//Function to generate radom number between 0 and maxNumber
function pickRandomNumber(maxNumber) {
    return Math.floor(Math.random()*maxNumber);
}

var character = characters[pickRandomNumber(characters.length)];

var weapon = weapons[pickRandomNumber(weapons.length)];

var room = rooms[pickRandomNumber(rooms.length)];

console.log(character, weapon, room);
