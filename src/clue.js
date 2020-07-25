// ITERATION 1

// Suspects Collection

   const suspectsArray = [
       {
        firstName: 'Jacob',
        lastName: 'Zueb',
        occupation: 'Music producer',
        age:34,
        description:'Charismatic',
        color:'black',
        
      },
    {
        firstName: 'Luguian',
        lastName: 'Roldano',
        occupation: 'Swimmer',
        age:33,
        description:'Strong mentality',
        color:'yellow',
        
      },
      {
        firstName: 'Olivier',
        lastName: 'Green',
        occupation: 'Designer',
        age:34,
        description:'Love for Detail',
        color:'purple',
        
      },
      {
        firstName: 'Julian',
        lastName: 'Bross',
        occupation: 'Actor',
        age:19,
        description:'Coolest man alive',
        color:'orange',
        
      },
     {
        firstName: 'Jasmine',
        lastName: 'Oreal',
        occupation: 'Dancer',
        age:34,
        description:'Like a divine',
        color:'brown',
        
      },
      {
        firstName: 'Suliman',
        lastName: 'Ocean',
        occupation: 'Diamond searcher',
        age:34,
        description:'Tenacious',
        color:'red',
        
      }]


// Rooms Collection
const roomsArray = [
    {name:'Kitchen'},
    {name:'Bathroom'},
    {name:"Library"},
    {name:"Dinning Room"},
    {name:"Bedroom"},
    {name:"Study Area"},
    {name:"Smoking Area"},
    {name:"Hall"},
    {name:"Guest House"},
    {name:"Spa"},
    {name:"Game room"},
    {name:"Theater"},
    {name:"Guest House"},
    {name:"Family room"}
];

// Weapons Collection
weaponsArray =[
    { name: "scissors", weight: 1 },
    { name: "bat", weight: 3 },
    { name: "revolver", weight: 2},
    { name: "rifle", weight: 3 },
    { name: "torpedo", weight: 12 },
    { name: "sword", weight: 9},
    { name: "poison", weight: 1},
    { name: "cricket bat", weight: 25},
    { name: "ashtray", weight: 7}
]

// ITERATION 2
function selectRandom(array){

let randomIndex =  Math.floor(Math.random() * array.length)
let selectedIndex= array[randomIndex];
return selectedIndex;
}

function pickMystery(){
    
    let randomSuspect= selectRandom(suspectsArray);
    let randomWeapon = selectRandom(weaponsArray);
    let randomRoom = selectRandom(roomsArray)
    let mystery = {
        suspect:randomSuspect,
        weapon:randomWeapon,
        room:randomRoom
    };
    return mystery;
}
 //ITERATION 3
function revealMystery(envelope){
   
return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr.Boddy using the ${envelope.weapon.name}in the ${ envelope.room.name}!`;

}