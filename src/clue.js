// ITERATION 1

// Suspects Array

const suspectsArray = [
  { firstName: "jose" , lastName: "Gonzalez", occupation:"doctor", age: 40, description: "Hello im a doctor" , image: "https://", color:"red" },
  { firstName: "Maria" , lastName: "Valdez", occupation:"Teacher", age: 50, description: "Hello im a teacher" , image: "https://", color:"blue" },
  { firstName: "Juan" , lastName: "Calzado", occupation:"Student", age: 35, description: "Hello im a student" , image: "https://", color:"yellow" },
  { firstName: "Pedro" , lastName: "Bonilla", occupation:"Luyer", age: 55, description: "Hello im a luyer" , image: "https://", color:"purple" },
  { firstName: "Julia" , lastName: "Severino", occupation:"Ingeniere", age: 33, description: "Hello im a ingeniere" , image: "https://", color:"white" },
  { firstName: "Nicole" , lastName: "Vargas", occupation:"Art", age: 25, description: "Hello im an art " , image: "https://", color:"black" },
  
];

// Rooms Array

const roomsArray = [
    {name: "Patio"},
    {name: "Guest House"},
    {name: "Theater"},
    {name: "Observatory"},
    {name: "Living Room"},
    {name: "Spa"},
    {name: "Hall"},
    {name: "Ballroom"},
    {name: "Lounge"},
    {name: "Billiard Room"},
    {name: "Library"},
    {name: "Study"},
    {name: "Kitchen"},
    {name: "Conservatory"},
    {name: "Dining Room"},
];

// Weapons Array

const weaponsArray = [
    { name: "trophy" , weight: 15,},
    { name: "bat" , weight: 24,},
    { name: "dumbbell" , weight: 9,},
    { name: "pistol" , weight: 25,},
    { name: "trophy" , weight: 15,},
    { name: "rope" , weight: 14,},
    { name: "knife" , weight: 66,},
    { name: "candlestick" , weight: 70,},
    { name: "poison" , weight: 5,},
];

// ITERATION 2

function selectRandom(arr) {
    const randomIndex = Math.floor(Math.random() * (arr.length));

    return arr[randomIndex];
}

function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
}

// ITERATION 3

function revealMystery(mystery) {
    return `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!`;

}

