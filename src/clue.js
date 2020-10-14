// ITERATION 1

// Suspects Collection
const suspectsArray = [{ 
    firstName: "Jacob",
    lastName: "Green",
    nickname: "mrGreen", 
    occupation: "Entrepreneur",
    age: 45 ,
    description: "He has a lot of connections",
    color: "green",
},
    {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    nickname:"drOrchid",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    color: "white "},

    {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    nickname:"profPlum",
    age: 22,
    description:" Billionaire video game designer",
    color: "purple"
    },

    {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    nickname:"missScarlet",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    color: "red" 
    },

    {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    color:"blue"},

    {
    firstName: "Jack",
    lastName: "Mustard",
    occupation:" Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    color: "yellow" 
    }
];
// Rooms Collection
const roomsArray = [
{name: "Dining Room"},
{name: "Conservatory"},
{name: "Kitchen"},
{name: "Study"},
{name: "Library"},
{name: "Billiard Room"},
{name: "Lounge"},
{name: "Ballroom"},
{name: "Hall"},
{name: "Spa"},
{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"},
];

// Weapons Collection
const weaponsArray = 
     [{name: "rope",weight: 10},
        {name: "knife", weight: 8},
        {name: "candlestick", weight:2},
        {name: "dumbbell", weight: 30},
        {name: "poison", weight: 2},
        {name: "axe", weight: 15},
        {name: "bat", weight: 13},
        {name: "trophy", weight: 25},
        {name: "pistol", weight: 20},
       ];

function selectRandom (array){
  let max = array.length;
  let min= 0;
  let num = Math.floor(Math.random()*(max - min)+ min)
  return array[num]
   //let num = Math.round(Math.random()*array.length) ;
    //return array.
    
}
console.log(selectRandom(weaponsArray));
// ITERATION 2
function pickMystery(){
    sspct = selectRandom(suspectsArray)
    rm = selectRandom(roomsArray)
    wpn = selectRandom(weaponsArray)
    envelope = {
        suspect : sspct,
        room: rm ,
        weapon: wpn,
    }
    return envelope
}console.log(pickMystery())


// ITERATION 3

function revealMystery(envelope){
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!` 
}
