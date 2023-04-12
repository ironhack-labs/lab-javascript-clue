// ITERATION 1

// Suspects Array

const suspectsArray = [
    {firstName: "", lastName:"", occupation:"", age: 30, description:"", image:"", color:""},
    {firstName: "", lastName:"", occupation:"", age: 30, description:"", image:"", color:""},
    {firstName: "", lastName:"", occupation:"", age: 30, description:"", image:"", color:""},
    {firstName: "", lastName:"", occupation:"", age: 30, description:"", image:"", color:""},
    {firstName: "", lastName:"", occupation:"", age: 30, description:"", image:"", color:""},
    {firstName: "", lastName:"", occupation:"", age: 30, description:"", image:"", color:""}
];

// Rooms Array

const roomsArray = [
    {room1:"", name:""},
    {room2:"", name:""},
    {room3:"", name:""},
    {room4:"", name:""},
    {room5:"", name:""},
    {room6:"", name:""},
    {room7:"", name:""},
    {room8:"", name:""},
    {room9:"", name:""},
    {room10:"", name:""},
    {room11:"", name:""},
    {room12:"", name:""},
    {room13:"", name:""},
    {room14:"", name:""},
    {room15:"", name:""}

]

// Weapons Array

const weaponsArray = [
    {weapon1:"", name:"", weight: 2.2},
    {weapon2:"", name:"", weight: 2.2},
    {weapon3:"", name:"", weight: 2.2},
    {weapon4:"", name:"", weight: 2.2},
    {weapon5:"", name:"", weight: 2.2},
    {weapon6:"", name:"", weight: 2.2},
    {weapon7:"", name:"", weight: 2.2},
    {weapon8:"", name:"", weight: 2.2},
    {weapon9:"", name:"", weight: 2.2}    
];


// ITERATION 2

function selectRandom(arr) {
    if (arr.length === 0){
        return undefined;
    } else if (arr.length === 1){
        return arr[0];
    } else {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
      }
          
}

function pickMystery(_randomMystery) {
    return {suspect: selectRandom(suspectsArray),
           weapon: selectRandom(weaponsArray),
           room: selectRandom(roomsArray),
    }   
}



// ITERATION 3

function revealMystery(envelope){
return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}


