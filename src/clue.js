// ITERATION 1

// Suspects Array

const suspectsArray = [
    user1 = { 
        firstName:"Maria",
        lastName:"Ariz",
        occupation:"Consultora",
        age: 1,
        description:"Maja",
        image:"imag1",
        color:"red"
    },
    user2 = {
        firstName:"Pia",
        lastName:"Soto",
        occupation:"Electricista",
        age: 2,
        description:"MuyMaja",
        image:"imag2",
        color:"blue"
    },
    user3 = { 
        firstName:"Amanda",
        lastName:"Gil",
        occupation:"Librera",
        age: 3,
        description:"Borde",
        image:"imag3",
        color:"black"
    },
    user4 = { 
        firstName:"Marina",
        lastName:"Soto",
        occupation:"Camara",
        age: 4,
        description:"Seria",
        image:"imag4",
        color:"yellow"
    },
    user5 = { 
        firstName:"Alba",
        lastName:"Ruiz",
        occupation:"Parada",
        age: 5,
        description:"Grinch",
        image:"imag5",
        color:"purple"
    },
    user6 = { 
        firstName:"Adrian",
        lastName:"Perez",
        occupation:"Parado",
        age: 6,
        description:"UltraMegaMajo",
        image:"imag6",
        color:"green"
    }
];

// Rooms Array

const roomsArray = [
    room1 = { 
        name:"room1",
    },
    room2 = {
        name:"room2",
    },
    room3 = { 
        name:"room3",
    },
    room4 = {
        name:"room4",
    },
    room5 = { 
        name:"room5",
    },
    room6 = {
        name:"room6",
    },
    room7 = {
        name:"room7",
    },
    room8 = { 
        name:"room8",
    },
    room9 = {
        name:"room9",
    },
    room10 = {
        name:"room10",
    },
    room11 = { 
        name:"room11",
    },
    room12 = {
        name:"room12",
    },
    room13 = {
        name:"room13",
    },
    room14 = { 
        name:"room14",
    },
    room15 = {
        name:"room15",
    }
];

// Weapons Array

const weaponsArray = [
    weapType1 = { 
        name:"weap1",
        weight:1,
    },
    weapType2 = {
        name:"weap2",
        weight:2,
    },
    weapType3 = { 
        name:"weap3",
        weight:3,
    },
    weapType4 = {
        name:"weap4",
        weight:4,
    },
    weapType5 = { 
        name:"weap5",
        weight:5,
    },
    weapType6 = {
        name:"weap6",
        weight:6,
    },
    weapType7 = {
        name:"weap7",
        weight:7,
    },
    weapType8 = { 
        name:"weap8",
        weight:8,
    },
    weapType9 = {
        name:"weap9",
        weight:9,
    }

];


// ITERATION 2

function selectRandom (select) {
    
    const index = Math.floor (Math.random() * select.length);
    const key = select[index];
    
    return key;
}

function pickMystery (sus, weap, roo) {

    const suspect = selectRandom (suspectsArray);
    const weapon =  selectRandom (weaponsArray);
    const room = selectRandom (roomsArray);
    
    return {suspect , weapon, room};
}


// ITERATION 3

function revealMystery (envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}
