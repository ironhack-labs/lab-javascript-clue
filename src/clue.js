// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
       firstName: 'Robson',
       lastName: 'Santos',
       occupation: 'Developer',
       age: 38,
       description: 'calm guy',
       image: 'tall',
       color: 'white',  
    },
    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Driver',
        age: 26,
        description: 'silent',
        image: 'palid',
        color: 'yellow',  
     },
     {
        firstName: 'Maria',
        lastName: 'Sil',
        occupation: 'Cook',
        age: 46,
        description: 'loud mouth',
        image: 'fattie',
        color: 'red',  
     },
     {
        firstName: 'Nicolas',
        lastName: 'Jones',
        occupation: 'Butler',
        age: 44,
        description: 'finesse',
        image: 'well educated',
        color: 'green',  
     },
     {
        firstName: 'John',
        lastName: 'Idler',
        occupation: 'Entrepeneur',
        age: 60,
        description: 'the brother',
        image: 'rich guy',
        color: 'blue',  
     },
     {
        firstName: 'Jenny',
        lastName: 'Su',
        occupation: 'Model',
        age: 21,
        description: 'barbie girl',
        image: 'beautiful and dumb',
        color: 'pink',  
     },
];

// Rooms Collection
const roomsArray = [
    {
        room: 'bedroom1',
    },
    {
        room: 'kitchen',
    },
    {
        room: 'living room',
    },
    {
        room: 'backyard',
    },
    {
        room: 'restroom1',
    },
    {
        room: 'pool',
    },
    {
        room: 'Billiard Room',
    },
    {
        room: 'dinning room',
    },
    {
        room: 'hallway',
    },
    {
        room: 'restroom2',
    },
    {
        room: 'bathroom',
    },
    {
        room: 'gym',
    },
    {
        room: 'bathroom2',
    },
    {
        room: 'garage',
    },
    {
        room: 'garden',
    },

];

// Weapons Collection
const weaponsArray = [
    {
        name: 'knife',
        weight: 0.5,
    },
    {
        name: 'revolver',
        weight: 2,
    },
    {
        name: 'bat',
        weight: 1.5,
    },
    {
        name: 'sword',
        weight: 3,
    },
    {
        name: 'poison',
        weight: 0.1,
    },
    {
        name: 'gas',
        weight: 0.7,
    },
    {
        name: 'rope',
        weight: 0.3,
    },
    {
        name: 'sculpture',
        weight: 4,
    },
    {
        name: 'iron ball',
        weight: 2.2,
    },
];

// ITERATION 2
function selectRandom (arr) {
    const randomCard = Math.floor(Math.random() * arr.length);
  return arr[randomCard];
}

function pickMystery () {
    let envelope;
      return envelope = {
          suspect: selectRandom(suspectsArray),
          room: selectRandom(roomsArray),
          weapon: selectRandom(weaponsArray),
      }
  }

// ITERATION 3
function revealMystery(object)
{
    return `${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`;
}

revealMystery (envelope)