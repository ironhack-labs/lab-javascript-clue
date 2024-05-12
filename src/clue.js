// ITERATION 1

// Suspects Array

const suspectsArray = [{
    firstName:"Rosemary",
    lastName:"Reid",
    occupation: "Journalist",
    age: 35,
    description: "Tall, red hair, green eyes. Always wears formal clothes.",
    image: "url",
    color: "Blue"
},{
    firstName:"Gilbert",
    lastName: "Decker",
    occupation: "Lawyer",
    age: 45,
    description: "Medium-height man, bald, wears glasses. Likes well-tailored suits.",
    image: "url",
    color:"Black"
},{
    firstName:"Evangeline",
    lastName: "Dougherty",
    occupation: "Doctor",
    age: 40,
    description: "Tall, slim woman, long brown hair, always wears a white lab coat.",
    image: "url",
    color:"Green"
},{
    firstName:"Harry",
    lastName: "Bell",
    occupation: "Chef",
    age: 38,
    description: "Robust man, stubble beard, short curly hair. Always smells like spices.",
    image: "url",
    color:"Red"
},{
    firstName:"Thelma",
    lastName: "Molina",
    occupation: "Detective",
    age: 50,
    description: "Short woman, large glasses, grey hair tied in a bun. Wearing a trench coat",
    image: "url",
    color:"Yellow"
},{
    firstName:"Jonh",
    lastName: "Mccarthy",
    occupation: "Teacher",
    age: 30,
    description: "Tall, slim man, dark hair, piercing eyes. Likes to wear comfortable clothes.",
    image: "url",
    color:"Gray"
}];

// Rooms Array

const roomsArray = [{
    name:"Hall"
},{
    name:"Lounge"
},{
    name:"Dining Room"
},{
    name:"Kitchen"
},{
    name:"Ballroom"
},{
    name:"Conservatory"
},{
    name:"Billiard Room"
},{
    name:"Library"
},{
    name:"Study"
},{
    name:"Cellar"
},{
    name:"Attic"
},{
    name:"Garage"
},{
    name:"Garden"
},{
    name:"Patio"
},{
    name:"Theater"
}];

// Weapons Array
const weaponsArray = [{
    name:"Revolver",
    weight:2,
},
{
    name:"Candlestick",
    weight:1,
},
{
    name:"Rope",
    weight:1,
},
{
    name:"Lead Pipe",
    weight:3,
},
{
    name:"Knife",
    weight:0.5,
},
{
    name:"Poison",
    weight:0.1,
},
{
    name:"Wrench",
    weight:3,
},
{
    name:"Trophy",
    weight:5,
},
{
    name:"Axe",
    weight:7,
},];


// ITERATION 2

function selectRandom(arrRandom) {


    if(arrRandom.length === 0){
        return undefined;
    }

    const mysteryIndex = Math.floor(Math.random() * arrRandom.length);

    console.log(mysteryIndex) 

    return arrRandom[mysteryIndex];
}

function pickMystery() {

    const crimeCommit = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
}

return crimeCommit
}


// ITERATION 3

function revealMystery(envelope) {

    const culprit = envelope.suspect;
    const weaponOfCrime = envelope.weapon.name;
    const placeOfCrime = envelope.room.name;

    const mysterySolved = `${culprit.firstName} ${culprit.lastName} killed Mr. Boddy using the ${weaponOfCrime} in the ${placeOfCrime}!`;

    console.log(mysterySolved)
    return mysterySolved;
}

