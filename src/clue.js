// ITERATION 1

// Suspects Array

const suspectsArray = [
{
    firstName:"Jacob",
    lastName:"Green",
    occupation:"Entrepreneur",
    age:18,
    description:"Tal, blond with blue eyes",
    image:" ",
    color:"Brown ",
},
{
    firstName: "Miguel",
    lastName:"Gomes",
    occupation:"Doctor",
    age: 39,
    description: "Short, brown hair with brown eyes",
    image:" ",
    color: "Blue",
},
{
    firstName:"Luis",
    lastName:"Fernandes",
    occupation:"Teacher",
    age:44,
    description: "Little people with black hair and brown eyes",
    image:"",
    color:"Green",
},
{
    firstName: "Maria",
    lastName: "Pereira",
    occupation: "Retired",
    age: 90,
    description: "Small, white haired with brown eyes",
    image: " ",
    color: "red",
},
{
    firstName: "Sara",
    lastName: "Rodrigues",
    occupation: "Nurse",
    age: 28,
    description: "Tall, red haired lady with green eyes",
    image: "",
    color: "Pink",
},
{
    firstName: "Francisca",
    lastName: "Jorge",
    occupation: "Student",
    age: 16,
    description: "Medium height with green hair and blue eyes",
    image: " ",
    color: "Black",
},
];

// Rooms Array

const roomsArray = [
    {name: "Master Bedroom"},
    {name: "Maids' Bedroom"},
    {name: "Kids Bedroom"},
    {name: "Butlers' Bedroom"},
    {name: "Master Bathroom"},
    {name: "Maids' Bathroom"},
    {name: "Kids Bathroom"},
    {name: "Butlers' Bathroom"},
    {name: "Kitchen"},
    {name: "Garage"},
    {name: "Living Room"},
    {name: "Library"},
    {name: "Dining Room"},
    {name: "Sauna"},
    {name: "Basement"},
];

// Weapons Array

const weaponsArray = [
{name: "handgun", weight: 7},
{name: "bat", weight: 3},
{name: "knife", weight: 200},
{name: "pan", weight: 1},
{name: "pen", weight: 1},
{name: "shotgun", weight:15},
{name: "vase", weight: 2},
{name: "glass", weight: 1},
{name: "chair", weight: 3},
];


// ITERATION 2


function selectRandom(array) {
    let randomIndex = Math.floor(Math.random() * array.length);

  console.log(randomIndex);

function selectRandom() {}
  array[randomIndex];

function pickMystery() {}
  return array[randomIndex];
}



function pickMystery() {
    const suspect = selectRandom(suspectsArray);

    const weapon = selectRandom(weaponsArray);

    const room = selectRandom(roomsArray);


    const envelope = {suspect, weapon, room};

    return envelope;

  }

// ITERATION 3

function revealMystery() {}
function revealMystery(envelope) {
  const { suspect, weapon, room } = envelope;

  const message = `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;

  return message;
}


const envelope = pickMystery();
const message = revealMystery(envelope);
console.log(message);

