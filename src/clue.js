// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Music producer',
        age:34,
        description:'Charismatic',
        color:black
        
      },
      {
        firstName: 'Luguian',
        lastName: 'Roldano',
        occupation: 'Swimmer',
        age:33,
        description:'Strong mentality',
        color:yellow
        
      },
      {
        firstName: 'Olivier',
        lastName: 'Green',
        occupation: 'Designer',
        age:34,
        description:'Love for Detail',
        color:purple
        
      },
      {
        firstName: 'Julian',
        lastName: 'Bross',
        occupation: 'Actor',
        age:19,
        description:'Coolest man alive',
        color:orange
        
      },
      {
        firstName: 'Jasmine',
        lastName: 'Oreal',
        occupation: 'Dancer',
        age:34,
        description:'Like a divine',
        color:brown
        
      },
      {
        firstName: 'Suliman',
        lastName: 'Ocean',
        occupation: 'Diamond searcher',
        age:34,
        description:'Tenacious',
        color:red
        
      },
];

// Rooms Collection
const roomsArray = [
    'Kitchen',
    'Bathroom',
    "Library",
    "Dinning Room",
    "Bedroom",
    "Study Area",
    "Smoking Area",
    "Hall",
    "Guest House",
    "Spa",
    "Game room",
    "Theater",
    "Guest House",
    "Family room"
];

// Weapons Collection

var scissors = { name: "scissors", weight: 1 };
var bat = { name: "bat", weight: 3 };
var revolver = { name: "revolver", weight: 2 };
var rifle = { name: "rifle", weight: 3 };
var torpedo = { name: "torpedo", weight: 12 };
var sword = { name: "sword", weight: 9 };
var poison = { name: "poison", weight: 1 };
var cricket = { name: "cricket bat", weight: 25 };
var ashtray = { name: "ashtray", weight: 7};

const weaponsArray = [scissors,bat,revolver,rifle,torpedo,sword,poison, cricket, ];

// ITERATION 2
function selectRandom(){

let random= suspectsArray[Math.floor(Math.random() * suspectsArray.length)]


}

// ITERATION 3
function pickMystery(){
    suspectsArray[Math.floor(Math.random() * suspectsArray.length)]
    weaponsArray[Math.floor(Math.random() * weaponsArray.length)]
    roomsArray[Math.floor(Math.random() * roomsArray.length)]


}